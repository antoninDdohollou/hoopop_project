<template>
  <img id="logo" src="./assets/logo.png"/>
  <div id="nav">
    <router-link id="cart" to="/cart">Mon panier {{$store.state.products.length}}</router-link> 
  </div>
  
  <router-view/>
</template>



<style>
body {
    background: #2c3e50;
    min-height: 100vh
}

#logo {
  text-align: left;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  margin-right: 0;
  text-align: right;
}

#nav a {
  font-weight: bold;
}

#cart {
  color: #42b983;
  border-radius: 20px;
  padding: 10px;
  background-color: white;
}


#nav a.router-link-exact-active {
  color: white;
  background-color: #42b983;
}
</style>
