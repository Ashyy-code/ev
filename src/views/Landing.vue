<template>
  <!--main wrap-->
  <div class="mainwrap">
    <!--two col layout-->
    <div class="col-set">
      <!--side menu-->
      <div class="lcol">
        <landingSearch />
        <landingFilter />
        <allMyPanel />
      </div>
      <!--main section-->
      <div class="rcol">
        <landingMonthPicker />
        <eventsSort />
        <landingEventList />
      </div>
    </div>
  </div>
</template>

<script>
//component imports
import landingMonthPicker from "../components/Landing/landing-monthPicker.vue";
import landingSearch from "../components/Landing/landing-search.vue";
import landingFilter from "../components/Landing/landing-filter.vue";
import allMyPanel from "../components/Global/all-myPanel.vue";
import eventsSort from "../components/Landing/landing-eventSort.vue";
import landingEventList from "../components/Landing/landing-eventList.vue";

export default {
  //components
  components: {
    landingMonthPicker,
    landingSearch,
    landingFilter,
    allMyPanel,
    eventsSort,
    landingEventList,
  },
};
</script>

<style lang="scss" scoped>
</style>