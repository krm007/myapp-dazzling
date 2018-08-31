<template>
     <flexbox>
         <flexbox-item><div class="flex-demo"> </div></flexbox-item>
         <flexbox-item><div class="flex-demo"></div></flexbox-item>
         <flexbox-item><div class="flex-demo"></div></flexbox-item>
    </flexbox>
    </template>


<script>

import { Flexbox, FlexboxItem } from "vux";
export default {
  

  name: "xflexbox",
  components: {
    Flexbox,
    FlexboxItem
  }
};
</script>


<style>

.flex-demo {
  text-align: center;
  width: 100%;
  height: 100px;
  color: #fff;
  border-radius: 4px;
  border: 1px solid gainsboro;
  background-clip: padding-box;
}
</style>
