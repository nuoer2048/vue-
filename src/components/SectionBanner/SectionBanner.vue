<template>
  <div class="sec-img">
    <a href="#">
      <img src="../../assets/section.jpg" alt="">
    </a>
  </div>
</template>

<script>
export default {
   name: 'SectionBanner',


}
</script>

<style lang="less" scoped>
@import url('../../commonStyl/commonStyle.less');
 .sec-img{
   width: 100vw;
   height: 25rem;
   a{
     display: block;
     width: 100%;
     height: 100%;
     img{
       .imgStyl(100%,100%)
     }
   }
 }
</style>