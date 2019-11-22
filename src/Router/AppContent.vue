<template>
  <div class="app-content">
    <NavBar />
    <Favotites />
    <SearchCom/>
    <SectionBanner/>
    <PersonOrder/>
    <FindInspiration/>
    <VideoComponent/>
  </div>
  
</template>

<script>
import NavBar from "../components/NavBar/NavBar.vue";
import Favotites from "../components/Favorites/Favotites"
import SearchCom from '../components/SearchCom/SearchCom';
import SectionBanner from '../components/SectionBanner/SectionBanner';
import PersonOrder from '../components/PersonOrder/PersonOrder';
import FindInspiration from '../components/FindInspiration/FindInspiration';
import VideoComponent from '../components/VideoComponent/VideoComponent';
export default {
     name: 'AppContent',
     components:{
         NavBar,
         Favotites,
         SearchCom,
         SectionBanner,
         PersonOrder,
         FindInspiration,
         VideoComponent
     }
}
</script>

<style>

</style>