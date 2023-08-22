<template>
  <div class="feedback-general-wrap">
    <div class="title fr">
      <i class="fas fa-comment"></i>
      <span>General Feedback or Comments</span>
    </div>
    <div class="form">
      <span
        ><FormKit type="text" label="Your Name (Leave blank for annoymous)"
      /></span>
      <span
        ><FormKit
          type="select"
          label="Comments are related to:"
          :options="feedbackTypes"
        ></FormKit>
      </span>
      <span><FormKit type="textarea" label="Leave us a comment" /></span>
      <span><FormKit type="button" label="Submit Feedback" /></span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      feedbackTypes: [
        "General Feedback",
        "Training Requests",
        "System and Process",
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.feedback-general-wrap {
  .title {
    font-size: 140%;
    padding: 0.5rem;
    gap: 0.5rem;
  }

  .form {
    background: white;
    padding:1rem;
    border:solid 5px var(--nc-grey-light);
  }
}
</style>