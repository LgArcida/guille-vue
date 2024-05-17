<template>
  <div>
    <h1>Posts</h1>
    <AddPost v-if="isAdmin" @postAdded="fetchPosts" />
    <ul>
      <li v-for="post in posts" :key="post.id">
        <h2>{{ post.title }}</h2>
        <p>{{ post.content }}</p>
        <button v-if="isAdmin" @click="editPost(post.id)">Edit</button>
        <button v-if="isAdmin" @click="deletePost(post.id)">Delete</button>
      </li>
    </ul>
    <EditPost v-if="editingPostId" :id="editingPostId" @postUpdated="fetchPostsAndResetEdit" />
  </div>
</template>

<script>
import api from '../services/api';
import AddPost from './AddPost.vue';
import EditPost from './EditPost.vue';

export default {
  props: ['user'],
  components: {
    AddPost,
    EditPost
  },
  data() {
    return {
      posts: [],
      editingPostId: null
    };
  },
  computed: {
    isAdmin() {
      return this.user && this.user.role === 'admin';
    }
  },
  created() {
    this.fetchPosts();
  },
  methods: {
    async fetchPosts() {
      try {
        const response = await api.getPosts();
        this.posts = response.data;
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    },
    editPost(id) {
      this.editingPostId = id;
    },
    async deletePost(id) {
      try {
        await api.deletePost(id);
        this.fetchPosts();
      } catch (error) {
        console.error('Error deleting post:', error);
      }
    },
    fetchPostsAndResetEdit() {
      this.fetchPosts();
      this.editingPostId = null;
    }
  }
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 10px;
}

button {
  margin-right: 5px;
}
</style>
