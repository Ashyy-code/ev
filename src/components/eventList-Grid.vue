<template>
  <!--Grid view mode-->
  <div class="event-grid-wrap" v-if="this.$store.state.viewMode == 'grid'">
    <div
      v-for="event in this.$store.state.pagedView"
      :key="event.event_id"
      class="event animate__animated animate__fadeIn animate__faster"
      @click="this.$router.push('/Event/' + event.event_id)"
    >
      <div class="event-date">
        <div class="date-wrap">
          {{ getDayName(event.event_day_iso, "en-GB") }}
          {{ event.event_day_number }} {{ event.event_month_name }}
          {{ event.event_year_number }}
        </div>
      </div>
      <div class="event-details">
        <span ttl>{{ event.event_title }}</span>
        <span tm
          >{{ event.event_start_time }} - {{ event.event_end_time }}</span
        >
        <span vn>{{ event.venue_name }} - {{ event.venue_location_info }}</span>
      </div>
      <div class="category">Category: {{ event.category_name }}</div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    getDayName(dateStr, locale) {
      var date = new Date(dateStr);
      return date.toLocaleDateString(locale, { weekday: "long" });
    },
  },
};
</script>

<style lang="scss" scoped>
.event-grid-wrap {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  .event {
    background: var(--nc-grey-light);
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;

    cursor: pointer;

    .category {
      color: var(--nc-teal);
      padding: 0.4rem 0.8rem;
      font-size: 110%;
    }

    &:hover {
      outline: solid 3px var(--nc-blue-hv);
      .event-date {
        background: var(--nc-blue-hv);
      }
    }

    .event-details {
      display: flex;
      flex-direction: column;
      padding: 0.75rem;
      flex-grow: 1;

      span {
        color: var(--nc-grey-dark);
        &[ttl] {
          color: var(--nc-grey-dark);
          font-size: 130%;
        }
        &[tm] {
          font-size: 110%;
          color: var(--nc-teal);
          font-weight: bold;
        }
        &[dt] {
          font-style: normal;
          color: var(--nc-blue-light-hv);
          font-size: 100%;
          margin-bottom: 0.5rem;
        }

        i {
          font-style: normal;
        }
      }
    }

    .event-date {
      background: var(--nc-blue);
      padding: 0.5rem;
      color: white;
      font-size: 110%;
      display: flex;
      flex-direction: row;

      .date-wrap {
        display: flex;
        flex-direction: row;

        span {
          &[dy] {
            font-size: 110%;
          }
        }
      }
    }
  }
}
</style>