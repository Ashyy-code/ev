<template>
  <div class="fb-recent">
    <div class="title fr">
      <i class="fas fa-check"></i><span>Feedback on your previous Events</span>
    </div>
    
    <div v-for="event in this.$store.state.userFeedbackRequired" :key="event.event_id" class="fb-event">
      <span ttl>{{ event.event_title }}</span>
      <span>{{ event.event_day }}</span>
      <button>Leave Feedback</button>
    </div>
  </div>
</template>

<script>
export default {
    mounted(){
    },

    data(){
    }
}
</script>

<style lang="scss" scoped>
.fb-recent{
  background:var(--nc-teal);
  color:white;
  padding:1rem;
  display:flex;
  flex-direction: column;
  gap:.5rem;

  .title{
    font-size:140%;
  }

  .fb-event{
    background:white;
    color:var(--nc-grey-dark);
    padding:.5rem 1rem;
    display:flex;
    justify-content: space-between;
    align-items: center;
    gap:1rem;
    


    span[ttl]{
      flex-grow: 1;
    }
  }
}
</style>