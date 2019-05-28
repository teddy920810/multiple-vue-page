<template>
  <div id="app">
    <about></about>
  </div>
</template>

<script>
import about from '@/components/about.vue'
export default {
  name: 'app',
  components: { about }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
