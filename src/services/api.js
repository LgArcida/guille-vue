import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:3000',
    withCredentials: false,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});

export default {
    getPosts() {
        return apiClient.get('/posts');
    },
    getPost(id) {
        return apiClient.get(`/posts/${id}`);
    },
    addPost(post) {
        return apiClient.post('/posts', post);
    },
    updatePost(post) {
        return apiClient.put(`/posts/${post.id}`, post);
    },
    deletePost(id) {
        return apiClient.delete(`/posts/${id}`);
    },
    getUser(username, password) {
        return apiClient.get(`/users?username=${username}&password=${password}`);
    }
};
