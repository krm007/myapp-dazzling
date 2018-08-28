<template>
  <div>
    <h1>这是个人中心</h1>

    
  </div>
</template>

<script>

import { Tabbar, TabbarItem, Group, Cell } from "vux";

export default {
//   name: "my",
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
