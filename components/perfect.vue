<template>
  <div>

  <divider v-bind:class="a">{{ msg1 }}</divider>
  
  <h5>{{msg2}}</h5>
      <flexbox >
      <flexbox-item v-for="item in mostcollect" :key="item.pid"><router-link :to="'/detil/'+item.pid">
         <div class="flex-demo"> 
               <img :src="item.imglist" alt=""  :class="b" >
          </div></router-link>
     </flexbox-item>
    </flexbox>
  <br>
            <flexbox >
      <flexbox-item v-for="item in lowcollect" :key="item.pid"><router-link :to="'/detil/'+item.pid">
         <div class="flex-demo"> 
               <img :src="item.imglist" alt=""  :class="b" >
          </div></router-link>
     </flexbox-item>
    </flexbox>
  <br>
  <h5>{{msg3}}</h5>
 
  <br>
  <!-- 以上是人气精选部分 -->
 <div style="margin: 10px;overflow: hidden;" v-for="item in list" :key="item.pid">
   <router-link :to="'/detil/'+item.pid">
      <masker style="border-radius: 2px;">
        <div class="m-img" :style="{backgroundImage: 'url(' + item.imglist + ')'}"></div>
        <div slot="content" class="m-title">
          {{item.workname}}
          <br/>
          <span class="m-time">{{item.addtime}}</span>
        </div>
      </masker>
   </router-link>
    </div>
    
  <br><br><br>
  <myTabBar></myTabBar>
  </div>
  
</template>

<script>
import { Divider } from "vux";
import { Flexbox, FlexboxItem } from "vux";
import { Masker } from 'vux'
export default {
  name: "perfect",
  components: {
    Divider,
    Flexbox,
    FlexboxItem,
     Masker
  },
  data() {
    return {
      msg1: "精选",
      msg2: "热门推荐",
      msg3:"人气精选",
      a: "nav",
      b:'picture',
      list: [],
      mostcollect:[],
      lowcollect:[]
    };
  },
   created() {
    var t=this;
    t.ljx.get(t.serverName+'app/perfect').then(response=>{
          t.list=response.data.list
          t.mostcollect=response.data.mostcollect
          t.lowcollect=response.data.lowcollect
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
.flex-demo {
  text-align: center;
  width: 100%;
  height: 100px;
  color: #fff;
  border-radius: 4px;
  border: 1px solid gainsboro;
  background-clip: padding-box;
   border-radius: 15px
}
.picture{
  width: 100%;
  height: 100px;
  border-radius: 15px
}

.m-img {
  padding-bottom: 33%;
  display: block;
  position: relative;
  max-width: 30%;
  background-size: cover;
  background-position: center center;
  cursor: pointer;
  border-radius: 2px;
}

.m-title {
  color: #fff;
  text-align: center;
  text-shadow: 0 0 2px rgba(0, 0, 0, .5);
  font-weight: 500;
  font-size: 16px;
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  text-align: center;
  top: 50%;
  transform: translateY(-50%);
}

.m-time {
  font-size: 12px;
  padding-top: 4px;
  border-top: 1px solid #f0f0f0;
  display: inline-block;
  margin-top: 5px;
}

.vux-masker {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    border-radius: inherit;
    background-color:rgba(0, 0, 0, .2) !important;
}
</style>