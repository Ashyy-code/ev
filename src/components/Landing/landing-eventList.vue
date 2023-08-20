<template>

  
   
  <eventListCalendar v-if="this.$store.state.viewMode == 'calendar'" />
  <eventListGrid v-if="this.$store.state.viewMode == 'grid'" />
  <eventListList v-if="this.$store.state.viewMode == 'list'" />

  

  <div
    class="pager"
    v-if="
      this.$store.state.viewMode == 'list' ||
      this.$store.state.viewMode == 'grid'
    "
  >
    <div
      v-for="n in this.$store.state.pagingTotalPages"
      :selected="n == this.$store.state.pagingCurrentPage"
      :key="n"
      class="pager-item"
      @click="
        this.$store.state.pagingCurrentPage = n;
        this.$store.state.checkFilter = true;
      "
    >
      {{ n }}
    </div>
  </div>


  <div v-if="this.$store.state.eventView.length < 1" class="no-events">
    There are no events running this month. Check back later.
  </div>
</template>

<script>
//component imports
import eventListCalendar from '../EventsList/eventList-Calendar.vue';
import eventListGrid from '../EventsList/eventList-Grid.vue';
import eventListList from '../EventsList/eventList-List.vue';

export default {
  components:{eventListCalendar,eventListGrid,eventListList},
  methods: {
    getDayName(dateStr, locale) {
      var date = new Date(dateStr);
      return date.toLocaleDateString(locale, { weekday: "long" });
    },
  },
};
</script>

<style lang="scss" scoped>


.pager {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 0.5rem;

  .pager-item {
    background: var(--nc-grey);
    padding: 0.5rem 1rem;
    color: white;
    cursor: pointer;
    font-size: 110%;
    font-weight: bold;
    &:hover {
      background: var(--nc-grey-hv);
    }
    &[selected="true"] {
      background: var(--nc-teal);
      color: white;
      &:hover {
        background: var(--nc-teal-hv);
      }
    }
  }
}

.no-events {
  border: solid 1px var(--nc-grey-light);
  padding: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  color: var(--nc-grey);
}
</style>