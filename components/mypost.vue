<template>
<div>
    <x-header>我的作品</x-header>

    <!-- <form-preview v-for="item in list" :header-label="msg"  :header-value="item.addtime" :body-items="list" :footer-buttons="buttons2" name="删除"></form-preview> -->
    <table border="1px grey solid">
      <tr>
      
      <th>时间</th>
      <th>名称</th>
      <th>描述</th>
      
      </tr>

      <tr v-for="li in list" >
      <td>{{li.addtime}}</td>
      <td>{{li.workname}}</td>
      <td>{{li.description}}</td>
      </tr>
      
    </table>
    <br>
    
</div>
</template>


<script>
import {
  XHeader,
  Actionsheet,
  TransferDom,
  ButtonTab,
  ButtonTabItem,
  FormPreview
} from "vux";

export default {
  components: {
    XHeader,
    Actionsheet,
    ButtonTab,
    ButtonTabItem,
    TransferDom,
    FormPreview
  },
  data() {
    return {
      msg: "发布时间",
      // time:"item.addtime.toLocaleString()",
      buttons2: [
        {
          style: "primary",
          text: "删除",
          onButtonClick: name => {
            alert(`点击 ${name}`);
          }
        }
      ],
      list: []
    };
  },
  created() {
    var t = this;
    this.a
      .get(t.servername + "app/user", {
        params: { uid: localStorage.getItem("uid") }
      })
      .then(response => {
        let d = [];
        for(var i=0;i<response.data.r.length ;i++){
          response.data.r[i].addtime=new Date(response.data.r[i].addtime).toLocaleString();
        }
        t.list=response.data.r;
      })
      .catch(response => {
        console.log("err");
      });
  },
  methods: {}
};
</script>
<style>
</style>
