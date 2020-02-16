<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div v-for="(post, index) in posts" :key="index">
      <h3>{{post.text}}</h3>
      <p>{{post.createTime}}</p>
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
