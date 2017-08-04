<template>
  <div id="app">
    <img src="./assets/logo.png">
    <ul id="tab-ul">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="./First">FirstPage</router-link></li>
      <li><router-link to="./Second">SecondPage</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
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
li{
  list-style: none;
}
a {
  text-decoration: none;
}
#tab-ul li{
display: inline-block;
width: 200px;
height: 50px;
line-height: 50px;
text-align: center;
font-size: 20px;
}
</style>
