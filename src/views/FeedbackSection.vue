<template>
  <div class="feeback-wrap mainwrap">
    <div class="col-set">
      <div class="lcol">
        <backButton />
        <allMyPanelVue />
        <feedbackHistory />
      </div>
      <div class="rcol">
        <h1>Leave us some feedback</h1>
        <div class="fb-general-wrap">
          <feedbackGeneral />
          <feedbackGeneralHistory />
        </div>

        <feedbackRequired />
      </div>
    </div>
  </div>
</template>

<script>
import allMyPanelVue from "../components/Global/all-myPanel.vue";
import feedbackHistory from "../components/Feedback/feedback-history.vue";
import feedbackRequired from "../components/Feedback/feedback-required.vue";
import feedbackGeneral from "../components/Feedback/feedback-general.vue";
import feedbackGeneralHistory from "../components/Feedback/feedback-general-history.vue";

import backButton from "../components/Global/back-button.vue";

export default {
  components: {
    allMyPanelVue,
    feedbackHistory,
    feedbackRequired,
    backButton,
    feedbackGeneral,
    feedbackGeneralHistory,
  },
};
</script>

<style lang="scss" scoped>
h1 {
  padding: 0;
  margin: 0;
  text-align: center;
}
.fb-general-wrap {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 2rem;
}
</style>