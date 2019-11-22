<template>
  <div class="app-foot">
     <div class="foot-top">
         <div class="foot-top-item">
             <label>
                 <i class="fa fa-paw"></i>
             </label>
             <span>100%官方保证</span>
             </div>
         <div class="foot-top-item">
             <label><i class="fa fa-space-shuttle"></i></label>
             <span>支持多种支付方式</span>
             </div>
         <div class="foot-top-item"><label><i class="fa fa-plus-square"></i></label>
         <span>享受官网礼包</span>
         </div>
         <div class="foot-top-item"><label><i class="fa fa-phone"></i></label>
         <span>联系我们</span>
         </div>

     </div>
     <div class="foot-bottom">
         <div class="foot-bottom-kind">
             <ul>
                <li class="foot-kind-title"><a href="#">彩妆</a></li>
                <li><a href="#">面部</a></li>
                <li><a href="#">眼部</a></li>
                <li><a href="#">甲油</a></li>
                <li><a href="#">套装与工具</a></li>
             </ul>
         </div>
         <div class="foot-bottom-kind">
             <ul>
                  <li class="foot-kind-title"><a href="#">护肤</a></li>
                <li><a href="#">按产品分类</a></li>
                <li><a href="#">按功能分类</a></li>
                <li><a href="#">按系列分类</a></li>
             </ul>
         </div>
         <div class="foot-bottom-kind">
             <ul>
                    <li class="foot-kind-title"><a href="#">香水</a></li>
                <li><a href="#">女士香水</a></li>
                <li><a href="#">男士香水</a></li>
             </ul>
         </div>
         <div class="foot-bottom-kind">
             <ul>
                 <li class="foot-kind-title"><a href="#">圣诞节限定礼盒</a></li>
             </ul>
         </div>
         <div class="foot-bottom-kind">
             <ul>
                 <li class="foot-kind-title"><a href="#">订阅电子杂志</a></li>
                 <li>
                     <input type="text" style="width:200px;height:30px">
                     <input type="button" value="ok" style="background-color:#000;width:30px;height:35px;color:#fff;border:none">
                 </li>
                 <li><a href="#">关注我们</a></li>
                 <li class="foot-kind-sign"><a href="#">
                     <i class="fa fa-weibo"></i>
                     </a>
                     <a href="#" class="wechat-link">
                     <i class="fa fa-wechat"></i>
                     <div class="wechat"> <img src="../../assets/wechat.png" alt="微信链接" title="微信链接"></div>
                     </a>
                     </li>
                 <li><a href="#">联系我们</a></li>
                 <li><a href="#">电话号码：18382955329</a></li>




             </ul>
         </div>
     </div>
  </div>
</template>

<script>
export default {
   name: 'FootComponent',

}
</script>

<style lang="less" scoped>
@import url('./FootComponent.less');

.app-foot{
    width: 100vw;
    height: auto;

}
</style>