<template>
  <div>
    <!-- 头部文字 -->
    <my-header comtitle="首页"></my-header>
    <swiper auto height="30px" direction="vertical" :interval=2000 class="text-scroll" :show-dots="false">
      <swiper-item><p>世界级妆容大赏 本月初举行 你买票了吗</p></swiper-item>
      <swiper-item><p>每一只丑小鸭都隐藏着白天鹅的外表</p></swiper-item>
      <swiper-item><p>姨妈色唇釉 你get了吗  分分钟气场十足</p></swiper-item>
      <swiper-item><p>早秋搭配 今冬依然是贝雷帽趋势呢</p></swiper-item>
      <swiper-item><p>面部妆容，最吸引异性的部位是眼睛哦</p></swiper-item>
      <swiper-item><p>秋冬干燥 在化妆的时候一定要做好面部补水</p></swiper-item>
    </swiper>
    <p class="p_1">&nbsp;&nbsp;Dazzling</p>
    <p class="p_2">&nbsp;&nbsp;&nbsp;要美，就上美美哒;美美哒，让你发现不一样的自己！</p>

    <group-title>Welcome to a page for beauty bloggers,Let you discover a different self</group-title>
    <divider>打开新视界</divider><br>
    <swiper :list="demo03_list" auto style="width:90%;margin:0 auto;" height="180px" dots-class="custom-bottom" dots-position="center"></swiper>
    <br>
    <divider>相关介绍</divider>
    <card style="padding:20px">
      <img slot="header" src="../assets/sy03.jpg" style="width:100%;display:block;">
      <div slot="content" class="card-padding">
        <p style="color:#999;font-size:12px;">2018年8月28日</p>
        <p style="font-size:14px;line-height:1.2;">{{carddescription}}</p>
      </div> 
    </card>

    <div style="text-align:center;margin-top:15px;">
      <divider>关注微信有惊喜</divider>
      <img src="../assets/mine.png" width="120px" height="120px" />
      <!-- <qrcode value="http://kangruoman:81/image/mine.png" type="img"></qrcode> -->
    </div><br><br>
    <div class="mydiv">
      <span>版权&copy;归DAZZLING项目组所有</span><br>
      <a href="#">成都市互联网举报中心</a><br>
      <span>2018蓉公安备301010300000888888</span><br>
      <span>|违法不良信息举报电话：028-61303585</span>
    </div>
    
    
    
    <br><br><br>
    <!-- 底部导航 -->
    <my-tab-bar></my-tab-bar>

  </div>
</template>

<script>
import {
  Qrcode,
  Swiper,
  GroupTitle,
  SwiperItem,
  XButton,
  Divider,
  Card
} from "vux";

const imgList = [
  require("../assets/mylunbo1.jpg"),
  require("../assets/mylunbo2.jpg"),
  require("../assets/mylunbo3.jpg"),
  require("../assets/mylunbo4.jpg")
];

const demoList = imgList.map((one, index) => ({
  url: "javascript:",
  img: one
}));

export default {
  name: "Index",
  components: {
    Swiper,
    SwiperItem,
    GroupTitle,
    XButton,
    Divider,
    Qrcode,
    Card
  },
  methods: {},
  data() {
    return {
      demo03_list: demoList,
      carddescription:
        "随着网络直播的盛行，很多美妆博主都展示了自己收纳盒的精美，一个好的收纳盒会让你的化妆平不再杂乱无章，这对展示者，或观看者而言都是赏心悦目的。"
    };
  }
};
</script>

<style>
.p_1 {
  font-size: 20px;
  color: brown;
  font-weight: 900;
}
.p_2 {
  font-size: 14px;
  color: brown;
  font-weight: 700;
}
.text-scroll {
  border: 1px solid #ddd;
  border-left: none;
  border-right: none;
}
.text-scroll p {
  font-size: 12px;
  text-align: center;
  line-height: 30px;
}
.card-padding {
  padding: 15px;
}
.mydiv{
  text-align: center;
  color: gray;
  font-size: 12px;
}
</style>
