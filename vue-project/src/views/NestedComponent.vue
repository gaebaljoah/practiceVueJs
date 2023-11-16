<template>
    <div>
        <PageTitle title="부모 컴포넌트에서 자식 컴포넌트로 데이터 전달"/> 
        <!-- 부모 컴포넌트에서 자식 컴포넌트로 title 데이터가 전송되며 전송된 데이터를 다시 가져와 화면에 렌더링한다. -->
    </div>
</template>
<script>
import PageTitle from '../components/PageTitle.vue'; //컴포넌트 import
export default {
  components: {PageTitle}, //현재 컴포넌트에서 사용할 컴포넌트 등록
  data() {
    return {
      sampleData: ''
    };
  },
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  beforeUnmount() {},
  unmounted() {},
  methods: {}
}
</script>