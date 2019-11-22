import axios from 'axios';
const actions = {
    tabDataAction({commit}) {
        window.console.log('action')
        //首先获取数据，然后吧数据commit 对应的mutations，去修改对应的state
        axios.get('/tabdata').then(({ data: { data } }) => {
            commit('addTabData', data)
        })
    },
    searchItem({commit}){
      return new Promise((resolve,reject)=>{
          axios.get('/getSearchImg').then(({data:{data}})=>{
              commit('getSearchItems',data);
              resolve();
          }).catch((err)=>{
              reject(err);
          })
      })
    },
    searchPersonOrderItem({commit}){
        axios.get('/personorderitem').then(({data:{data}})=>{
            commit('getPersonItems',data);
        })
    },
    searchFindInspItem({commit}){
        axios.get('/findinspitem').then(({data:{data}})=>{
            window.console.log(data);
            commit('getInspItem',data)
        })
    }

}
export default actions;