<template>
  <div class="favorites">
    <ComponentTitle comeg="FAVORITES" comzh="明星产品" />
    <Divider />
    <div class="favorites-tab">
      <el-tabs v-model="activeName" @tab-click="handleClick" style="width:80%">
        <el-tab-pane label="彩妆" name="first">
          <div class="caizhuang">
            <div class="cz-left">
              <img src="../../assets/fa-left.jpg" alt="查看详情" title="查看详情" />
              <div class="img-bottom">
                <div class="bottom-zhTime">彩妆</div>
                <div class="bottom-chTitle">MAKEUP</div>
                <div class="bottom-detail">了解更多</div>
              </div>
            </div>
            <div class="cz-right">
              <ImgScoll/>
           
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="限定礼盒" name="second">限定礼盒</el-tab-pane>
        <el-tab-pane label="香水" name="third">香水</el-tab-pane>
        <el-tab-pane label="护肤" name="fourth">护肤</el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import ComponentTitle from "../ComponentTiltle/ComponentTitle.vue";
import Divider from "../Divider/Divider.vue";
import ImgScoll from "../ImgScoll/ImgScoll.vue";
export default {
  name: "Favotites",
  data() {
    return {
      activeName: "second",
      isActive: false
    };
  },
  methods: {
    handleClick(tab, event) {
      window.console.log(tab + event);
    },
    onRightClick(){
        alert('left')
    },
    onLeftClick(){
      alert('right')
    },
  },
  components: {
    ComponentTitle,
    Divider,
    ImgScoll
  }
};
</script>

<style lang="less" scoped>
.favorites-tab {
  width: 80%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
<style lang="less">
@import url("./Favotites");
.el-tabs__nav-wrap {
  display: flex !important;
  justify-content: center !important;
}
.el-tabs__active-bar {
  background-color: #cb9864 !important;
}
.el-tabs__item.is-active {
  color: #cb9864 !important;
}
</style>