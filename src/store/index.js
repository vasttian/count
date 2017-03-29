import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// 引入actions, mutations, getters
import actions from './actions.js';
import mutations from './mutations.js';
import getters from './getters.js';

const state = {
	count: 20,

	// 新增waiting  状态
  waiting: false,

  // 额外需要增加的数字
  anotherIncrement: 5,
};

export default new Vuex.Store({
	state,
	mutations,
	actions,
	getters,
})