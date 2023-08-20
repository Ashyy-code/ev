<template>
  <div class="events-sorter-wrap">
    <div class="page-size fr">
      <label for="inp_page_size">Items per page</label>
      <select id="inp_page_size" @change="updatePageSize($event.target)" v-model="this.$store.state.pagingPageSize">
        <option>5</option>
        <option>10</option>
        <option>15</option>
        <option>All</option>
      </select>
    </div>

    <div class="header-context fr">
      <i class="fas fa-calendar-day"></i>
      <span
        >Upcoming Events this
        {{ this.$store.state.selectedMonthNameLong }}</span
      >
    </div>
    <div class="view-mode fr">
      <button 
      :selected="this.$store.state.viewMode == 'calendar'"
      @click="this.$store.state.viewMode = 'calendar'; this.$store.state.checkFilter = true"
      ><i class="fas fa-calendar"></i></button>
      <button 
      :selected="this.$store.state.viewMode == 'grid'"
      @click="this.$store.state.viewMode = 'grid'; this.$store.state.checkFilter = true"
      ><i class="fas fa-border-all"></i></button>
      <button 
      :selected="this.$store.state.viewMode == 'list'"
      @click="this.$store.state.viewMode = 'list'; this.$store.state.checkFilter = true"
      ><i class="fas fa-list-ul"></i></button>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    updatePageSize(e){
      let intValue = e.value;
      //fix
      if (intValue == 'All'){intValue = 99999}
      //set
      this.$store.state.pagingPageSize = intValue;
      //refresh
      this.$store.state.checkFilter = true;
    }
  }
};
</script>

<style lang="scss" scoped>
.events-sorter-wrap{
  position: relative;
  margin-top:1rem;
  display:flex;
  justify-content: center;
  align-items: center;
}

.page-size{
  position: absolute;
  top:0;
  left:0;
  background:var(--nc-grey-light);
  padding:.35rem .75rem;
  gap:.5rem;
  align-items: center;

  select{
    padding:.25rem;
  }
}

.view-mode{
  position:absolute;
  top:0;
  right:0;

  button{
    background:var(--nc-grey-sort);
    padding:.5rem;


    &[selected="true"]{
      background:var(--nc-teal);
      color:white;
      &:hover{
        background:var(--nc-teal-hv);
      }
    }


    i{
      font-size:140%;
    }

    &:hover{
      background:var(--nc-grey-sort-hv);
    }
  }
}
.header-context {
  align-items: center;
  justify-content: center;
  font-size: 170%;
  color: var(--nc-blue-light);

  i {
    font-size: 120%;
  }
}
</style>