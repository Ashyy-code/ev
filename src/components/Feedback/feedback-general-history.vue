<template>
  <div class="feedback-general-history-wrap">
    <div class="title fr">
        <i class="fas fa-history"></i>
      <span>My comments / feedback</span>
    </div>
    <div class="feedback-history">
        <div v-for="feedback in this.$store.state.userGeneralFeedback" :key="feedback.feedback_id" class="item">
            {{ feedback.feedback_type }}
            {{ feedback.comments }}
        </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.feedback-general-history-wrap{
    height:100%;
    max-width:100%;


    .feedback-history{
        padding:1rem;
        background:var(--nc-white-dark);
    }

    .title {
    font-size: 140%;
    padding: 0.5rem;
    gap: 0.5rem;
  }
}
</style>