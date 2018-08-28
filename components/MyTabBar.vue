<template>
  <div >

    <!-- 这是导航 -->
    <tabbar>
      <tabbar-item>
        <img slot="icon" src="../assets/tab01.png">
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item >
        <img slot="icon" src="../assets/tab02.png">
        <span slot="label">推荐</span>
      </tabbar-item>
      <tabbar-item  >
        <img slot="icon" src="../assets/tab03.png">
        <span slot="label">精选</span>
      </tabbar-item>
      <tabbar-item link="/my">
        <img slot="icon" src="../assets/tab04.png">
        <span slot="label">个人</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem, Group, Cell } from "vux";
export default {
  name: "myTabBar",
  components: {
    Tabbar,
    TabbarItem,
    Group,
    Cell
  },
  data() {
    return {
      // msg: 'Welcome to Your Vue.js App'
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
