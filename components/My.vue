<template>
  <div>
    <my-header comtitle="个人中心"></my-header>
    
    <cell :title="ms">
        <div>
          <span style="color: green">{{msg}}</span>
        </div>
    </cell>

    <group :title="ms_1">
      <cell :title="ms_2" link="/login" ></cell>
      <cell :title="ms_3" link="{path:'/'}" ></cell>
      
    </group>
    

    <!-- 这是底部导航 -->
    <my-tab-bar></my-tab-bar>
  </div>
</template>
<i18n>
 Slot content:
  zh-CN: slot 内容

</i18n>
<script>
import { Cell, CellBox, CellFormPreview, Group, Badge } from 'vux'

export default {
  components: {
    Group,
    Cell,
    CellFormPreview,
    CellBox,
    Badge
  },
  data() {
    return {
      ms:"我的账户",
      msg:"你好哇，感谢关注",
      ms_1:"关于我的",
      ms_2:"登录Dazzling",
      ms_3:"我的发布"
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
