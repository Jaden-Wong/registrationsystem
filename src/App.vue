<template>
  <div id="app">
    <van-button type="primary">主要按钮</van-button>
    <router-view></router-view>
    <div class="tab-bar">
        <van-tabbar v-model="active">
          <van-tabbar-item v-for="(item, i) in tabBarData" :key="i" @click="handleJump(i)">
            <span>{{item.name}}</span>
            <template #icon="props">
              <img :src="props.active ? item.active : item.inactive" />
            </template>
          </van-tabbar-item>
        </van-tabbar>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      active: 0,
      tabBarData: [{
        id: 0,
        name: '竞赛',
        active: 'https://z3.ax1x.com/2021/05/02/gZfosP.png',
        inactive: 'https://z3.ax1x.com/2021/05/02/gZfIMt.png'
      },
      {
        id: 1,
        name: '赛事中心',
        active: 'https://z3.ax1x.com/2021/05/02/gZf4xI.png',
        inactive: 'https://z3.ax1x.com/2021/05/02/gZfTqf.png'
      },
      {
        id: 2,
        name: '我的',
        active: 'https://z3.ax1x.com/2021/05/02/gZfHZ8.png',
        inactive: 'https://z3.ax1x.com/2021/05/02/gZfhRA.png'
      }]
    }
  },
  methods: {
    handleJump (i) {
      // console.log(i)
      if (i === 0) {
        this.$router.push('/competition')
      }
      if (i === 1) {
        this.$router.push('/center')
      }
      if (i === 2) {
        this.$router.push('/my')
      }
    }
  },
  components: {

  }
}
</script>

<style lang="scss" scoped>
.tab-bar{
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 3.875rem;
  width: 100vw;
  .van-tabbar{
    height: 3.875rem;
    img{
      width: 1.6875rem;
      height: 1.6875rem;
    }
  }
}
</style>
