<template>
  <div id="app"> 
    <div @click="close">开关</div>
    <Demo2 v-if="visible" />
    <!-- <Demo3 :message=" n "/> -->
    {{n}}
    <Demo3 :message=" n " :fn=" add " />
  </div>
</template>

<script>
import Demo2 from './components/Demo2.vue'
import Demo3 from './components/Demo3.vue'

export default {
  name: 'App',
  components: {
    Demo2,
    Demo3
  },
  data(){
    return{
      visible:true,
      n:0
    }
  },
  methods:{
    close(){
      this.visible = !this.visible
    },
    add(){
      this.n+=1
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
