<template>
  <div id="app">
    <customized></customized>
  </div>
</template>

<script>
import customized from '@/components/customized.vue'
export default {
  name: 'app',
  components: { customized }
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
