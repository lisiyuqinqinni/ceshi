<template>
  <div>
    我是user
    <div>
    	<ul>
    		<router-link v-for="item,index in userList" tag="li" key="index" :to="{path:'/user/'+item.tip+'/'+item.id,query:{info:'follow'}}">{{item.userName}}</router-link>
    	</ul>
      <div v-if="userInfo.name">
        <div>名字：{{userInfo.name}}</div>
        <div>爱好：{{userInfo.hobby}}</div>
      </div>
      <div v-if="userInfo.name">
        <!-- <router-link exact to="?info=follow">我的关注</router-link>
        <router-link exact to="?info=share">我的分享</router-link> -->
        <router-link exact :to="{path:'',query:{info:'follow'}}">我的关注</router-link>
        <router-link exact :to="{path:'',query:{info:'share'}}">我的分享</router-link>
        <div>
          {{$route.query}}
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
let data = [
  {
    id: '1',
    tip: 'vip',
    name: 'liming',
    userName: '用户1',
    hobby: '打球'
  }, {
    id: '2',
    tip: 'vip',
    name: '张三',
    userName: '用户2',
    hobby: '玩牌'
  }, {
    id: '3',
    tip: 'common',
    name: '李四',
    userName: '用户3',
    hobby: '打游戏'
  }
]
export default {
  beforeRouteEnter (to, form, next) {
    console.log('before')
    next((vm) => {
      vm.userList[0].name = '黎明'
    })
  },
  beforeRouteUpdate (to, form, next) {
    console.log('updata')
    next()
  },
  beforeRouteLeave () {
    console.log('leave')
  },
  data () {
    return {
      userList: data,
      userInfo: {}
    }
  },
  watch: {
    $route () {
      this.getId()
    }
  },
  created () {
    this.getId()
  },
  methods: {
    getId () {
      let id = this.$route.params.userId
      if (id) {
        this.userInfo = this.userList.filter((item) => {
          return item.id === id
        })[0]
      } else {
        this.userInfo = {}
      }
    }
  }
}
</script>

<style scoped>
  ul{
    height: 20px;
    width: 600px;
    margin: 0 auto;
    padding-top: 50px;
    margin-bottom: 30px
  }
  ul li{
    width:60px;
    margin:0 70px;
    float: left;
    font-size: 14px;
    color: #333;
    text-align: center;
    line-height: 20px;
    cursor: pointer;
  }
  li.active{
    background: #f0fa45;
  }
  a{
    display: inline-block;
    text-decoration: none;
    margin: 10px;
    padding: 5px;
    color:#333;
  }
  a.active{
    background: #03eaf0;
  }
</style>
