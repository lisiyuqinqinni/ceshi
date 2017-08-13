<template>
  <div id="app">
    <ul class="nav">
      <router-link to="/" tag="li" active-class="active" exact>Hello</router-link>
      <router-link to="/about" tag="li">about</router-link>
      <router-link to="/document" tag="li">document</router-link>
      <router-link to="/home" tag="li">home</router-link>
      <router-link :to="{path: '/user'}" tag="li">user</router-link>
    </ul>
    <!-- <transition mode="out-in">
      <router-view class="center" style="height:1000px;"></router-view>
    </transition> -->
    <transition name="right">
      <router-view class="center" style="height:1000px;"></router-view>
    </transition>
    
  </div>
</template>

<script scoped>
export default {
  name: 'app'
}
</script>

<style>
.v-enter{
  opacity: 0;
}
.v-enter-to{
  opacity: 1;
}
.v-enter-active{
  transition: 1s;
}
.v-leave{
  opacity: 1;
}
.v-leave-to{
  opacity: 0;
}
.v-leave-active{
  transition: 1s;
}
.right-enter{
   transform: translateX(100%);
}

.right-enter-active,.right-leave-active{
  transition: 1s;
}

.right-leave-to{
  transform: translateX(-100%)
}
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
