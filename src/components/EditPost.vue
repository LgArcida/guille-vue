<template>
  <div v-if="post">
    <h2>Edit Post</h2>
    <form @submit.prevent="updatePost">
      <div>
        <label for="title">Title</label>
        <input type="text" id="title" v-model="post.title" />
      </div>
      <div>
        <label for="content">Content</label>
        <textarea id="content" v-model="post.content"></textarea>
      </div>
      <button type="submit">Update Post</button>
    </form>
  </div>
</template>

<script>
import api from '../services/api';

export default {
  props: ['id'],
  data() {
    return {
      post: null
    };
  },
  async created() {
    try {
      const response = await api.getPost(this.id);
      this.post = response.data;
    } catch (error) {
      console.error('Error fetching post:', error);
    }
  },
  methods: {
    async updatePost() {
      try {
        await api.updatePost(this.post);
        this.$emit('postUpdated');
      } catch (error) {
        console.error('Error updating post:', error);
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
