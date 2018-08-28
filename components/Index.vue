<template>
  <div>
    <h1>这是首页</h1>
    




    <!-- 底部导航 -->
    <my-tab-bar></my-tab-bar>

  </div>
</template>

<script>
import myTabBar from "@/components/MyTabBar"

export default {
  name:"Index",
  components: {
    myTabBar
  },
  data() {
    return {
      
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
