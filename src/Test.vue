<template>
  <div class="app-test">
      <h1>vue-router测试</h1>
      <router-link to="/foo">foo</router-link>
      
      <router-link to="/bar">bar</router-link>
      <router-view></router-view>
  </div>
</template>

<script>
export default {
   name: 'Test'
}
</script>

<style>

</style>