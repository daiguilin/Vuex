<template>
	<div>
		<h2>简易加法计算器</h2>
		<div>
			<input type="button" value="-" @click="deHandle">
			<span>{{num}}</span>
			<input type="button" value="+" @click="addHandle">
			<p>{{num2}}</p>
		</div>
	</div>
</template>
<script>
	export default{
		computed:{
			num(){
				return this.$store.state.count
			},
			num2(){
				return this.$store.getters.filterNum
			}
		},
		methods:{
			addHandle(){
				//改变状态，提交mutation addIncrement
				/*this.$store.commit("addIncrement",5)//同步写法*/
				this.$store.dispatch("addAction")//异步操作
			},
			deHandle(){
				this.$store.commit({
					type:'deIncrement',
					de:10
				})
			}
			
		}
	}
</script>
<style></style>
