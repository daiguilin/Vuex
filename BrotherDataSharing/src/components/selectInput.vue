<template>
    <div class="clearFix">
      <input
        readonly='readonly'
        class="keyWord"
        @click="showListHandle"
        :value="title"
      />
      <input type="button" value="GO">
      <span></span>
    </div>
</template>

<script>

export default {
   props:['isShow'/*'title'*/],
   computed:{
      initShow(){
        return this.isShow
      },
      title(){
        return this.$store.state.selectModule.title
      }
   },
   methods:{
    showListHandle(){
      this.$emit("update:isShow",!this.initShow)//此处的update是vue内部定义的，用来指定某个属性发生变化
    }
   }
}
</script>
