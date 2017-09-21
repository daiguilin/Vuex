<template>
    <section class="warp">
      <div class="searchIpt clearFix">
        <select-input :is-show.sync="listShow"></select-input>
        <list v-show="listShow"></list>
      </div>
    </section>
</template>
<script>
import list from '@/components/list'
import selectInput from '@/components/selectInput'
/*let listData = [
  {
    title:'javascript'
  },
  {
    title:'htmlcss'
  },
  {
    title:'jQuery'
  },
  {
    title:'react'
  },
  {
    title:'nodejs'
  }
]*/

 
export default {
  data(){
    return {
      listShow:false,
      /*title:''*/
    }
  },
  methods:{
   /* titleHandle(title){
      this.title = title
    }*/
  },
  components:{
    list,
    selectInput
  }
}
</script>

