<template>
  <div class="com-title-content">
      <h2>{{comeg}}</h2>
      <h1>{{comzh}}</h1>
  </div>
  
</template>

<script>
export default {
   name: 'ComponentTitle',
   props:['comeg','comzh']


}
</script>

<style lang ="less" scoped>
  .com-title-content{
      width: 100vw;
      
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      h1,h2{
        margin-block-end:0em;
        margin-block-start:0em;
      }
  }
</style>