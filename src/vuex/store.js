import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state={
    photoList:[],
}
const mutations={
    setphotoList(state,status){
        state.photoList=status;
    }
}
const getters={}
const actions={
    actionphotoList({commit},status){
        commit('setphotoList',status)
    }
}
export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions,
});