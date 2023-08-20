<template>
  <div v-if="popupVis" class="wrapper" @click="popupVis = false;">
    <div v-if="showFeedbackPopup" class="popup feedback-reminder">
        Please leave feedback
    </div>
  </div>
</template>

<script>
export default {

    data(){
        return{
            popupVis:false,
            showFeedbackPopup:false,
        }
    }

}
</script>

<style lang="scss" scoped>
.wrapper{
   

    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    display: grid;
    place-items: center;
    background:rgba(0, 0, 0, 0.525);
    z-index: 99999;
}

.popup{
    width:50vw;
    max-width: 600px;
    background:var(--nc-blue);
    z-index: 9999999;
    color:var(--nc-white);
    padding:1rem;
}
</style>