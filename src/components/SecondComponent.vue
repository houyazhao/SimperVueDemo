<template>
  <div id="second-component">
    <h1>I am second title</h1>
    <a>written by {{ author }} </a>
    <p>此DEMO纯属练手</p>
    <div></div>
    <ul>
      <li v-for="article in articles">
        {{ article.title }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      author: 'EnjoyMe',
      articles: [],
    }
  },
  mounted: function () {
    this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=10', {}, {
      header: {

      },
       emulateJSON: true
    }).then(function (response) {
      //处理正确的回调
      console.log(response.data)
      this.articles = response.data.subjects
    }, function (response) {
      // 这里处理错误的回调
      console.log(response);
    })
  }
}
</script>

<style>

</style>
