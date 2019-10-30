<template>
<div class="navDown">
<div class="navdown-content">
 <div class="navdown-con-list">
     <ul v-for="list in lists" :key="list">
       <li v-for="item in list" :key="item.key">
           <a href="#">{{item.title}}</a>
       </li>
     </ul>
 </div>
</div>
<div class="navdown-foot">
    <div class="navdown-foot-imgs">
        
            <div class="img-item" v-for="img in listimgs" :key="img.key">
             <div class="item-pic">
                 <img :src="img.src" :title="img.title" :alt="img.title">
                 </div>   
                 <div class="item-word">
                        <h4>{{img.imgtitle}}</h4>
                        <p>{{img.imgdesc}}</p>
                         <p><a href="#">点击查看详情</a></p>
                     </div>           
            </div>
        
    </div>
   
</div>
</div>
  
</template>

<script>
export default {
  name:'NavDown',
  props:['navitem','imgs'],
   data(){
      return{
         lists: this.navitem,
         listimgs:this.imgs,
      }
  },

}
</script>

<style lang="less">
   @import url('./NavDown.less');
</style>