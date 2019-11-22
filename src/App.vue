<template>
  <div id="app">
    <TopHeader />
    <Header />
    <NavCom />
    <router-view></router-view>
    <FootComponent/>
    
  </div>

</template>

<script>
import TopHeader from "./components/TopHeader.vue";
import Header from "./components/Header/Header.vue";
import NavCom from "./components/Nav/NavCom.vue";
import FootComponent from './components/FootComponent/FootComponent.vue';
export default {
  name: "app",
  components: {
    TopHeader,
    Header,
    NavCom,
    FootComponent
  }
};
</script>

<style>
a{
  color: #000;
}
h1, h2, h3, h4, h5, h6 {
    font-weight: 500;
    line-height: 1.2;
    color: inherit;
}
#app {
  min-width: 100vw;
  min-height: 100vh;
}
ul {
  margin-block-start: 0em;
  margin-block-end: 0em;
  padding-inline-start: 0em;
}
</style>
