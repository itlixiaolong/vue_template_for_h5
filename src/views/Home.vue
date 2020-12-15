<template>
  <div class="home">
    <img
      alt="Vue logo"
      src="../assets/logo.png"
    >
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <van-button type="primary">
      按钮
    </van-button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { getUserListData } from '../api/home.js'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  created () {
    getUserListData()
      .then(res => {

      }).catch(err => {
        console.log(err)
      })
  }
}
</script>
