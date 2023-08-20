<template>
      <!--List view mode-->
   <div class="event-list-wrap" v-if="this.$store.state.viewMode == 'list'">
    <div
      v-for="event in this.$store.state.pagedView"
      :key="event.event_id"
      class="event animate__animated animate__fadeIn animate__faster"
      @click="this.$router.push('/Event/' + event.event_id)"
    >
      <div class="category">
        {{ event.category_name }}
      </div>
      <div class="event-date">
        <div class="date-wrap">
          <span mn>{{ event.event_month_name.substring(0, 3) }}</span>
          <span dy>{{ event.event_day_number }}</span>
        </div>
      </div>
      <div class="event-details">
        <span ttl>{{ event.event_title }}</span>
        <span dt
          ><i>{{ getDayName(event.event_day_iso, "en-GB") }}</i>
          {{ event.event_day_number }} {{ event.event_month_name }}
          {{ event.event_year_number }}</span
        >
        <span tm
          >{{ event.event_start_time }} - {{ event.event_end_time }}</span
        >
        <span vn>{{ event.venue_name }} - {{ event.venue_location_info }}</span>
      </div>
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
}
</script>

<style lang="scss" scoped>
.event-list-wrap {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  .event {
    background: var(--nc-grey-light);
    padding: 0;
    display: flex;
    position: relative;

    cursor: pointer;

    .category {
      position: absolute;
      bottom: 1rem;
      right: 1rem;
      padding: 0.4rem 0.8rem;
      color: white;
      border-radius: 0.25rem;
      background: var(--nc-grey);
      display: flex;
      padding-bottom:.5rem;
      font-size:90%;
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
      aspect-ratio: 1;
      width: min-content;
      padding: 0.5rem;
      color: white;
      font-size: 110%;
      display: grid;
      place-items: center;
      text-align: center;
      min-width: 80px;

      .date-wrap {
        display: flex;
        flex-direction: column;

        span {
          &[dy] {
            font-size: 140%;
          }
        }
      }
    }
  }
}
</style>