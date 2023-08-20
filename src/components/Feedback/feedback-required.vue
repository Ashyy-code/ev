<template>
  <div class="fb-recent">
    <div class="title fr">
      <i class="fas fa-check"></i><span>Awaiting Your Feedback</span>
    </div>
    
    <div v-for="event in feedbackreqs" :key="event.event_id" class="fb-event">
      <span ttl>{{ event.event_title }}</span>
      <span>{{ event.event_day }}</span>
      <button>Leave Feedback</button>
    </div>
  </div>
</template>

<script>
export default {
    mounted(){
      //check if any previous events need feedback leaving for them
      this.$store.state.userSignups.forEach(signup =>{
        let feedbackNeeded = true;
        //check if this event has already been fedback on by the user
        this.$store.state.userFeedbackHistory.forEach(item =>{
          if (item.event_id == signup.event_id){
              feedbackNeeded = false
          }
        });
        if(feedbackNeeded && signup.historical == 'True'){
          this.feedbackreqs.push(signup);
        }
      });
    },

    data(){
      return{
        feedbackreqs:[]
      }
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
    
    button{
      transition:all 300ms ease;
      &:hover{
        background:var(--nc-blue);
        color:white;
      }
    }

    span[ttl]{
      flex-grow: 1;
    }
  }
}
</style>