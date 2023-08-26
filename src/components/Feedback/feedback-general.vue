<template>
  <div class="feedback-general-wrap">
    <div class="title fr">
      <i class="fas fa-comment"></i>
      <span>Leave new comment / feedback</span>
    </div>
    <form v-on:submit.prevent="onSubmit" class="form">
      <div class="field">
        <label for="fb_inp_name">Your Name (Leave blank for anonymous)</label>
        <input id="fb_inp_name" type="text" />
      </div>

      <div class="field">
        <label for="Type of feedback"></label>
        <select>
          <option v-for="option in feedbackTypes" :key="option">
            {{ option }}
          </option>
        </select>
      </div>

      <div class="field">
        <label for="fb_inp_comments">Your Feeback / Comments</label>
        <textarea id="fb_inp_comments" cols="30" rows="10"></textarea>
      </div>

      <div class="field">
        <button>Submit Feedback</button>
      </div>
    </form>
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
  flex-grow:1;

  .title {
    font-size: 140%;
    padding: 0.5rem;
    gap: 0.5rem;
  }

  .form {
    background: var(--nc-white);
    padding: 1rem;
    border: solid 5px var(--nc-white-dark);
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .field {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;

      input,
      select,
      textarea {
        border: solid 2px var(--nc-grey-light);
        padding: 0.75rem;
        font-size: 100%;
      }

      button {
        width: min-content;
        white-space: nowrap;
        margin: 0 auto;
      }
    }
  }
}
</style>