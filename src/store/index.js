
import Vue from 'vue'
import Vuex from 'vuex'
import getters from './vuex/getters'
import actions from './vuex/actions'
import mutations from './vuex/mutations'
import films from '../data/filmsCard'


Vue.use(Vuex);


let store = new Vuex.Store({
    state: {
        searchValue: '',
        films: films,
    },
    mutations,
    actions,
    getters,


});

export default store;