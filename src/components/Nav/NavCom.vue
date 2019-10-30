<template>
  <div class="nav-content">
     <div class="app-nav">
     <div class="nav-list">
        <ul>
           <li class="item-makup" @mouseover="showdown" @mouseout="disOut">
              <a href="#">彩妆</a>
              <div class="nav-down">
               <div :class="{navslidwon:showNav,nacslidout:!showNav}" >
               <NavDown :navitem="navitem" :imgs="listimgs" />
               </div>
            </div>
              </li>
           <li><a href="#">护肤</a></li>
           <li><a href="#">香水</a></li>
           <li><a href="#">双十一攻略</a></li>
           <li><a href="#">尊享礼盒</a></li>
           <li><a href="#">会员中心</a></li>
           <li><a href="#">私人定制服务</a></li>
        </ul>
     </div>
     <div class="nav-input">
         <formInput :attr="navobj"></formInput> 
     </div>
    
  </div>
  
  </div>
</template>

<script>
import formInput from '../formComponent/formInput.vue'
import NavDown from '../NavDown/NavDown.vue'
// import NavDown from ''
export default {
   name:'NavCom',
   data(){
     return{
        navobj:{width:'25rem',height:'2.5rem',color:'#000',name:'订阅',content: '个人网站开发'},
        navitem:[
           [
              {
                 title:'唇部',
                 key:1,
              },
              {
                 title:'唇膏',
                 key:2,
              },
              {
                 title:'唇油',
                 key:3,
              },
              {
                 title:'唇釉',
                 key:4,
              },
             {
                 title:'唇颊霜',
                 key:5,
              }
           ],
           [
              {
                 title:'面部',
                 key:1,
              },
              {
                 title:'明彩笔',
                 key:2,
              },
              {
                 title:'妆前乳',
                 key:3,
              },
              {
                 title:'隔离霜',
                 key:4,
              },
             {
                 title:'防嗮霜',
                 key:5,
            },{
                title:'粉饼',
                 key:6,
            },{
                title:'蜜粉',
                 key:7,
            },{
                title:'腮红',
                 key:8,
            },{
                title:'粉底液',
                 key:9,
            }
           ],
           [
              {
                 title:'眼部',
                 key:1,
              },
              {
                 title:'睫毛膏',
                 key:2,
              },
              {
                 title:'眼线',
                 key:3,
              },
              {
                 title:'眉笔',
                 key:4,
              },
             {
                 title:'眼影',
                 key:5,
            }
           ],
           [
              {
                 title:'指甲油',
                 key:1,
              },
           ],
        ],
        listimgs:[
           {
              src:require('../../assets/one.jpg'),
              key:'img-1',
              title:'vue练习网站',
              imgtitle:'图片一',
              imgdesc:'网站所有数据都是自己mock的'

        },
         {
              src:require('../../assets/two.jpg'),
              key:'img-2',
              title:'vue练习网站',
              imgtitle:'图片二',
              imgdesc:'所有图片都是来源于外国的某网站'

        },
        ],
        showNav:false,
     }
   },
   components:{
      formInput,
      NavDown,
   },
   methods:{
      showdown:function(){
      this.showNav=true;
  
      },
      disOut:function(){
         this.showNav=false;
      },

   },
} 
</script>

<style lang="less">
@import url('./NavCom.less');
.nav-down{
   position: absolute;
   left: 0;
}
 .navslidwon{
   display: block
}
.nacslidout{
   display: none;
}
</style>