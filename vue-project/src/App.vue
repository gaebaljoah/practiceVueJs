<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/databinding">Data Binding</router-link> |
    <router-link to="/databindinglist2">Data Binding List</router-link> |
    <router-link to="/nestedcomponent">nestedcomponent</router-link> |
    <router-link to="/parentcomponent">parentcomponent</router-link> |
    <router-link to="/calculatorComponent">calculator</router-link> |
    <router-link to="/compositionAPI">compositionAPI</router-link> |
    <router-link to="/compositionAPI2">compositionAPI2</router-link> |
    <router-link to="/compositionAPI3">compositionAPI3</router-link> |
    <router-link to="/compositionAPI4">compositionAPI4</router-link> |
    <router-link to="/compositionAPIProvide">compositionAPIProvide</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
