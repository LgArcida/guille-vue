<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="login">
      <div>
        <label for="username">Username</label>
        <input type="text" id="username" v-model="username" />
      </div>
      <div>
        <label for="password">Password</label>
        <input type="password" id="password" v-model="password" />
      </div>
      <button type="submit">Login</button>
    </form>
    <p v-if="error">{{ error }}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      username: '',
      password: '',
      error: null
    };
  },
  methods: {
    async login() {
      try {
        const response = await axios.get(`http://localhost:3000/users?username=${this.username}&password=${this.password}`);
        const user = response.data[0];
        if (user) {
          this.$emit('login', user);
        } else {
          this.error = 'Invalid username or password';
        }
      } catch (error) {
        console.error('Error logging in:', error);
        this.error = 'An error occurred during login';
      }
    }
  }
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
}
label {
  margin-top: 10px;
}
input {
  margin-top: 5px;
}
button {
  margin-top: 10px;
  align-self: flex-start;
}
p {
  color: red;
}
</style>

<!--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-->