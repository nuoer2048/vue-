// import state from './state';
const mutations = {
    //获取每个tab界面下的数据
    addTabData(state,data) {
        state.tabdata = data;
    },
   //获取搜索发现的信息
   getSearchItems(state,data){
      window.console.log([...state.searchItem,...data]);
      state.searchItem=data;
   },
   //获取私人定制信息
   getPersonItems(state,data){
      state.personItem=data;
   },
   //获取找到灵感的信息
   getInspItem(state,data){
      state.findinspItem=data;
   }

};
export default mutations;