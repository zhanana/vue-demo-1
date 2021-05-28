<template>
  <div id="app"> 
    <Demo7 />
  </div>
</template>

<script>

import Demo7 from './components/Demo7.vue'

export default {
  name: 'App',
  components: {
    Demo7
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
