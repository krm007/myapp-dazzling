<template>
  <div>
      <x-header>这是细节页面</x-header>
<!-- 顶部 -->
  <divider v-bind:class="a">{{publish.workname}}</divider>
      <!-- 以下是图片展示 -->
  <div>
    <div v-for="src in list" :key="src" style="text-align:center;">
      <span style="font-size:20px;">关键字</span>
      <x-img :src="src" :webp-src="`${src}?type=webp`" @on-success="success" @on-error="error" class="ximg-demo" error-class="ximg-error" :offset="-100" container="#vux_view_box_body"></x-img>
    </div>
  </div>
  
  <!-- 以下是评论部分 -->
   <divider v-bind:class="a">看看别人的评论</divider>
     <flexbox v-for="dis of discuss" :key="dis.did">
      <flexbox-item>
           <div class="flex-demo">
             {{dis.username}}
          </div>
      </flexbox-item>
      <flexbox-item>
         <div class="flex-demo">
           {{dis.dcontent}}
         </div>
      </flexbox-item>
    </flexbox>
    
    <br><br>
   
          </div>

</template>

<script>
import {Flexbox, FlexboxItem,Divider, XHeader, XImg } from "vux";

export default {
  name: "detil",
  components: {
    XHeader,
    XImg,
    Divider,
    Flexbox,
    FlexboxItem,
    
  },
  data() {
    return {
      msg1: "",
      a: "nav",
      list: [  ],
      publish:[],
      discuss:[]
    };
  },
  methods: {
    demo01_onIndexChange(index) {
      this.demo01_index = index;
    },
    success(src, ele) {
      console.log("success load", src);
      const span = ele.parentNode.querySelector("span");
      ele.parentNode.removeChild(span);
    },
    error(src, ele, msg) {
      console.log("error load", msg, src);
      const span = ele.parentNode.querySelector("span");
      span.innerText = "load error";
    }
   
  },
   created() {
     var t = this;
      console.log(t.serverName + "app/detil?pid="+this.$route.params.pid);
      // 绑定到具体的哪一个推荐，通过get传值，把数据发送给后台，在perfect页面，跳转路由时要加上id
      t.ljx.get(t.serverName + "app/detil?pid="+this.$route.params.pid)
        .then(response => {
           t.list=response.data.imglist;
           t.publish=response.data.publish;
           t.discuss=response.data.discuss
        })
        .catch(response => {});
    }
};
</script>

<style>
.nav {
  margin-top: 10px;
  color: red !important;
  font-size: 14px;
  font-weight: 900;
  font-family: "Courier New", Courier, monospace;
}
.vux-header {
  position: relative;
  padding: 3px 0;
  box-sizing: border-box;
  background-color: #ffe4e1 !important;
}
.ximg-demo {
  width: 100%;
  height: auto;
}

</style>