<template>
  <div class="feedback-history-wrap">
    <div class="title fr">
        <i class="fas fa-sms"></i> <span>My Recent Feedback</span>
    </div>
    <div v-for="feedback in this.$store.state.userFeedbackHistory" :key="feedback.recorded" class="feedback-item">
        <span dt>{{ new Date(feedback.recorded).toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"}) }}</span>
        <span fb>{{ feedback.event_title }}</span>
        <span><i v-for="(i,index) in feedback.rating" :key="index" class="fas fa-star"></i></span>
        <span cm>{{ feedback.comments }}</span>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.feedback-history-wrap{
    background:var(--nc-grey-light);
    padding:1rem;

    .title{
        padding:.5rem;
        padding-bottom:1rem;
        font-size:140%;
        justify-content: center;
    }

    .feedback-item{
        padding:1rem;
        border-top:solid 1px var(--nc-grey);
        display:flex;
        flex-direction: column;
        gap:.25rem;

        i{
            color:var(--star-rating);
        }

        span{
            &[fb]{
                font-size:120%;
            }
            &[dt]{
                color:var(--nc-blue-light-hv);
            }
            &[cm]{
                color:var(--nc-grey);
                font-style:italic;
            }
        }
    }
}
</style>