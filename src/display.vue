<template>
	<div>
		<h3>Count is {{count}}</h3>
		<!-- <p>组件自己的内部计算属性{{ localComputed }}</p> -->
		<h3>AnoterIncrement is {{countAnother}}</h3>
	</div>
</template>

<script>

	// 引入mapState
	import {mapState} from 'vuex';
	export default {
		// computed: {
		// 	count() {
		// 		return this.$store.state.count;
		// 	}
		// }
		// computed: mapState({
		// 	 count: 'count'
		// })
		// computed: mapState([  // 数组
  	//   "count"
  	// ])
  	computed: {
  		localComputed() {
  			return this.count + 80;
  		},
  		...mapState({
  			count: 'count'
  		}),

  		// 获取getters
  		countAnother: function () {
        return this.$store.getters.countAnother;
      },
  	}
	};
</script>
<style>
	h3 {
		font-size: 30px;
	}
</style>