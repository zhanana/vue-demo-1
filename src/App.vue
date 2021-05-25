<template>
  <div id="app"> 
    <div @click="close">开关</div>
    <Demo2 v-if="visible" />
  </div>
</template>

<script>
import Demo2 from './components/Demo2.vue'

export default {
  name: 'App',
  components: {
    Demo2
  },
  data(){
    return{
      visible:true
    }
  },
  methods:{
    close(){
      this.visible = !this.visible
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
