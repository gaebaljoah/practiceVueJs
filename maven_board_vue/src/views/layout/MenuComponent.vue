<template id="menuComponent">
    <ul>
      <li><router-link to="/">메인</router-link></li>
      <li><router-link to="/file">자료실</router-link></li>
    </ul>

</template>
<script>
export default {
  name: 'menuComponent',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
<style scoped>
  ul{
    list-style: none;
  }
  li{
    width: 100%;
    display:inline-block;
    text-align: left;
    padding: 5px;
  }
  li.active{
    color:blue;
  }
</style>