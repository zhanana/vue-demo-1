<template>
  <div id="app"> 
    <Demo9 />
  </div>
</template>

<script>

import Demo9 from './components/Demo9.vue'

export default {
  name: 'App',
  components: {
    Demo9
  },
  data(){
    return{
    }
  },
  methods:{

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
