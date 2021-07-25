<template>
  <div id="nav">
    <router-link to="/cart">Mon panier</router-link>
  </div>
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

#nav {
  padding: 30px;
  text-align: right;
}

#nav a {
  font-weight: bold;
  color: white;
}

#nav a.router-link-exact-active {
  color: white;
  background-color: #42b983;
}
</style>
