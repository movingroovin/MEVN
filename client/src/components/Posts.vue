<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>
      <h4>Say something</h4>
      <input type="text" v-model="text">
      <button @click="createPost">Submit</button>
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
import PostController from '../PostsController'

export default {
  name: 'Posts',
  props: {
    msg: String
  },
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
