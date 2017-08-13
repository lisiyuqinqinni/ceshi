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
        <router-link exact :to="{path:'',query:{info:'follow',a:1}}">我的关注</router-link>
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

<style>
</style>
