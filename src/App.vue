<template>
  <div id="app">
    <ul class="nav">
      <router-link to="/" tag="li" active-class="active" exact>Hello</router-link>
      <router-link to="/about" tag="li">about</router-link>
      <router-link to="/document" tag="li">document</router-link>
      <router-link to="/home" tag="li">home</router-link>
    </ul>
    <router-view class="center"></router-view>
    <router-view class="center" name="noFind"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
ul,li{
  margin:0;
  padding:0;
  list-style-type: none;
}
.nav{
  width:1200px;
  height: 50px;
  margin: 0 auto;
  border-bottom: 2px solid #42b983;
}
.nav li{
  width: 100px;
  height: 50px;
  line-height: 50px;
  font-size: 16px;
  font-family: '微软雅黑';
  float: left;
  cursor: pointer;
  text-align: center;
}
.nav li.active{
  background: #42b983;
  color:#fff;
}
.center{
  width: 1200px;
  margin: 0 auto;
  padding-top: 30px;
  text-align: center;
}
</style>
