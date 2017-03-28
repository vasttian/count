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
	import {mapActions} from 'vuex';
	export default {
		data: {
			return {
				incrementValue: 0,
			}
		},

		// computed 从 state 中获取初始状态
    computed: {
      show: function() {
        return this.$store.state.waiting;
      }
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
					this.$store.dispatch('incrementWithValue', this.incrementValue);
				} catch(error) {
					alert(error);
				}
			},
		}
	};
</script>

<style>
	button {
		width: 200px;
		height: 100px;
		font-size: 30px;
	}
</style>