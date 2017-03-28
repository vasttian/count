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

		INCREMENT_WITH_VALUE(state, value) {
      state.count += value;
    },

    // 显示和隐藏waiting
    SHOW_WAITING_MESSAGE(state) {
      state.waiting = true;
    },

    HIDE_WAITING_MESSAGE(state) {
      state.waiting = false;
    }
	},
	actions: {
		increment({commit}) {
			commit('INCREMENT');
		},

		decrement({commit}) {
			commit('DECREMENT');
		},

		// 同步
		// incrementWithValue({commit}, value) {
		// 	let intValue = parseInt(value, 10);
		// 	if (isNaN(intValue)) {
		// 		throw 'Not an Interger'
		// 	} else {
		// 		commit("INCREMENT_WITH_VALUE", intValue);
		// 	}
		// }

    // 异步
    // 2s 响应
    incrementWithValue({commit}, value) {
    	commit("SHOW_WAITING_MESSAGE");
      let intValue = parseInt(value, 10);
	    setTimeout(function() {
	      if (isNaN(intValue)) {
	        alert("Not an Interger");
	      } else {
	      	commit("HIDE_WAITING_MESSAGE");
	        commit("INCREMENT_WITH_VALUE", intValue);
	      }
	    }, 2000);
	  },
	}
});

export default store;