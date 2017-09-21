import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

let selectModule ={
	state:{
		title:'',
		list:[]
	},
	mutations:{
		changeTitle(state,payload){
			state.title=payload.title
		},
		getData(state,payload){
			//console.log(payload.data)
			state.list=payload;
			//console.log(state.data)
		}
	},
	actions:{
		getListAction(context){
				//console.log(0)
				axios.get('http://www.easy-mock.com/mock/59c35d7ae0dc663341b2f3d5/example/miaov.onlinedata')
				.then((data) => {
					//console.log(data.data)
					
					context.commit('getData',data.data)
				})
				.catch((error) => {
					console.log(error)
				})
		}
	}
}
//
//
//this.$store.state.title
//this.$store.state.selectModule.title
//
//
//定义一个容器
//注意此处的store中的s大写
let store = new Vuex.Store({
	//state中放置所有要管理的数据
	state:{
		count:100,
	},
	//getters用来处理不同要求的数据逻辑
	getters:{
		filterNum(state){
			return state.count >= 120 ? 120 : state.count
		}
	},
	mutations:{
		//多个参数传递可写成对象
		addIncrement(state,payload){
			state.count+=payload.n;
		},
		deIncrement(state,payload){
			state.count-=payload.de;
		}
	},

	//异步操作
	actions: {
		addAction(context){
			console.log(context)
			setTimeout(() => {
				//改变状态，提交mutations
				context.commit("addIncrement",{n:5})
				//异步操作中可以连续触发异步事件
				context.dispatch("textAction",{text:"测试"})

			},1000)
		},
		textAction(context,obj){
			console.log(obj)
		},
		
	},
	modules:{
		selectModule
	}
})


export default store