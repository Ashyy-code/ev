<template>
  <div class="my-panel-wrap fc">
    <div 
    v-for="(item, index) in items" 
    :key="index" 
    class="my-panel-item fr"
    @click="this.$router.push(item.push)"
    >
      <div class="icon"><i :class="item.icon"></i></div>
      <div class="item-desc">
        <div class="item-name">{{ item.name }}</div>
        <div class="item-desc">{{ item.desc }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          name: "My Event History",
          desc: "View your previous events",
          icon: "fas fa-history",
          push:'/history'
        },
        {
          name: "CPD Staff Intranet",
          desc: "News and Updates on Staffnet",
          icon: "fas fa-sitemap",
          push:'/intranet'
        },
        {
          name: "Leave Feedback",
          desc: "Help us to improve our service",
          icon: "fas fa-lightbulb",
          push: '/feedback'
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.my-panel-wrap {
  padding: 1rem;
  background: var(--nc-blue);
  color: white;
  gap:.75rem;

  i {
    font-size: 220%;
  }

  .my-panel-item {
    background: var(--nc-blue-light);
    padding: 0.5rem;
    cursor: pointer;
    font-size:90%;
    &:hover {
      background: var(--nc-blue-hv);
    }

    .item-name {
      color: var(--nc-lime);
      font-size: 120%;
    }
  }
}
</style>