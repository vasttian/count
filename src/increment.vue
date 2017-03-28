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
	</div>
</template>

<script>

	// 引入mapActions
	import {mapActions} from 'vuex';
	export default {
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
				this.$store.dispatch('incrementWithValue', this.incrementValue);
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