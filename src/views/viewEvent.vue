<template>
  <!--main wrap-->
  <div class="mainwrap">
    <!--two col layout-->
    <div class="col-set">
      <!--side menu-->
      <div class="lcol">
        <backButton />
        <allMyPanel />
      </div>
      <!--main section-->
      <div class="rcol">
        <div
          class="event-view-wrapper animate__animated animate__fadeIn animate__faster"
        >


          <div class="event-view-top">
            <div class="event-image">
              <img :src="selectedEvent.category_image" alt="" />
            </div>
            <div class="event-title">
              <h1>{{ selectedEvent.event_title }}</h1>
              <div class="event-tv">
                <div class="ebox-top">
                  <div class="day">
                    <i class="fas fa-calendar"></i><span>{{ selectedEvent.event_day }}</span>
                  </div>
                  <div class="time">
                    <i class="fas fa-clock"></i><span>{{ selectedEvent.event_start_time }} - {{ selectedEvent.event_end_time }}</span>
                  </div>
                  
                </div>
                <div class="ebox-top">
                  <div class="day">
                    <i class="fas fa-building"></i><span>{{ selectedEvent.venue_name }}</span>
                  </div>
                  <div class="day">
                    <i class="fas fa-building"></i><span>{{ selectedEvent.venue_location_info }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="category-wrap">
            Category: <b>{{ selectedEvent.category_name }}</b>
          </div>

          <div class="description-wrap">
            {{ selectedEvent.event_details }}
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
//imports
import axios from "axios";
import store from "../store";
//component imports
import allMyPanel from "../components/Global/all-myPanel.vue";
import backButton from "../components/Global/back-button.vue";

export default {
  //components
  components: {
    allMyPanel,
    backButton
  },
  mounted() {
    //console.log(this.$route.params.id)
    //load the event details
    this.loadEventDetails();
  },
  methods: {
    async loadEventDetails() {
      await axios
        .post(store.state.endpointURL + "evDetails", {
          contentType: "application/json",
          event_id: this.$route.params.id,
        })
        .then((response) => {
          this.selectedEvent = JSON.parse(response.data.d).Table[0];
          //console.log(this.selectedEvent);
        });
    },
  },
  data() {
    return {
      selectedEvent: [],
    };
  },
};
</script>

<style lang="scss" scoped>

.event-view-wrapper {
  background: var(--nc-grey-light);

  .event-view-top {
    display: flex;

    h1{
      margin:0;
      padding:0;
      padding-top:1rem;
      font-weight: normal;
    }

    .event-title {
      display: flex;
      flex-direction: column;
      padding-right:1rem;
      gap:1rem;

      .event-tv {
        display: flex;
        flex-direction: row;
        gap:1rem;

        .ebox-top {
          background: var(--ebox);
          padding: 1rem;
          flex-grow:1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          font-size:120%;

          div{
             display:flex;
            flex-direction: row;
            align-items: center;
            gap:.25rem;
          }
          .day{
            color:var(--nc-blue);
          }
          .time{
            color:var(--nc-teal);
          }

          i{
            padding-top:5px;
            font-size:130%;
            color:var(--nc-grey-dark);
          }
        }
      }
    }

    .event-image {
      min-width: 20%;
      max-width: 20%;
      padding: 1rem;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      padding-bottom:0;

      img {
        aspect-ratio: 1;
        width: 100%;
        height:100%;
        object-fit: cover;
      }
    }
  }
}

.category-wrap{
  background:var(--nc-grey);
  margin-top:1rem;
  padding:.5rem 1rem;
  color:white;
}

.description-wrap{
  padding:1rem;
  color:var(--nc-grey-dark);
  font-size:110%;
  line-height: 1.6rem;
}
</style>