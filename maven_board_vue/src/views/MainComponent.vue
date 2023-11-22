<template id="mainComponent">
  <section>
    <div style="background-color:#dedede; height:700px;">
      <div>
        <h1>자유게시판</h1>
      </div>
      <div style="width:650px;" align="right">
        <router-link to="/regPost">글쓰기</router-link>
      </div>
      <hr style="width: 600px">
      <div v-for="item of list" :key="item.id"> 
        <div style="width: 50px; float: left;" v-text="item.num"></div>
        <div style="width: 300px; float: left;"><router-link :to="{ name: 'DetailPost', params: {seq: item.num} }">{{item.title}}</router-link></div>
        <div style="width: 150px; float: left;" v-text="item.name"></div>
        <div style="width: 150px; float: left;" v-text="item.regdate"></div>
        <hr style="width: 600px">
      </div>
      <form id="searchForm">
        <input type="hidden" id="page" name="page" value="1">
        <select name="searchKey">
          <option value="title">제목</option>
          <option value="name">작성자</option>
        </select>  
        <input type="text" name="searchValue" value="">
        <button type="button" onclick="search()" id="searchBtn" class="btn-search"> 검색</button>
      </form>
      <div>
        <paginationComponent/>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import PaginationComponent from './layout/PaginationComponent.vue';
// import {plusCalculator} from './common.js'; //reactive 추가
export default {
  components: { PaginationComponent },
  name: 'mainComponent',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
      , list : []
    }
  },
  methods:{
    async search () {
        const res = await axios.post ("http://localhost:6005/freeBoardList",{});
        console.log(res)
        this.list = res.data.list;
    }
  },
  mounted() {
    console.log("mount 되고나서 search()함수를 탄다")
    this.search();
  }
}
</script>

<style scoped>
</style>
