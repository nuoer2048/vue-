<template>
  <div class="form-checkout">
      <div class="checkbox" :class="{ischecked:ischanged}" @click="checktoggle()">
      </div>
        <p class="checkboxword">{{name}}</p>
  </div>
</template>

<script>
export default {
  name:'formCheckout',
  data:function(){
      return{
        ischanged:false
      }
  },
  props:['name'],
  methods:{
      checktoggle:function(){
          this.ischanged=!this.ischanged;
      },
  }
}
</script>

<style lang="less" scoped>
.form-checkout{
    width: auto;
    height: auto;
   
    .checkbox{
      
      width:0.9375rem;
      height:0.9375rem;
      border: 1px solid #000;
    }
 
    .ischecked{
        background-color: #000
    }
}

</style>