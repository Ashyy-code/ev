<template>
  <div class="feeback-wrap mainwrap">
    <div class="col-set">
      <div class="lcol">
        [Make button lol]
        <allMyPanelVue />
        <feedbackHistory />
      </div>
      <div class="rcol">
        <feedbackRequired />
      </div>
    </div>
  </div>
</template>

<script>
import allMyPanelVue from "../components/Global/all-myPanel.vue";
import feedbackHistory from "../components/Feedback/feedback-history.vue";
import feedbackRequired from "../components/Feedback/feedback-required.vue";

export default {
  components: { allMyPanelVue, feedbackHistory, feedbackRequired },
};
</script>

<style>
</style>