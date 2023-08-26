<template>
  <!-- Loader section -->
  <div v-if="!this.$store.state.appLoaded" class="loader">Loading..</div>

  <!-- Notifs and Other Externals-->
  <div v-if="this.$store.state.appLoaded" class="ext">
    <mainNotifs />
  </div>

  <!-- Main Section -->
  <transition name="fade" mode="out-in">
    <div v-if="this.$store.state.appLoaded" class="main">
      <!--Main top bar component- user auth, logo etc..-->
      <mainTopBar />

      <!--Router for inner pages, complete with side menu-->
      <router-view class="content" />

      <!--Footer component-->
      <mainFooter />
    </div>
  </transition>
</template>

<script>
//imports scripts
import axios from "axios";
import store from "./store";

//componen imports
import mainTopBar from "./components/Main/main-topBar.vue";
import mainFooter from "./components/Main/main-footer.vue";
import mainNotifs from "./components/Main/main-notifs.vue";

export default {
  //components
  components: { mainTopBar, mainFooter, mainNotifs },
  //Initialization of main app first request
  mounted() {
    this.refreshEventData();
    this.fetchUserSettings();
  },
  methods: {
    //main dataLoad
    async refreshEventData() {
      await axios
        .post(store.state.endpointURL + "evsDataStream", {
          contentType: "application/json",
        })
        .then((res) => {
          //console.log(JSON.parse(res.data.d));
          let eventDataSource = JSON.parse(res.data.d);
          //set the various datasets
          //all data stored in the data store for global use across all components
          store.state.curEvents = eventDataSource.all_events_upcoming;
          store.state.categoryList = eventDataSource.categories;
          store.state.venueList = eventDataSource.venues;
          store.state.facilitatorList = eventDataSource.facilitators;
          store.state.curUser = eventDataSource.logged_on_user;
          store.state.nextMonths = eventDataSource.nextMonths;

          this.populatedFeedbackHistory(
            eventDataSource.userSignups
          );

          store.state.userGeneralFeedback = eventDataSource.userFeedbackHistory;

          //set initial month name
          store.state.selectedMonthName = eventDataSource.nextMonths[0].month;
          store.state.selectedMonthNameLong =
            eventDataSource.nextMonths[0].monthName;
          store.state.selectedMonthNumber =
            eventDataSource.nextMonths[0].monthNumber;

          //call check filter
          store.state.checkFilter = true;

          //set the loaded state of the app
          store.state.appLoaded = true;
        })
        .catch((err) => {
          console.error(err);
        });
    },

    //fetch user settings
    async fetchUserSettings() {
      await axios
        .post("https://ashypls.com/eventsbooking/data/userSettings", {
          contentType: "application/json",
        })
        .then((response) => {
          if (response.data.d != null) {
            store.state.userSettings = JSON.parse(
              JSON.parse(response.data.d)[0]
            );
            //update the filters/displays
            store.state.pagingPageSize = store.state.userSettings.pageSize;
            store.state.viewMode = store.state.userSettings.viewMode;
          }
        });
    },

    //refresh user settings
    async syncUserSettings() {
      await axios.post("https://ashypls.com/eventsbooking/data/syncSettings", {
        contentType: "application/json",
        settingsJson: JSON.stringify(store.state.userSettings),
      });
    },

    //calendar load
    async loadCalendarView() {
      let monthNumber = store.state.selectedMonthNumber;

      await axios
        .post("https://ashypls.com/eventsbooking/data/evsCalendarView", {
          contentType: "application/json",
          month: monthNumber,
        })
        .then((response) => {
          store.state.calenderView = JSON.parse(response.data.d);
        });
    },

    populatedFeedbackHistory(signups) {
      let _userSignupsHistory = [];
      let _userSignupsFuture = [];
      let _feedback = [];
      let _feedback_req = [];

      signups.forEach((signup) => {

        //previous signups WITH feedback
        if (signup.feedback_id && signup.historical == "True") {
          _feedback.push(signup);
        }

        //check previous
        if (signup.historical == "True") {
          _userSignupsHistory.push(signup);
        } else {
          _userSignupsFuture.push(signup);
        }

        //previous events WITHOUT feedback
        if (!signup.feedback_id && signup.historical == 'True'){
          _feedback_req.push(signup);
        }

      });



      store.state.userSignupHistory = _userSignupsHistory;
      store.state.userSignupFuture = _userSignupsFuture;
      store.state.userFeedbackHistory = _feedback;
      store.state.userFeedbackRequired = _feedback_req;

      // console.log(_userSignupsHistory);
      // console.log(_userSignupsFuture);
      // console.log(_feedback);
      // console.log(_feedback_req);

      //store.state.userSignups =
      //store.state.userFeedbackHistory =
    },
  },
  watch: {
    "$store.state.checkFilter": function () {
      //rebind the list only if the checkFilter has been updated
      if (this.$store.state.checkFilter == false) {
        return;
      }
      //clear view
      this.$store.state.eventView = [];
      this.$store.state.pagedView = [];
      //rebind
      this.$store.state.curEvents.forEach((event) => {
        //flag to decide if we can push this event to the view or not
        let canPushEvent = true;

        //check searching
        if (this.$store.state.searchTerm != null) {
          //the event title must contain this text in order to be pushed to the view
          if (
            !event.event_title
              .toLowerCase()
              .includes(this.$store.state.searchTerm.toLowerCase())
          ) {
            canPushEvent = false;
          }
        }

        //month check
        //the event_month_name must contain the selected month in order to be pushed to the view
        if (
          !event.event_month_name
            .toLowerCase()
            .includes(this.$store.state.selectedMonthName.toLowerCase())
        ) {
          canPushEvent = false;
        }

        //facilitators check
        this.$store.state.facilitatorList.forEach((facilitator) => {
          if (
            event.facilitator_name == facilitator.facilitator_name &&
            facilitator.checked == false
          ) {
            canPushEvent = false;
          }
        });

        //venues check
        this.$store.state.venueList.forEach((venue) => {
          if (event.venue_name == venue.venue_name && venue.checked == false) {
            canPushEvent = false;
          }
        });

        //categories check
        this.$store.state.categoryList.forEach((category) => {
          if (
            event.category_name == category.category_name &&
            category.checked == false
          ) {
            canPushEvent = false;
          }
        });

        //check and push
        if (canPushEvent) {
          this.$store.state.eventView.push(event);
        }
      });

      //paging checks
      let viewItemCount = this.$store.state.eventView.length;
      let pageSize = this.$store.state.pagingPageSize;
      let currentPage = this.$store.state.pagingCurrentPage;

      //calculate page buttons
      this.$store.state.pagingTotalPages = Math.ceil(viewItemCount / pageSize);

      //paging binding
      let startIndex = currentPage * pageSize - pageSize;
      let endIndex = currentPage * pageSize;

      for (let i = startIndex; i < endIndex; i++) {
        if (this.$store.state.eventView[i]) {
          this.$store.state.pagedView.push(this.$store.state.eventView[i]);
        }
      }

      //clear the watch
      this.$store.state.checkFilter = false;

      //sync the user settings
      this.$store.state.userSettings.viewMode = this.$store.state.viewMode;
      this.$store.state.userSettings.pageSize =
        this.$store.state.pagingPageSize;
      this.syncUserSettings();
    },
    "$store.state.selectedMonthNumber": function () {
      this.loadCalendarView();
    },
  },
};
</script>

<style lang="scss" scoped>
/* Change main here for parent CSS */
.main {
  display: flex;
  flex-direction: column;
  height: 100vh;
  /*Allow content to grow to max width specifically*/
  .content {
    flex-grow: 1;
  }
}
</style>