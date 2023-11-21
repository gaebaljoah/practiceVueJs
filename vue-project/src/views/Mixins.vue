<template></template>
<script>
import ApiMixin from '../mixins.js';
export default {
  mixins:[ApiMixin], //사용할 믹스인 파일을 배열로 등록
  components: {},
  data() {
    return {
      productList: []
    };
  },
  beforeCreate() {console.log('beforeCreate()')},
  created() {console.log('created()')},
  beforeMount() {console.log('beforeMount()')},
  async mounted() {
    console.log('mounted() : ' + this.productList);
    this.productList = await this.$api("https://417160f4-61a4-4bc4-a5d1-ac13033840a1.mock.pstmn.io/list","get");
  },
  beforeUpdate() {console.log('beforeUpdate()')},
  updated() {console.log('updated()')},
  beforeUnmount() {console.log('beforeUnmount()')},
  unmounted() {console.log('unmounted()')},
  methods: {}
}
</script>