import state from './state';
const getters = {
    getTabData() {
        return state.tabdata.imgitems;
    },
    getSearchItems(){
        return state.searchItem;
    },
    getPersonItems(){
        return state.personItem;
    },
    getInspItems(){
        return state.findinspItem;
    },
    getPlace(){
        return state.searchByPlace;
    }
}
export default getters;