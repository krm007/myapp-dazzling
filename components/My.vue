<template>
  <div>
    <h1>这是个人中心</h1>

     <my-tab-bar></my-tab-bar>


  </div>
</template>

<script>
import myTabBar from "@/components/MyTabBar";


export default {
  components: {
    myTabBar,
   
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
