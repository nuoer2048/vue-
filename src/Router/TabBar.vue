<template>
  <el-container>
  <el-header class="tab-header">Header</el-header>
  <el-container>
    <el-aside width="200px">Aside</el-aside>
    <el-main>{{params}}</el-main>
  </el-container>
</el-container>
</template>

<script>
export default {
name: 'TabBar',
data(){
  return{
      params: ''
  }
},
created:function(){
    const params = this.$route.params.section;
    this.params=params;
},
watch:{
    '$route' (to){
        const params = to.params.section;
        this.params=params;

    }
}
}
</script>

<style lang="less" scoped>
.tab-header{
    
}
</style>