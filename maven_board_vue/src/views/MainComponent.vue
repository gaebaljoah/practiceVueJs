<template id="mainComponent">
  <section>
    <div style="background-color:#dedede; height:700px;">
      <div>
        <h1>자유게시판</h1>
      </div>
      <div style="width:650px;" align="right">
        <a href="">글쓰기</a>
      </div>
      <hr style="width: 600px">
      <template v-for="item of list" v-bind:key="item.num">
        <div style="width: 50px; float: left;" v-text="item.num"></div>
        <div style="width: 300px; float: left;"><a v-text="item.title"></a></div>
        <div style="width: 150px; float: left;" v-text="item.name"></div>
        <div style="width: 150px; float: left;" v-text="item.regdate"></div>
        <hr style="width: 600px">
      </template>
      <form id="searchForm">
        <input type="hidden" id="page" name="page" value="1">
        <select name="searchKey">
          <option value="title">제목</option>
          <option value="name">작성자</option>
        </select>

        <input type="text" name="searchValue" value="">
        <button type="button" onclick="search()" id="searchBtn" class="btn-search"> 검색</button>
      </form>
      <ul>
      </ul>
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: 'mainComponent',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
      , list : []
    }
  },
  methods:{
    async search () {
        const res = await axios.post ("http://localhost:8080/freeBoardList",{});
        console.log(res)
        this.list = res.data.list;
    }
  },
  mounted() {
    this.search();
  }
}
</script>

<style scoped>
</style>
