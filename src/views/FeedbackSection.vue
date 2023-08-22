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
        <feedbackGeneral />
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

import backButton from "../components/Global/back-button.vue";

export default {
  components: { allMyPanelVue, feedbackHistory, feedbackRequired, backButton, feedbackGeneral },
};
</script>

<style lang="scss" scoped>
h1{
  padding:0;
  margin:0;
  text-align: center;
}
</style>