<template>
  <div id="app">
    <div class="nav-box">
      <ul>
        <router-link :to="index" tag="li">home</router-link>
        <router-link :to="{path: '/about'}" tag="li" active-class="hah">about</router-link>
        <router-link :to="{path: '/document'}" tag="li">document</router-link>
      </ul>
    </div>
    <router-view class="center"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      index: '/home'
    }
  }
}
</script>

<style>
  ul,li,a{
    padding:0;
    margin:0;
    list-style-type:none;
  }
  a{
    text-decoration: none;
  }
  .nav-box{
    width:1200px;
    margin:0 auto;
    height:50px;
    border-bottom:2px solid #f3e5d8;
  }
  .nav-box ul li{
    float:left;
    width:100px;
    font-size:14px;
    line-height:50px;
    text-align:center;
    font-weight: bold;
    color:#333;
    cursor: pointer;
  }
  .nav-box ul li.active{
    background: #f3e5d8;
  }
  .nav-box ul li.hah{
    background: #f4ff0f;
  }
  #app .center{
    width:1200px;
    margin:0 auto;
    text-align: center;
    padding-top: 20px;
    font-size:20px;
    font-family: "微软雅黑";
  }
</style>
