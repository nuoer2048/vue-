<template>
  <div class="img-by-hor">
      <div class="by-hor-img">
         <img :src="personItem.src" alt="私人定制" title="私人定制">
      </div>
      <div class="by-hor-desc">
          <p class="hor-desc-title">{{personItem.title}}</p>
          <p class="hor-item-desc">{{personItem.desc}}</p>
          <p><a href="#">{{personItem.order}}</a></p>
      </div>

  </div>
</template>

<script>
export default {
    name:'ImgHorItem',
    props:{
        personItem:Object,
    }
}
</script>

<style lang='less' scoped>
@import url('../../commonStyl/commonStyle.less');
.img-by-hor{
    display: grid;
    grid-template-columns: repeat(2,1fr);
    grid-template-rows: 100%;
    .by-hor-img{
        img{
            .imgStyl(100%, 100%);
        }
    }
    .by-hor-desc{
         padding: 10% 5%;
         background-color: #fff;
         .hor-desc-title{
             font-size: 1.25rem;
             font-weight: 700;
         }
         .hor-item-desc{
             padding-bottom: 10%;
         }
         a{
             color:#000;
         }

    }
}
</style>