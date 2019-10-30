<template>
  <header class="app-header">
     <div class="header-top">
         <div class="h-top-left"><ul>
             <li><a href="#">专柜查询</a></li>
             <li class="top-customer"> <a href="javascript:void(0);">客户中心</a>
                 <div class="tlf-slidedown down">
                    <div class="sd-left">
                        <h2 class="down-title">我能帮到您什么</h2>
                         <span class="down-line"></span>
                          <div class="sdlf-content">
                               <ul class="sdlf-left">
                               <li><a>常见问题</a></li>
                               <li><a>订单跟踪</a></li>
                               <li><a>订购信息</a></li>
                           </ul>
                           <ul class="sdlf-right">
                               <li><a>选择我们的原因</a></li>
                               <li><a>送货与退货</a></li>
                               <li></li>
                           </ul>
                          </div>
                    </div>
                    <div class="sd-right">
                        <h2 class="down-title">联系我们</h2>
                         <span class="down-line"></span>
                         <ul>
                             <li><p >12345678-11</p></li>
                             <li><p>我们一周提供7天服务</p></li>
                         </ul>
                    </div>
                 </div>
             </li>
         </ul></div>
         <div class="h-top-right">
             <ul>
                 <li class="magzine"><span>订阅电子杂志</span>
                    <div class="magdown down">
                        <div class="mg-left">
                            <h2 class="down-title">订阅XXX电子杂志</h2>
                            <span class="down-line"></span>
                                <div class="mgl-content">
                                    <p>请输入您的邮箱</p>
                                    <formInput :attr="myobj"></formInput> 
                                    <p style="color:#d50000">{{mginputerr}}</p>
                                    <formCheckout name='
我同意依照本使用条款和隐私政策对我的个人信息进行收集和使用；我已阅读并确认被给予充分机会理解该使用条款和隐私政策的内容'></formCheckout>
                                </div>
                        </div>
                        <div class="mg-right">
                            <h2 class="down-title">官网专享</h2>
                            <span class="down-line"></span>
                            <div class="mgr-content">
                              <p>立即成为圣罗兰美妆官网会员，尊享VIP独家礼遇。</p>
                              <ul class="down-list">
                                  <li>查看历史订单</li>
                                  <li>官网独家礼赠</li>
                                  <li>收藏您喜欢的产品</li>
                                  <li>一手新品资讯</li>
                              </ul>
                        <div class="mgr-bottom"><a href="#">立即注册</a></div>

                            </div>
                        </div>
                    </div>
                 </li>
                 <li class="login" ><span>登陆与注册</span>
                      <div class="logindown down">
                            <div class="lg-left">
                                <h2 class="down-title">用户登陆</h2>
                                 <span class="down-line"></span>
                                 <formSumbit formwidth="15rem"></formSumbit>
                            </div>
                            <div class="mg-right">
                            <h2 class="down-title">官网专享</h2>
                            <span class="down-line"></span>
                            <div class="mgr-content">
                              <p>立即成为圣罗兰美妆官网会员，尊享VIP独家礼遇。</p>
                              <ul class="down-list">
                                  <li>查看历史订单</li>
                                  <li>官网独家礼赠</li>
                                  <li>收藏您喜欢的产品</li>
                                  <li>一手新品资讯</li>
                              </ul>
                        <div class="mgr-bottom"><a href="#">立即注册</a></div>

                            </div>
                        </div>

                      </div>
                 </li>
                 <li class="cart"><a>购物袋-{{mycatrt}}件商品</a>
                     <div class="cartdown down">
                       <p>{{mycatrt===0?'您的购物袋是空袋':`您购物车里有${mycatrt}件商品`}}
                       </p>
                        
                        <div :class="{cartdis : isShow }">
                            <p><a href="#">快去挑选吧</a></p>
                        </div>
                       
                      
                     </div>
                 </li>
             </ul>
         </div>
     </div>
     <section class="header-logo">     
     </section>
  </header>
  
</template>

<script>
import formInput from '../formComponent/formInput.vue';
import formCheckout from '../formComponent/formCheckout.vue';
import formSumbit from '../formComponent/formSumbit.vue';
export default {
name: 'Header',
data(){
    return{
        mycatrt: 0,
        mginputerr: '',
        mgsuberr: '',
        myobj:{width:'15rem',height:'1.5625rem',color:'#000',name:'订阅'},
        formobj:{width:'15rem',height:'1.875rem'},
        


    }
},
components:{
    formInput,
    formCheckout,
    formSumbit
},
computed:{
    isShow:function(){
        return this.mycatrt===0?true:false
    }
}

}
</script>

<style lang="less" scoped>
   @import url('./Header.less');
   .app-header{
       width: 80%;
       margin: auto;
       height: 10rem;
       ul{
           padding-inline-start:0;
       }
       .header-top{
           height: 2rem;
           width: 100%;
           display: flex;
           justify-content: space-between;
           .top-customer:hover .tlf-slidedown{
               display: flex;
           }
           .h-top-left >ul >li:first-child,.h-top-right >ul >li:first-child{
               list-style-type: none
           }
           .h-top-left ul li,.h-top-right ul li{
            margin-right: 1.875rem;
             float: left;
             font-size: 0.875rem;
           
           }
           .h-top-left {
         color: #bdbdbd;
           }
           
           .h-top-left >ul >li >a{
             text-decoration: none;
             color: #bdbdbd;
           }
           .h-top-right >ul >li >a {
               text-decoration: none;
           }
           .h-top-left .tlf-slidedown{
           
               .sd-left{
                width: 20.625rem;
               
                  .sdlf-content{
                      margin-top: 1.125rem;
                      width: 100%;
                      display: flex;
                      justify-content: space-between;
                      .sdlf-left,.sdlf-right{
                          list-style-type: none;
                          font-size: 0.875rem;
                      }
                    li{
                        color: #000;
                    }

                  }

               }
               .sd-right{
                   width: 15rem;
                   margin-left: 30px;
               
                   ul{
                       list-style-type: none;
                        font-size: 0.875rem;
                       li{
                          
                          
                        color: #000;
                           
                       }
                   }

               }


           }
       
       }

   }

</style>