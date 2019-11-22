<template>
  <div class="app-video">
   <ComponentTitle comeg="REVEAL YOUR BEAUTY" comzh="视频中心"/>
    <div class="app-video-comtent">
      <div class="app-video-wrap">
        
      </div>
      <div class="app-video-desc">
        <div class="video-desc-content">
            <p class="video-title"><a href="#">DARE OR DARE S3
            </a></p>
            <p class="video-details">
                XXX与XXX一起挑战水哑光底妆，无惧风雨变换，全天服帖
            </p>
            <p class="video-link"><a href="#">了解详情</a></p>
            <p class="video-product">xxx妆容单品</p>
            <ul class="product-list">
                <li><a>恒颜无暇粉底液</a>
                </li>
                <li><a>恒颜无暇粉底棒</a></li>
            </ul>
            <p class="video-pay-link"><a href="#">点击购买妆容单品</a></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ComponentTitle from "../ComponentTiltle/ComponentTitle.vue";
export default {
  name: 'VideoComponent',
  components:{
      ComponentTitle,
  },
}
</script>

<style lang="less" scoped>
.app-video{
    width: 100vw;
    height: auto;
    background-color: #f2f2f2;
    padding-bottom: 60px;
    .app-video-comtent
    {
        width: 80%;
        margin: auto;
        height: 25rem;
        background-color: #fff;
        display: grid;
        grid-template-columns: 1.5fr 1fr;
        grid-template-rows: 90%;
        gap: 0 2%;
        .app-video-desc{
            padding: 20px;
            .video-desc-content{
                margin-top: 100px;
                .video-title a{
                    text-decoration: none;
                    font-weight: 700;
                    font-size: 1.875rem;
                    
                }
                .product-list{
                    list-style-type: none;
                   
                    li{
                        float: left;
                        a{
                            font-size: 0.875rem;
                        }
                        margin-right: 5%;
                    }
                }
                .product-list::after{
                    content: '';
                    display: block;
                    clear: both;
                }
                .video-details{
                    color: #e0e0e0;
                    font-size: 0.875rem;

                }
                .video-link{
                    font-size: 0.875rem;
                }
                .video-pay-link a {
                    text-decoration: none;
                    color: #e0e0e0;
                    font-size: 0.875rem;

                }

            }
        }
    }
}
</style>