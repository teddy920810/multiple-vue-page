<template>
  <div>
    <full-page ref="fullpage" :options="options">
      <!--<div class="section">
        <button class="next" @click="$refs.fullpage.api.moveSectionDown()">Next</button>
        Section 1
      </div>
      <div class="section">
        <div class="slide" data-anchor="slide1">Slide 2.1</div>
        <div class="slide" data-anchor="slide2">Slide 2.2</div>
      </div>
      <div class="section">
        Section 3
      </div>-->

      <div class="section">Section 1</div>
      <div class="section">
        <div class="slide" data-anchor="slide1">Slide 2.1</div>
        <div class="slide" data-anchor="slide2">Slide 2.2</div>
      </div>
      <div class="section">Section 3</div>
      <div class="section">Section 4</div>
    </full-page>
  </div>
</template>

<script>
export default {
  data () {
    return {
      options: {
        // menu: '#menu',
        // anchors: ['page1', 'page2', 'page3'],
        sectionsColor: ['yellow', 'orange', '#C0C0C0', '#ADD8E6'],
        afterLoad: this.afterLoad,
        navigation: true
      }
    }
  },
  methods: {
    afterLoad () {
      console.log("Emitted 'after load' event.")
    }
  }
}
</script>
<style scoped>
.section {
  text-align:center;
  font-size: 3em;
}
</style>
