<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <a @click="handleClick">Go Back</a>
    </div>
    <router-view />
  </div>
</template>

<script>
import router from '@/router';
export default {
  name: 'App',
  methods: {
    handleClick: function() {
      router.back();
    },
  },
};
</script>

<style>
a {
  text-decoration: none;
  cursor: pointer;
  font-weight: bold;
  color: #2c3e50;
}
body {
  overflow-y: scroll;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
