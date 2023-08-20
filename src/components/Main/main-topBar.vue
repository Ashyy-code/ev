<template>
  <div class="topbar">
    <div class="topbar-items mainwrap">
        <span>Logo here</span>
        <span>User Info here</span>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.topbar{
    background:var(--nc-blue);

    .topbar-items{
        color:white;
        display:flex; flex-direction: row; justify-content: space-between;
    }
}
</style>