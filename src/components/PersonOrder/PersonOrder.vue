<template>
  <div class="app-person-order">
   <ComponentTitle comeg="ESSENTIAL" comzh="私人定制服务"/>
    <div class="person-order-content">
     <div class="person-order-item" v-for="(item,key) in getPersonItems" :key="key">
       <ImgHorItem :personItem="item"/>
     </div>
    </div>
  </div>
</template>

<script>
import ComponentTitle from "../ComponentTiltle/ComponentTitle.vue";
import ImgHorItem from "../common/ImgHorItem.vue"
import {mapGetters} from 'vuex';
export default {
  name: 'PersonOrder',
  created(){
    this.$store.dispatch('searchPersonOrderItem')
  },
  computed:{
      ...mapGetters(['getPersonItems'])
  },
  components:{
      ComponentTitle,
      ImgHorItem
  }
}
</script>

<style lang="less" scoped>
.app-person-order{
    width: 100vw;
    height: 31.25rem;
    background-color: #f2f2f2;
    padding: 20px 0;
    .person-order-content{
        width: 70%;
        margin: auto;
        height: 80%;
        display: flex;
        justify-content: center;
        align-items: center;
        .person-order-item{
            width: 50%;
            height: 90%;
        }
    }
}
</style>