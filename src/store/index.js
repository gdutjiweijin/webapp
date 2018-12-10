/**
* @file getter
* @Author: jiweijin
* @Date:   2017-10-31 19:45:14
* @Last Modified by:   jiweijin
* @Last Modified time: 2017-12-01 11:20:56
*/

import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutation';
// import * as actions from './action';
import * as getters from './getters';
import state from './state';
const actions = { auth: { handler: () => {} } };

Vue.use(Vuex);

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
});
