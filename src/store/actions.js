import * as types from './mutation-types';

export default {
	increment({ commit }) {
		commit(types.INCREMENT);
	},

	decrement({ commit }) {
		commit(types.DECREMENT);
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
  incrementWithValue({ commit }, value) {
  	commit("SHOW_WAITING_MESSAGE");
    let intValue = parseInt(value.value, 10);
    let anotherValue = value.anotherValue;

    setTimeout(function() {
      if (isNaN(intValue)) {
        alert("Not an Interger");
      } else {
      	commit(types.HIDE_WAITING_MESSAGE);
        commit(types.INCREMENT_WITH_VALUE, { intValue, anotherValue });
      }
    }, 2000);
  },
}