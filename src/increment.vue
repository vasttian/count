<template>
	<div>
		<div>
			<button @click="increment">+1</button>
			<button @click="decrement">-1</button>
		</div>
		<div>
			<input type="text" v-model="incrementValue">
			<button @click="incrementWithValue">increment</button>
		</div>
		
		<!-- 展示信息 -->
    <div v-if ="show">waiting</div>
	</div>
</template>

<script>

	// 引入mapActions
	import { mapActions } from 'vuex';
	export default {
		data() {
			return {
				incrementValue: 0,
			};
		},

		// computed 从 state 中获取初始状态
    computed: {
      show() {
        return this.$store.state.waiting;
      },

      // 获取getters
      countAnother() {
        return this.$store.getters.countAnother;
      },
    },
		methods: {
			// increment() {
			// 	this.$store.dispatch('increment');
			// },

			// decrement() {
			// 	this.$store.dispatch('decrement');
			// }
			...mapActions([
				'increment',
				'decrement',
			]),
			incrementWithValue() {
				try {
					// dispatch 只能接受一个参数，需要传对象参数
          this.$store.dispatch("incrementWithValue", { value: this.incrementValue, anotherValue: this.countAnother});
				} catch(error) {
					alert(error);
				}
			},
		},
	};
</script>

<style>
	button {
		width: 200px;
		height: 100px;
		font-size: 30px;
	}
</style>