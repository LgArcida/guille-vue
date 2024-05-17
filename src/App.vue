<template>
  <div id="app">
    <header>
      <h1>My Vue App</h1>
      <button v-if="user" @click="logout">Logout</button>
    </header>
    <main>
      <Login v-if="!user" @login="setUser" />
      <HelloWorld v-else-if="user.role === 'admin'" :user="user" />
      <p v-else>Access Denied</p>
    </main>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import Login from './components/Login.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    Login
  },
  data() {
    return {
      user: null
    };
  },
  methods: {
    setUser(user) {
      this.user = user;
    },
    logout() {
      this.user = null;
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

header {
  background-color: #42b983;
  padding: 20px;
  color: white;
}

main {
  padding: 20px;
}

button {
  margin-left: 20px;
}
</style>
