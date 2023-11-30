<template>
    <div style="background-color:#dedede; height:700px;">
        <div style="width:650px;" align="right">
        <router-link to="/home">리스트로</router-link>
        </div>
        <div>작성자 : <input type="text" style="width:300px;" v-model="data.name" readonly="true"/></div>
        <div>제목 : <input type="text" style="width:300px;" v-model="data.title"/></div>
        <div>내용 : <textarea style="width:300px; height:400px;" v-model="data.content"/></div>
        <div style="width:650px;" align="right">
          <button type="button" @click="modPost">수정</button>
          <button type="button" @click="delPost">삭제</button>
        </div>
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
    console.log("mount");
    this.getPost();
  },
  updated() {console.log('updated()')},
  methods: {

    async getPost () {
        const res = await axios.get("http://localhost:6005/getOnePost/"+this.$route.params.seq,{}); //라우트를 통해 파라미터를 가져옴 
        console.log(res);
        this.data = res.data;
    },

    async modPost () {

        const modData = {
          "num" : this.data.num,
          "title" : this.data.title,
          "content" : this.data.content
        }
        console.log(modData);
        const res = await axios.put("http://localhost:6005/updateFreeBoard.ino",modData);
        console.log(res);
        if (res.status == 200) {
          alert("수정이 완료되었습니다.");
          this.getPost();
        }
    },

    async delPost () {
      try {
        var confirmAction = confirm("삭제하시겠습니까?")
      
        if (confirmAction==true) {
        const res = await axios.delete("http://localhost:6005/deleteFreeBoard.ino/"+this.data.num);
        if (res.status == 200) {
          alert("삭제가 완료되었습니다.");
          this.$router.push("/");  
        }
        }else{
          alert("작업을 취소했습니다.");
         return;
        }
      }catch (error) {
        console.log(error);
      }
      
        
    }
  }
}
</script>