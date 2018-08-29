<template>
<div>
    <x-header>登录账户</x-header>
    <div :model="ruleForm">  
      <group title="账号">
         <x-input  type="text"  placeholder="请输入账号"  v-model="ruleForm.username" is-type="china-name"></x-input>
      </group>
      <group title="密码">
         <x-input  type="password" placeholder="请输入密码" v-model="ruleForm.passwd" ></x-input>
      </group>
      <div style="padding:15px;">
         <x-button  @click.native="mylogin" type="primary">登录</x-button>
      </div>
    </div>
    
</div>
</template>


<script>
import {
  XHeader,
  Actionsheet,
  TransferDom,
  ButtonTab,
  ButtonTabItem
} from "vux";
import { XInput, Group, XButton, Cell } from "vux";

export default {
  components: {
    XHeader,
    Actionsheet,
    ButtonTab,
    ButtonTabItem,
    XInput,
    XButton,
    Group,
    Cell
  },
  data() {
    return {
      ruleForm: {
        username: "",
        passwd: ""
      }
    };
  },
  methods: {
    mylogin() {
      var that=this;
      that.a.post(that.servername+"personal/login", that.q.stringify(that.ruleForm)
          ).then(response => {
          if (response.data.r == "pw_err") {
            alert("密码错误");
          } else if (response.data.r == "not_exist") {
            alert("用户不存在");
          } else if (response.data.r == "ok") {
            console.log("登录成功");
            // window.location.href = "/my"; 
            that.$router.push({path:'/my'});
          } else {
            console.log("未知错误，请重新刷新操作");
          }
        })
        .catch(response => {
          console.log("error...");
        });
    }
  }
};
</script>
<style>
</style>
