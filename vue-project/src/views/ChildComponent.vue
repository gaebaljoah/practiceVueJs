<template>
  <div>
    <button type="button" @click="childFunc" ref="btn">Click</button>
    <h1>{{msg}}</h1>
  </div> 
</template>
<script>
export default {
  data(){
    return{
      msg:'자식 컴포넌트로부터 보내는 메시지'
    }
  },
  methods: {
    childFunc(){
        console.log('부모 컴포넌트에서 직접 발생시킨 이벤트');
    },
    callFromParent(){
      console.log('부모 컴포넌트에서 직접 호출한 함수');
    }
  },
  mounted(){
    this.$emit('send-message', this.msg)
  }
}
</script>