<template>
  <div id="app" align="center" style="width: 800px;">
      <header>
        <div style="width: 800px; margin: 0;">
          <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
          <title>Insert title here</title>
          <router-link to="/"><h1>Lemon Sample Web HomePage</h1></router-link>
        </div>
      </header>
      <div class="contents" style="width: 800px; margin: 0;">
        <aside>
          <div style="float: left;  width: 150px; height:700px; border: 2px; solid: #b6b8bb; background-color: #aaaaaa;">
            <menu-component></menu-component>
          </div>
        </aside>
        <section>
           <router-view></router-view> 
        </section>
      </div>
    <footer-component></footer-component>

  </div>
</template>

<script>
import MenuComponent from "@/views/layout/MenuComponent.vue";
import FooterComponent from "@/views/layout/FooterComponent.vue";

export default {
  name: 'app',
  components: {MenuComponent, FooterComponent},
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
