<template>
    <CompositionAPIInject />
</template>
<script>
import { provide } from 'vue'; //provide 추가
import CompositionAPIInject from './CompositionAPIInject'
export default {
  components: {CompositionAPIInject},
  data() {
    return {
      sampleData: ''
    };
  },
  setup(){
    console.log("parent setup()");
    provide('title1','Vue.js 프로젝트'); //provide 함수를 통해서 전달할 키(key), 값(value) 설정
  },          
  beforeCreate() {console.log('parent beforeCreate()')},
  created() {console.log('parent created()')},
  beforeMount() {console.log('parent beforeMount()')},
  mounted() {console.log('parent mounted()')},
  beforeUpdate() {console.log('parent beforeUpdate()')},
  updated() {console.log('parent updated()')},
  beforeUnmount() {console.log('parent beforeUnmount()')},
  unmounted() {console.log('parent unmounted()')},
  methods: {}
}
</script>