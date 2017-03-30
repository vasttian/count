import * as types from './mutation-types';

export default {
	increment({ commit }) {
		commit(types.INCREMENT);
	},

	decrement({ commit }) {
		commit(types.DECREMENT);
	},

  // 异步
  // 2s 响应
  incrementWithValue({ commit }, value) {
  	commit(types.SHOW_WAITING_MESSAGE);
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