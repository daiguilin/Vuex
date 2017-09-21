<template>
<div>
      <ul class="list">
        <li v-for="item in list.data" @click="getTitleHandle(item.title)">{{item.title}}</li>
      </ul>
     <!--  <p>{{list}}</p> -->
</div>
</template>

<script>
export default {
  /*props:['data'],*/
  computed:{
    list(){
      return this.$store.state.selectModule.list;
    }
  },
  created(){
    //获取数据
    this.$store.dispatch('getListAction')
    
  },
  methods:{
    getTitleHandle(title){
      /*this.$emit('changeTitle',title)*/
      this.$store.commit("changeTitle",{title:title})
    }
  }
}
</script>
