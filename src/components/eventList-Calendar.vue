<template>
  <!--Calendar-->
  <div v-if="!this.$store.state.calenderView == []"
    class="event-calendar-wrap"
  >
    <div class="item animate__animated animate__fadeIn animate__faster">
      Monday
    </div>
    <div class="item animate__animated animate__fadeIn animate__faster">
      Tuesday
    </div>
    <div class="item animate__animated animate__fadeIn animate__faster">
      Wednesday
    </div>
    <div class="item animate__animated animate__fadeIn animate__faster">
      Thursday
    </div>
    <div class="item animate__animated animate__fadeIn animate__faster">
      Friday
    </div>
    <div class="item animate__animated animate__fadeIn animate__faster">
      Saturday
    </div>
    <div class="item animate__animated animate__fadeIn animate__faster">
      Sunday
    </div>
    <div
      v-for="day in this.$store.state.calenderView"
      :key="day.day_id"
      class="day animate__animated animate__fadeIn animate__faster"
      :iscurmonth="day.is_cur_month"
    >
      <span class="day-number">{{ day.day }}</span>
      <div v-if="day.events" class="events">
        <div
          v-for="event in JSON.parse(day.events)"
          :key="event.event_id"
          class="event"
          @mouseenter="tooltipShow($event.target,event)"
          @mouseleave="tooltipHide()"
          @click="this.$router.push('/Event/' + event.event_id)"
        >
          {{ event.event_title.substring(0, 20) + "..." }}
        </div>
      </div>
    </div>
  </div>

  <div v-if="ttEvent" class="tooltip" :style="'top:' + ttY + 'px;left:' + ttX + 'px;display:' + showTT">
    <div class="item">
      {{ ttEvent.event_title }}<br />
      {{ ttEvent.event_start_time }} - {{ ttEvent.event_end_time }} <br />
      {{ ttEvent.venue_name }}
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    tooltipShow(e,event){
      let maxR = document.querySelector(".event-calendar-wrap").getBoundingClientRect().x + document.querySelector(".event-calendar-wrap").getBoundingClientRect().width ;
      var rect = e.getBoundingClientRect()  
      this.ttY = rect.y - 120;
      this.ttX = rect.x;
      this.showTT = 'block';
      this.ttEvent = event;
      //check bounding box
      if (this.ttX + rect.width >= maxR){
        this.ttX = maxR - 306;
      }
    },
    tooltipHide(){
      this.showTT = 'none';
    }
  },
  data(){
    return{
      ttX:0,
      ttY:0,
      showTT:'none',
      ttEvent:null,
    }
  }
};
</script>

<style lang="scss" scoped>
.event-calendar-wrap {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0.1rem;
  width:100%;

  .item {
    text-align: center;
    padding: 0.5rem;
    background: var(--nc-blue);
    color: white;
  }

  .day {
    width: 100%;
    background: var(--nc-white-dark);
    aspect-ratio: 1;
    position: relative;
    overflow: hidden;

    .events {
      display: flex;
      flex-direction: column;
      gap: 1px;
      margin-top: 2rem;

      .event {
        background: var(--nc-teal);
        color: white;
        font-size: 70%;
        padding: 0.25rem;
        cursor: pointer;

        &:hover{
          background:var(--nc-teal-hv);
        }

      }
    }

    .day-number {
      position: absolute;
      top: 0.15rem;
      right: 0.25rem;
      font-size: 130%;
      color: var(--nc-cal-number);
    }

    &[iscurmonth="True"] {
      background: var(--nc-grey-sort);
    }
    &[iscurmonth="False"] {
      .day-number {
        color: var(--nc-grey-hv);
      }
    }
  }
}

.tooltip{
  position: absolute;
  width:300px;
  background:var(--nc-blue);
  color:var(--nc-white);
  border-radius: .25rem;

  .item{
    padding:1rem;
  }
}
</style>