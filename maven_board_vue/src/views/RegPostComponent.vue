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
    // regPost(){

    //   const freeBoardDtoJson = {
    //     'name' : this.name,
    //     'title' : this.title,
    //     'content' : this.content,
    //   }
    //   const freeBoardDto = JSON.stringify(freeBoardDtoJson)   
    //   console.log(freeBoardDto);
    //   //axios는 'data'를 query로 변환해주지 않는다고 한다. 'data'란 개발자 도구에서 봤던 dictionary를 말한다. 
    //   //axios에서 매개변수로 변환해주지 않으니 스프링에서는 freeBoardDtoJson라는 매개변수를 못받았던 것이다!
    //   //axios.post('http://localhost:6005/insertFreeBoard.ino',null,{params : freeBoardDtoJson}) //매개변수에 일치 시킬 거면 이렇게 사용,
    //   //아래는 requestBody 요청 본문에 데이터를 삽입하는 방법
    //   axios.post('http://localhost:6005/insertFreeBoard.ino',freeBoardDtoJson)
    //   .then(function(response){
    //     if(response.status==200){
    //       alert("게시글 작성이 완료되었습니다");
    //       console.log(response);
    //       this.$router.push({ name: 'Home' });
    //       }
    //     }
    //   )
    // }

    async regPost(){
      try {
        const freeBoardDtoJson = {
        'name' : this.name,
        'title' : this.title,
        'content' : this.content,
        }
        //axios는 'data'를 query로 변환해주지 않는다고 한다. 'data'란 개발자 도구에서 봤던 dictionary를 말한다. 
        //axios에서 매개변수로 변환해주지 않으니 스프링에서는 freeBoardDtoJson라는 매개변수를 못받았던 것이다!
        //axios.post('http://localhost:6005/insertFreeBoard.ino',null,{params : freeBoardDtoJson}) //매개변수에 일치 시킬 거면 이렇게 사용,
        //아래는 requestBody 요청 본문에 데이터를 삽입하는 방법
        const res = await axios.post('http://localhost:6005/insertFreeBoard.ino',freeBoardDtoJson)
        if(res.status==200){
          alert("게시글 작성이 완료되었습니다");
          console.log(res);
          this.$router.push({ name: 'Home' });
        }
      }catch (error) {
        console.log(error);
           
      }
    }
  }
}
</script>