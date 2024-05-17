<template>
  <div>
    <h2>Add New Post</h2>
    <form @submit.prevent="addPost">
      <div>
        <label for="title">Title</label>
        <input type="text" id="title" v-model="title" />
      </div>
      <div>
        <label for="content">Content</label>
        <textarea id="content" v-model="content"></textarea>
      </div>
      <button type="submit">Add Post</button>
    </form>
  </div>
</template>

<script>
import api from '../services/api';

export default {
  data() {
    return {
      title: '',
      content: ''
    };
  },
  methods: {
    async addPost() {
      const newPost = {
        title: this.title,
        content: this.content
      };
      try {
        await api.addPost(newPost);
        this.$emit('postAdded');
        this.title = '';
        this.content = '';
      } catch (error) {
        console.error('Error adding post:', error);
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
input, textarea {
  margin-top: 5px;
}
button {
  margin-top: 10px;
  align-self: flex-start;
}
</style>
