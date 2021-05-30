<template>
  <div id="app"> 
    <Demo10 />
  </div>
</template>

<script>

import Demo10 from './components/Demo10.vue'

export default {
  name: 'App',
  components: {
    Demo10
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
