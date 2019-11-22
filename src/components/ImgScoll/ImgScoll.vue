<template>
<div class="imgScroll">
  <div class="arrow-left">
    <i class="fa fa-chevron-left" @click="back && onLeftClick()" id='arrowLeft'/>
  </div>
   <div class="items-detail">
    <ul id='imgTab'>
      <li
        v-for="(item,index) in getTabData"
        :key="index"
      >
        
          <img :src="item.src" alt class="detail-img" />
        <div class="img-mask" v-bind:class="{ maskActive: isActive }">
          <div class="detail-btn img-mask-detail" :class="{ maskDelActive: isActive }">查看详情</div>
          <div class="pay-btn img-mask-detail" :class="{ maskDelActive: isActive }">立即购买</div>
      
        </div>
        
      </li>

    </ul>
 
  </div>
  <div class="arrow-right">
    <i class="fa fa-chevron-right" @click="forward && onRightClick()" id='arrowRight'/>

  </div>
</div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "ImgScoll",
  created() {
    this.$store.dispatch("tabDataAction");
  },
  computed: {
    
    ...mapGetters(["getTabData"])
  },
  data() {
    return {
      isActive: false,
      queue: [100,140],
      backqueue: [100,0],
      curpos:0,
      forward:true,
      back:true,
    };
  },
  props: {
    detailImgs: Array
  },

  methods: {
     onRightClick(){
        let queue = this.queue;
        let curpos = this.curpos;
        let arrowRight = document.getElementById('arrowRight');
          window.console.log(curpos);
        if(curpos===queue.length-1){
              arrowRight.style.color="#e0e0e0";
              this.forward=false;
        }
        const moveTo = queue[curpos];
        let TabDom = document.getElementById('imgTab');
        let arrowLeft = document.getElementById('arrowLeft');
        TabDom.style.transform=`translateX(-${moveTo}%)`;
        this.curpos++;
        this.back=true;
         arrowLeft.style.color="#000";
      

     },
     onLeftClick(){
        this.curpos--;
        let arrowLeft = document.getElementById('arrowLeft');
      let curpos = this.curpos;
       window.console.log(curpos);
        if(curpos<0){
              arrowLeft.style.color="#e0e0e0";
              this.back=false;
        }

        let TabDom = document.getElementById('imgTab');
        TabDom.style.transform=`translateX(-${curpos*100}%)`;
        let arrowRight = document.getElementById('arrowRight');
           this.forward=true;
         arrowRight.style.color="#000";
     },
  }
};
</script>

<style lang="less" scoped>
@import url('../../commonStyl/commonStyle.less');
@import url('./ImgScoll.less');
</style>