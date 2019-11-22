<template>
  <div class="app-findinsp">
      <ComponentTitle comeg="FIND INSPIRATON" comzh="找寻灵感"/>
    <div class="app-findinsp-content">
         <div v-for="(item,key) in getInspItems" :key="key" class="app-findinso-item">
             <ImgItem :imgItem="item"/>
         </div>
    </div>
  </div>
</template>

<script>
import ComponentTitle from "../ComponentTiltle/ComponentTitle.vue";
import ImgItem from "../common/ImgItem.vue";
import { mapGetters } from 'vuex'
export default {
   name: 'FindInspiration',
   components:{
       ComponentTitle,
       ImgItem
   },
   created(){
    this.$store.dispatch('searchFindInspItem');
   },
   computed:{
        ...mapGetters(['getInspItems'])
   }

}
</script>

<style lang="less" scoped>
  .app-findinsp{
      width: 100vw;
      height: auto;
      background-color: #f2f2f2;

      .app-findinsp-content{
        padding: 20px 0;
        width: 70%;
        height: 25rem;
        margin: auto;
        display: grid;
        grid-template-columns: repeat(3,1fr);
        grid-template-rows: 100%;
        gap:0 2%;
        .app-findinso-item{
          width: 100%;
          height: 100%;
        }
      }

  }
</style>