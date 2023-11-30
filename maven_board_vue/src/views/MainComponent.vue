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
      <form id="searchForm" ref="searchForm">
        <input type="hidden" id="page" name="page" value="1">
        <select name="searchKey" v-model="searchKey">
          <option value="title">제목</option>
          <option value="name">작성자</option>
        </select>  
        <input type="text" name="searchValue" v-model="searchValue">
        <button type="button" @click="search" id="searchBtn" class="btn-search"> {{searchValue}}</button>
      </form>
      <div>
        
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
//import PaginationComponent from './layout/PaginationComponent.vue';
// import {plusCalculator} from './common.js'; //reactive 추가
export default {
  //components: { PaginationComponent },
  name: 'mainComponent',
  data () {
    return {
      list : [],
      searchKey : null,
      searchValue: null
    }
  },
  methods:{
    async search(){
      
      try { 
        const res =  await axios.get("http://localhost:6005/freeBoardList/"+this.searchKey+"/"+this.searchValue);
        this.list = res.data.list;
      } catch (error) {
        console.log(error);
      }
    }

  },
  mounted() {
    //console.log("mount 되고나서 search()함수를 탄다")
    console.log(this.$route)
    this.search();
  }
}
</script>

<style scoped>
</style>
