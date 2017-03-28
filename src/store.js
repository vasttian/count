import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		count: 20,
	},
	mutations: {
		// inc 1
		INCREMENT(state) {
			state.count++;
		},

		// dec 1
		DECREMENT(state) {
			state.count--;
		},

		INCREMENT_WITH_VALUE(state, value){
      state.count +=value;
    }
	},
	actions: {
		increment({commit}) {
			commit('INCREMENT');
		},

		decrement({commit}) {
			commit('DECREMENT');
		},

		incrementWithValue({commit}, value) {
      commit("INCREMENT_WITH_VALUE",  parseInt(value, 10));
    }
	}
});

export default store;