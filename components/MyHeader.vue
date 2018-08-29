<template>
  <div >
  <x-header :left-options="{showBack: false}">{{comtitle}}</x-header>

    
  </div>
</template>

<script>
import { XHeader} from 'vux'

export default {
  name: "myHeader",
  props:["comtitle"],
  components: {
    XHeader
  },
  data() {
    return {
      // msg: 'Welcome to Your Vue.js App'
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >

</style>
