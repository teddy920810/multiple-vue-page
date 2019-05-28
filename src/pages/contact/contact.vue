<template>
  <div id="app">
    <contact></contact>
  </div>
</template>

<script>
import contact from '@/components/contact.vue'
export default {
  name: 'app',
  components: { contact }
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
