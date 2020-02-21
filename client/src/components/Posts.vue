<template>
<div>
  <nav class="navbar navbar-light bg-light">
    <a class="navbar-brand" href="#">Oceanice</a>
  </nav>
  <div class="row">
    <div class="col-md-12">
      <div id="carouselExampleIndicators" class="carousel slide " data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="../assets/pics/carousel1.jpg" class="d-block img-fluid" alt="...">
          </div>
          <div class="carousel-item">
            <img src="../assets/pics/carousel2.jpg" class="d-block img-fluid" alt="...">
          </div>
          <div class="carousel-item">
            <img src="../assets/pics/carousel3.jpg" class="d-block img-fluid" alt="...">
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
  </div>
  <div class="hello">
    <h1>{{ msg }}</h1>
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
.carousel { height: 100%; }
.carousel-inner, .carousel-item { height: 100%; }
.carousel-item { background-size: cover; background-position: center; }
</style>
