import * as types from './mutation-types';

export default {
	// inc 1
	[types.INCREMENT](state) {
		state.count++;
	},

	// dec 1
	[types.DECREMENT](state) {
		state.count--;
	},

	[types.INCREMENT_WITH_VALUE](state, value) {
    state.count += value.intValue + value.anotherValue;
  },

  // 显示和隐藏waiting
  [types.SHOW_WAITING_MESSAGE](state) {
    state.waiting = true;
  },

  [types.HIDE_WAITING_MESSAGE](state) {
    state.waiting = false;
  },
}