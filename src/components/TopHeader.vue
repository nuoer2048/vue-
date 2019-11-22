<template>
<div class="app-top">
<div class="top-content">
 <div class="top-wrap">
  <div class="top-wrap-content" ref="topwrap" style="transform:ranslate3d(0,0,0)">
       <div class="top-wrap-item">
       <p>这个网站是自己学习vue框架的练习网站</p>
       </div>
   <div class="top-wrap-item">
       <p>原型图来自于ysl官网</p>
   </div>
   <div class="top-wrap-item">
       <p>只是一个在线展示商城</p>
   </div>
  </div>
 </div>
</div>
</div>
</template>

<script>
export default {
    name: 'TopHeader',
    data(){
        return{
            transArr:[0,-35,-70],
        }
    },
    computed:{
    },
    mounted:function(){
    
    },
    methods:{
        // changeTrans:function(){
        //     let i=0,_this=this;
        //     // let _this = this;
        //    setInterval(function(){
        //        i++;
        //        let str = `transform:translate3d(0,${_this.transArr[i%3]}px,0)`;
        //     window.console.log(str);
        //       _this.$refs.topwrap.style= str;

        //    },2000)
        // },
    },
   

}
</script>

<style lang="less" scoped>

.app-top{
    width: 100%;
    height: 2.1875rem;
    .top-content{
        background-color: #cb9864;
        width: 100%;
        height: 2.1875rem;
        .top-wrap{
            height: 2.1875rem;
            width: 70%;
            margin: auto;
            overflow: hidden;
           

             .top-wrap-content{
                 transition-property: transform;
                 transition-timing-function:ease-out;
                 transition-duration: 0ms;
            
            .top-wrap-item{
            height: 2.1875rem;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            p{
                font-size: 0.875rem;
            }
        }
        }
        }
       
        
    }
}
</style>