<template>
  <div class="form-input" :style="{width:attr.width,height:attr.height}">
    <input type="text" :value="attr.content"/>
    <button :style="{backgroundColor:attr.color}" style="color:#fff">{{attr.name}}</button>

  </div>
</template>

<script>
export default {
    name: 'formInput',
    props: ['attr'],
}
</script>

<style  lang="less" scoped>
.form-input{
      
    input{
        height: 100%;
       width: 70%;
       padding: 0;
    }
    button{
         display: inline-block;
         height: 100%;
        width: 20%;
        padding: 0;
        border: none;
       
    }
    button:active{
      border-style: none;
    }
}
</style>