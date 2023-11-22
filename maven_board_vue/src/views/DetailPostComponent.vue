<template>
    <div style="background-color:#dedede; height:700px;">
        <div style="width:650px;" align="right">
        <router-link to="/home">리스트로</router-link>
        </div>
        <div>작성자 : <input type="text" style="width:300px;" v-model="data.name"/></div>
        <div>제목 : <input type="text" style="width:300px;" v-model="data.title"/></div>
        <div>내용 : <textarea style="width:300px; height:400px;" v-model="data.content"/></div>
    </div>
</template>
<script> 
import axios from "axios";
export default {
  components: {},
  data() {
    return {
      data: {}
    };
  },
  mounted() {
    this.getPost();
  },
  updated() {console.log('updated()')},
  methods: {
    async getPost () {
        const res = await axios.get ("http://localhost:6005/getOnePost?seq="+this.$route.params.seq,{}); //라우트를 통해 파라미터를 가져옴 
        console.log(res)
        this.data = res.data;
    }
  }
}
</script>