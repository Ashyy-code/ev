<template>
  
<div class="search-wrap fr">
    <i class="fas fa-search"></i>
    <input 
    type="text" 
    placeholder="Start typing to Search.." 
    tabindex="0" 
    aria-label="Search Events"
    v-model="this.$store.state.searchTerm"
    @focus="focusSearch($event.target)"
    @blur="blurSearch($event.target)"
    @keyup="this.$store.state.checkFilter = true"
    />

</div>
</template>

<script>
export default {
    methods:{
        focusSearch(bx){
            bx.setAttribute('placeholder','');
            bx.select();
        },
        blurSearch(bx){
            if(bx.value == "" || bx.value == null){
                bx.setAttribute('placeholder','Start typing to Search..');
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.search-wrap{
    padding:1rem;
    background:var(--nc-blue);
    color:var(--nc-white);

    i{
        color:var(--nc-lime);
        font-size:150%;
    }

    input{
        flex-grow: 1;
        width:50%;
        padding:.75rem;
        border:0;
        outline:0;
        background:var(--nc-blue);
        border-bottom:solid 1px var(--nc-lime);
        font-size: 100%;
        color:white;
    }
}
::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: white;
  opacity: 1; /* Firefox */
}

:-ms-input-placeholder { /* Internet Explorer 10-11 */
  color: white;
}

::-ms-input-placeholder { /* Microsoft Edge */
  color: white;
}
</style>