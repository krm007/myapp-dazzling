<template>
  <div>
<!-- 顶部 -->
  <divider v-bind:class="a">{{ msg1 }}</divider>
        <group-title>美美哒，专业打造属于你的美~~</group-title>
         <swiper :list="demo01_list" v-model="demo01_index" @on-index-change="demo01_onIndexChange"></swiper>
 <divider v-bind:class="a1">{{ msg2 }}</divider>
 <scroller lock-y :scrollbar-x=false>
      <div class="box1">
        <div class="box1-item" v-for="item in mytitle" :key="item">
             <img src="../assets/fb02.jpg" alt="" :class="b">
             <p :class="mycontent">{{' ' + item + ' '}}</p>
             <p :class="mycontentone">这是标题</p>
        </div>
      </div>
    </scroller>
    <!-- 眼影 -->
    <divider v-bind:class="a1">{{ msg3 }}</divider>
  <scroller lock-y :scrollbar-x=false>
      <div class="box1">
        <div class="box1-item" v-for="i in eshadow" :key="i.workname">
              <div  v-for="img in i.imglist" :key="img.url">
                <img :src="img" alt="" :class="b">
              </div>
              <p :class="mycontent">{{i.workname }}</p>
              <p :class="mycontentone">{{i.keywords}}</p>
        </div>
      </div>
    </scroller>
     <!-- 口红 -->
    <divider v-bind:class="a1">{{ msg4 }}</divider>
  <scroller lock-y :scrollbar-x=false>
      <div class="box1">
        <div class="box1-item" v-for="i in lipgloss" :key="i.workname">
           <div  v-for="img in i.imglist" :key="img.url">
                <img :src="img" alt="" :class="b">
              </div>
             <p :class="mycontent">{{i.workname }}</p>
              <p :class="mycontentone">{{i.keywords }}</p>
        </div>
      </div>
    </scroller>
   <!-- 腮红 -->
       <divider v-bind:class="a1">{{ msg5 }}</divider>
  <scroller lock-y :scrollbar-x=false>
      <div class="box1">
        <div class="box1-item" v-for="i in mytitle" :key="i">
             <img src="../assets/fb05.jpg" alt="" :class="b">
             <p :class="mycontent">{{' ' + i + ' '}}</p>
              <p :class="mycontentone">这是标题</p>
        </div>
      </div>
    </scroller><br><br><br>

  <!-- 底部导航 -->
  <myTabBar></myTabBar>
  </div>
  
</template>

<script>
import { GroupTitle, Swiper, Divider, Scroller } from "vux";

const baseList = [
  {
    img: "https://ww1.sinaimg.cn/large/663d3650gy1fq66vvsr72j20p00gogo2.jpg",
    title: "送你一朵fua"
  },
  {
    img: "https://ww1.sinaimg.cn/large/663d3650gy1fq66vw1k2wj20p00goq7n.jpg",
    title: "送你一辆车"
  },
  {
    img: "https://ww1.sinaimg.cn/large/663d3650gy1fq66vvsr72j20p00gogo2.jpg", // 404
    title: "送你一次旅行",
    fallbackImg:
      "https://ww1.sinaimg.cn/large/663d3650gy1fq66vw50iwj20ff0aaaci.jpg"
  }
];

export default {
  name: "sort",
  components: {
    Scroller,
    Divider,
    Swiper,
    GroupTitle
  },
  data() {
    return {
      msg1: "分类",
      msg2: "眼影",
      msg3: "口红",
      msg4: "高光",
      msg5: "腮红",
      eshadow:[],
      lipgloss:[],
      a: "nav",
      b:'picture',
      a1: "content",
      mytitle:'mytitle',
      mycontent:'mycontent',
      mycontentone:'mycontentone',
      demo01_list: baseList,
      demo01_index: 0,
      mytitle: ["cindy", "alex", "mary", "yammy", "tasty", "good"]
    };
  },
  methods: {
    demo01_onIndexChange(index) {
      this.demo01_index = index;
    }
  },
  
   created() {
    var t=this;
    t.ljx.get(t.serverName+'app/sort').then(response=>{
          t.eshadow=response.data.eshadow
          t.lipgloss=response.data.lipgloss
         
    }).catch(response=>{

    })
  },
};
</script>

<style>
.nav {
  margin-top: 10px;
  color: red !important;
  font-size: 20px;
  font-weight: 900;
  font-family: "Courier New", Courier, monospace;
}
.content {
  margin-top: 10px;
  color: palevioletred !important;
  font-size: 16px;
  font-weight: 900;
  font-family: "Courier New", Courier, monospace;
}
.weui-cells__title {
    margin-top: -0.23em;
    margin-bottom: 0.3em;
    padding-left: 15px;
    padding-right: 15px;
    color:black !important;
    text-align: center;
    font-size: 20px;
}
.box1 {
  height: 100px;
  position: relative;
  width: 1490px;
}
.box1-item {
  position: relative;
  width: 200px;
  height: 100px;
  background-color: #ccc;
  display: inline-block;
  margin-left: 15px;
  float: left;
  text-align: center;
  line-height: 100px;
}
.box1-item:first-child {
  margin-left: 0;
}
.picture{
  width: 100%;
  height: 100px;
  /* border-radius: 15px; */
  /* z-index: 1000 */
}
.mycontent{
   position: absolute;
   top:20px;
   left: 80px;
   height: 1.4em;
   font-size: 16px;
   color: whitesmoke;
  text-shadow: 0 1px 0 rgba(0, 0, 0, 0.5);
}
.mycontentone{
   position: absolute;
   top:41px;
   left: 70px;
   height: 1.4em;
   font-size: 16px;
   color: whitesmoke;
  text-shadow: 0 1px 0 rgba(0, 0, 0, 0.5);
}
</style>