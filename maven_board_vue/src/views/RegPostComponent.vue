<template>
    <div style="background-color:#dedede; height:700px;"> 
        <h1>게시글 작성</h1>
        <div>성함 : <input type="text" v-model="name" style="width: 300px;" placeholder="성함을 입력해주세요."/></div>
        <div>제목 : <input type="text" v-model="title" style="width: 300px;" placeholder="제목을 입력해주세요."/></div>
        <div>내용 : <textarea v-model="content" style="width: 300px; height:200px;" placeholder="내용을 입력해주세요."></textarea></div>
        <div><button @click="regPost" type="button">저장</button></div>
    </div>
</template>
<script>
import axios from 'axios' ;
export default {
  components: {},
  data() {
    return {
      name: '',
      title: '',
      content: ''
    };
  },
  setup(){

  },
  methods: {
    regPost(){

      const freeBoardDtoJson = {
        'name' : this.name,
        'title' : this.title,
        'content' : this.content,
      }
      const freeBoardDto = JSON.stringify(freeBoardDtoJson)   
      console.log(freeBoardDto);

      axios.post('http://localhost:6005/insertFreeBoard.ino',null,{params : freeBoardDtoJson})
      .then(function(response){
        if(response.status==200){
          console.log(response);
          }
        }
      )



      // axios.post("http://localhost:6005/insertFreeBoard.ino",JSON.stringify(freeBoardDto))
      // .then((res) => {
      //   console.log("data..?"+res.data); // 서버에서 받은 데이터
      //   console.log("status..?"+res.status); // HTTP 상태 코드
      //   console.log("statusText..?"+res.statusText); // HTTP 상태 메시지
      //   console.log("headers..?"+res.headers); // 응답 헤더
      //   console.log("config..?"+res.config); // Axios 요청에 사용된 설정 객체
      // });
    }
  }
}
</script>