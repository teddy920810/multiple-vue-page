<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>{{ list }}</h1>
  </div>
</template>

<script>
import { getLog } from '@/api/log'
export default {
  name: 'test',
  data () {
    return {
      msg: '多页面测试',
      list: [],
      listQuery: {
        pageNum: 0,
        pageSize: 10
      }
    }
  },
  created () {
    this.fetchData()
  },
  methods: {
    fetchData () {
      getLog(this.listQuery).then(response => {
        this.list = response.data
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
