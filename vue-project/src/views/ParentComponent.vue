<template>
  <div>
    <ChildComponent @send-message="sendMessage" ref="child_component" />
    <button type="button" @click="changeChildData">Change Child Data</button>
  </div>  
</template>
<script>
import ChildComponent from './ChildComponent.vue'
export default {
  components: {ChildComponent},
  mounted() {
    this.$refs.child_component.$refs.btn.click();
    this.$refs.child_component.callFromParent(); //부모 컴포넌트에서는 자식 컴포넌트를 $refs를 사용하여 접근하게 되면 자식 컴포넌트 내에 정의된 모든 함수를 호출할 수 있다.
  },
  methods: {
    sendMessage(data){//부모 컴포넌트의 함수 부분 @send-message="sendMessage"
      console.log(data)
    },
    changeChildData() {
      this.$refs.child_component.msg='부모 컴포넌트가 변경한 데이터'
    }
  }
}
</script>