<template>
  <div class="img-item">
    <div class="img-content">
        <img :src="imgItem.src" alt="探索发现" title="探索发现">
    </div>
    <div class="img-title">{{imgItem.title}}</div>
    <div class="img-desc">{{imgItem.desc}}</div>
    <div class="img-more"><a href="#">{{imgItem.more}}</a></div>
  </div>
</template>

<script>
export default {
   name: 'ImgItem',
   props:{
     imgItem:Object
   },
}
</script>

<style lang="less" scoped>
@import url('../../commonStyl/commonStyle.less');
.textCenter{
padding:0 5%;
display: flex;
align-items: center;
}
 .img-item{
     width: 100%;
     height: 100%;
     display: grid;
     grid-template-rows: 50% 10% 20% 10%;
     grid-template-columns: 100%;
     .img-content{
         background-color: #000000;
         img{
            .imgStyl(100%, 100%);
         }
      
     }
     .img-title{
         .textCenter;
         font-size: 1.2rem;
     }
     .img-desc{
         color: #9e9e9e;
         overflow: hidden;
         .textCenter
     }
     .img-more{
          
         .textCenter;
         a{
           color: #424242;
         }
     }

 }
</style>