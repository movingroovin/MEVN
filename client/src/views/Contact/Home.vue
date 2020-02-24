<template>
  <div>
    <h3>歡迎聯絡</h3>
    <div>
      <h4>Say something</h4>
      <input type="text" v-model="text">
      <button type="button" class="btn btn-outline-primary" @click="createPost">Submit</button>
    </div>
    <hr>
    <div v-for="(post, index) in posts" :key="index">
      <h3>{{post.text}}</h3>
      <p>{{post.createTime}}</p>
      <button @click="deletePost(post._id)">Delete</button>
    </div>
  </div>
</template>

<script>
import PostController from '../../PostsController'

export default {
  name: 'Posts',
  data() {
    return {
      posts: [],
      error: '',
      text: ''
    }
  },
  created() {
    try {
      PostController.getPosts().then(data => {
        this.posts = data
      })
    } catch (err) {
      this.error = err.message
    }
  },
  methods: {
    async createPost() {
      await PostController.insertPost(this.text)
      this.posts = await PostController.getPosts()
    },
    async deletePost(id) {
      await PostController.deletePost(id)
      this.posts = await PostController.getPosts()
    }
  }
}
</script>

<style>

</style>