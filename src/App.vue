<template>
  <Grafo/>
</template>

<script>
import Grafo from './components/Grafo.vue'

export default {
  name: 'App',
  components: {
    Grafo
  }
}
</script>

<style lang="scss">
body{
  margin:0px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
