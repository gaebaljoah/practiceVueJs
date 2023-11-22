<template>
  <div>
    <!-- 페이지 정보 표시 -->
    <div>
      <p>Page: {{ page }}</p>
      <p>Row Count: {{ rowCnt }}</p>
      <p>Total Count: {{ totalCnt }}</p>
    </div>
    <!-- 이전 페이지 버튼 -->
    <button @click="prevPage" :disabled="page === 1">Previous Page</button>

    <!-- 페이지 번호 표시 -->
    <div v-for="pageNumber in visiblePageNumbers" :key="pageNumber">
      <button @click="goToPage(pageNumber)">{{ pageNumber }}</button>
    </div>

    <!-- 다음 페이지 버튼 -->
    <button @click="nextPage" :disabled="page === lastPage">Next Page</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      page: 1,
      rowCnt: 10,
      totalCnt: 1,
      lastPage: 1,
      // 추가적으로 필요한 데이터가 있다면 여기에 추가
    };
  },
  computed: {
    // 현재 페이지를 기준으로 표시할 페이지 번호 목록 계산
    visiblePageNumbers() {
      const blockStart = Math.max(1, this.page - Math.floor(this.blockCnt / 2));
      const blockEnd = Math.min(this.lastPage, blockStart + this.blockCnt - 1);
      return Array.from({ length: blockEnd - blockStart + 1 }, (_, index) => blockStart + index);
    },
  },
  methods: {
    // 이전 페이지로 이동
    prevPage() {
      if (this.page > 1) {
        this.page--;
      }
    },
    // 다음 페이지로 이동
    nextPage() {
      if (this.page < this.lastPage) {
        this.page++;
      }
    },
    // 특정 페이지로 이동
    goToPage(pageNumber) {
      if (pageNumber >= 1 && pageNumber <= this.lastPage) {
        this.page = pageNumber;
      }
    },
  },
};
</script>

<style scoped>
/* 스타일링이 필요한 경우 여기에 추가 */
</style>