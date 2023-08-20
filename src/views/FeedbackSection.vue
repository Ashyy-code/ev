<template>
  <div class="feeback-wrap mainwrap">
    <div class="col-set">
        <div class="lcol">
            <allMyPanelVue />
            <feedbackHistory />
        </div>
        <div class="rcol">
            Here you can see your events that need feedbacking lol
        </div>
    </div>
  </div>
</template>

<script>
import allMyPanelVue from '../components/all-myPanel.vue'
import feedbackHistory from '../components/feedback-history.vue';

export default {
    components:{allMyPanelVue,feedbackHistory}
}
</script>

<style>

</style>