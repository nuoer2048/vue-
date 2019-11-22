<template>
  <div class="nav-bar">
   <Divider/>
    <el-carousel :interval="5000" arrow="always" height="400px" indicator-position="outside">
    <el-carousel-item v-for="item in barimg" :key="item.key">
      <img :src="item.src" class="navbar-img"/>
    </el-carousel-item>
  </el-carousel>  
  </div>
</template>

<script>
import Divider from '../Divider/Divider.vue'
export default {
 name: 'NavBar',
 data(){
     return{
         barimg:[
             {
              key:1,
              src:require('../../assets/bar-one.jpg')
             },
             {   key:2,
                 src:require('../../assets/bar-two.jpg')
             },
             {   key:3,
                 src:require('../../assets/bar-thr.jpg')
             },
             {   key:4,
                 src:require('../../assets/bar-four.jpg')
             },
         ]
     }
 },
 components:{
     Divider,
 }
}
</script>

<style lang="less" scoped>
.nav-bar{
    width: 100vw;
    height: auto;
    padding: 0;
    margin: auto;
}
.navbar-img{
width: 100%;
height: 100%;

object-fit: cover
}
</style>