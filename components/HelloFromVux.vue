<template>
  <div>
    <h1>这是首页</h1>





    <!-- 底部导航 -->
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
      <tabbar-item link="./My">
        <img slot="icon" src="../assets/tab04.png">
        <span slot="label">个人</span>
      </tabbar-item>
    </tabbar>

    

  </div>
</template>

<script>
import {Tabbar, TabbarItem, Group, Cell} from "vux";

export default {
  name:"HelloWorld",
  components: {
    
    Tabbar,
    TabbarItem,
    Group,
    Cell
  },
  data() {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: "Hello World!"
    };
  }
};
</script>

<style>
.vux-demo {
  text-align: center;
}
.logo {
  width: 100px;
  height: 100px;
}
</style>
