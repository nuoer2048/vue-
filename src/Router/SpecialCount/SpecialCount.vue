<template>
  <div class="app-specialcount">
      <div class="sc-header">
          <el-breadcrumb separator="/">
  <el-breadcrumb-item><router-link to="/">首页</router-link></el-breadcrumb-item>
  <el-breadcrumb-item><router-link to="/tospecial">专柜查询</router-link></el-breadcrumb-item>
</el-breadcrumb>
      </div>
       <div class="sc-body">
           <h2>专柜查询</h2>
           <div class="sc-search">
             <div class="sc-search-left">
                <div class="sc-left-title sc-title">
                     <h4>查找名店 <span style="color:#999">请输入或选择您的查询条件</span></h4>
                </div>
                <div class="left-pro-search">
                    <label for="ro-search">按照省份查询 </label>
                  <div class="pro-search-area" id="pro-search">
                    <div class="pro-search-item">
                        <el-select v-model="province" placeholder="省份/直辖市" @change="onProvinceChange" class="search-item">
                            <el-option
                            v-for="item in getPlace"
                            :key="item.province"
                            :label="item.province"
                            :value="item.province">
                            </el-option>
                        </el-select>
                    </div>
                    <div class="pro-search-item">
                        <el-select v-model="city" placeholder="市" class="search-item" >
                            <el-option
                            v-for="(item,key) in getCity(getPlace)"
                            :key="key"
                            :label="item"
                            :value="item">
                            </el-option>
                        </el-select>
                    </div>
                    <div class="pro-search-item">
                        <el-select v-model="county" placeholder="县/区" class="search-item">
                            <el-option
                            v-for="(item,key) in getCounty(getPlace)"
                            :key="key"
                            :label="item"
                            :value="item">
                            </el-option>
                        </el-select>
                    </div>
                    <div class="pro-search-item search-btn">
                        搜索
                    </div>
                  </div>
                </div>
                <div class="left-pro-street-search">
                    <label for="street-input">按照街道查询</label>
                   <div class="street-search-area">
                         <div class="street-input" id="street-input"><input type="text"></div>
                  <div class="search-btn">搜索</div>
                   </div>
                </div>
             </div>
             <div class="sc-search-right">
                 <div class="sc-right-title sc-title">
                 <h4>离您最近的门店</h4>
                 </div>
                 <div class="sc-location">
                     <div class="sc-location-img">
                         <baidu-map
                         :center="center" :zoom="zoom" class="img-view">
                        </baidu-map>
                     </div>
                     <div class="sc-location-desc">
                         <h3><i class="fa  fa-location-arrow"></i> 成都王府井</h3>
                          <p>地址：成都市总府路15号成都王府井1层</p>
                           <p>联系电话：1839285xxxx</p>
                           <p><a href="#">查看详情</a></p>
                     </div>
                 </div>
             </div>
           </div>
        </div> 

        <div class="search-map">
         <div class="search-map-desc">
         <h2>地图导航</h2>
         <p>地址：{{curlocation}}</p>
         <p>联系电话：1111111111</p>
         </div>
         <div class="search-map-pic">
         
         <baidu-map
     :center="center"
     :zoom="zoom"
     :dragging="true" 
     :scroll-wheel-zoom="true"
     class="bm-view"
     @ready="handler" 
     @click="getClickInfo"
     @moving="syncCenterAndZoom"  
     @moveend="syncCenterAndZoom"
     @zoomend="syncCenterAndZoom"
   >
   <bm-marker :position="{lng:center.lng,lat:center.lat}" :dragging="true" animation="BMAP_ANIMATION_BOUNCE">
    <bm-label content="当前位置" :labelStyle="{color: 'red', fontSize : '14px'}" :offset="{width: -35, height: 30}"/>
   </bm-marker>
   </baidu-map>
      
         </div>
        </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name:'SpecialCount',
  data(){
      return{
          baidumapSwitch:false,
          province:'',
          city:'',
          county:'',
          center:{
              lng: 114.220941,
              lat: 22.690015,
          },
          zoom: 16,
          location: '深圳',
          keyword: '请输入搜索关键词',
          curlocation:''
        
      }
  },
  computed:{
     ...mapGetters(['getPlace'])
  },

  methods:{
    onProvinceChange(selectVal){
    this.province=selectVal;
    },
    getCity(provinces){
        let citys=[];
         provinces.forEach(element => {
            if(element.province===this.province){
              citys=element.citys;
            }
        });
        return citys;  

    },
    getCounty(provinces){
        let countys=[];
         provinces.forEach(element => {
            if(element.province===this.province){
              countys=element.countys;
            }
        });
        return countys;  
    },
    handler({BMap}){
        let _this = this;
     var gelocation = new BMap.Geolocation();
         gelocation.enableSDKLocation()
         gelocation.getCurrentPosition((r)=>{
           window.console.log(r);
           _this.center.lng=r.point.lng;
           _this.center.lat= r.point.lat;
           _this.curlocation=`${r.address.city}${r.address.province}`;
           window.console.log(_this.curlocation);
         })
       
    },
 getClickInfo(e) {
 
  this.center.lng = e.point.lng;
  this.center.lat = e.point.lat;
},
//双向绑定经纬度以及缩放尺寸
syncCenterAndZoom(e) {
  const { lng, lat } = e.target.getCenter();
  this.center.lng = lng;
  this.center.lat = lat;
  // this.zoom = e.target.getZoom();
},
//经纬度同步
baidumap(){
 this.baiduDevicelocationx = this.center.lng
 this.baiduDevicelocationy = this.center.lat
}
  },
}
</script>

<style lang="less" scoped>
@import url("./SpecialCount");
</style>
<style>
.el-input,.el-input__inner {
    height: 100%;
}
</style>