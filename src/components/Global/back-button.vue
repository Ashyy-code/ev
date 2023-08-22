<template>
  <button
  @click="this.$router.push('/')"
  ><i class="fas fa-chevron-left"></i><span>Back to Main</span></button>

</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
button{
    background:var(--nc-teal);
    color:white;
    padding:1rem;
    display:flex;
    gap:.5rem;
    justify-content: center;
    align-items: center;
    font-size:120%;
    transition:all 300ms ease;

    &:hover{
        background:var(--nc-teal-light);
    }
}
</style>