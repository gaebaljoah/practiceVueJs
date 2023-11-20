<template>
    <h1>{{title}}</h1>
</template>
<script>
import {inject} from 'vue'; //inject 추가
export default {
  components: {},
  setup(){
    const title = inject('title1');
    //inject를 사용해서 provide에서 정의한 key로 데이터를 전달받음
    return{title};
  },
  data() {
    return {
      sampleData: ''
    };
  },
  beforeCreate() {console.log('child beforeCreate()')},
  created() {console.log('child created()')},
  beforeMount() {console.log('child beforeMount()')},
  mounted() {console.log('child mounted()')},
  beforeUpdate() {console.log('child beforeUpdate()')},
  updated() {console.log('child updated()')},
  beforeUnmount() {console.log('child beforeUnmount()')},
  unmounted() {console.log('child unmounted()')},
  methods: {}
}
</script>