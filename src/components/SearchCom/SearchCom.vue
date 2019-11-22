<template>
  <div class="app-search">
      <ComponentTitle comeg="SEARCH" comzh="探索发现"/>
  <div class="search-content">
  <div class="seach-item" v-for="(item,key) in getSearchItems" :key="key">
     <ImgItem :imgItem="item"/>
  </div>
  </div>
  </div>
</template>

<script>
import ComponentTitle from "../ComponentTiltle/ComponentTitle.vue";
import ImgItem from "../common/ImgItem.vue";
import { mapGetters } from "vuex";
export default {
   name: 'SearchCom',
    created(){
       window.console.log('begin search')
       this.$store.dispatch('searchItem');
   },
   computed: {
    
    ...mapGetters(["getSearchItems"])
  },
   components:{
       ComponentTitle,
       ImgItem,
   },
  
}
</script>

<style lang="less" scoped>
.app-search{
    width: 100vw;
    height: 37.5rem;
    padding: 50px 0;
    background-color: #f2f2f2;
    .search-content{
        width: 70%;
        margin: 5% auto;
        display: grid;
        grid-template-columns: repeat(4,1fr);
        gap: 0 1.25rem;
        grid-template-rows: 70%;
    }

}
</style>