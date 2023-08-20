<template>
    <!--component wrap-->
  <div class="month-picker-wrap fr">
    <!--repeatable button section-->
    <button 
    v-for="(month,index) in this.$store.state.nextMonths" 
    :key="index" 
    :selected="(month.monthNumber == this.$store.state.selectedMonthNumber)"
    @click="selectedMonthNumber = index;
     this.$store.state.selectedMonthName = month.month; 
     this.$store.state.searchTerm = null; 
     this.$store.state.checkFilter = true;
     this.$store.state.selectedMonthNameLong = month.monthName;
     this.$store.state.selectedMonthNumber = month.monthNumber;
     this.$store.state.pagingCurrentPage = 1;
     "
    >
        {{ month.month }}
    </button>
  </div>
</template>

<script>
export default {
    data(){
        return{
            selectedMonth:0,
        }
    }
}
</script>

<style lang="scss" scoped>
.month-picker-wrap{
    width:100%;

    button{
        flex-grow: 1;
        color:var(--nc-grey);
        background:var(--nc-grey-light);
        transition:all 200ms ease;
        font-size:120%;

        &:hover{
            background:var(--nc-grey-hv);
            color: white;
        }

        &[selected="true"]{
            background:var(--nc-teal);
            color:white;
            
            &:hover{
            background:var(--nc-teal-hv);
        }
        }
    }
}

</style>