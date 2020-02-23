<template>
<div>
  <nav class="navbar navbar-expand-lg navbar-light navbar-transparent">
    <a class="navbar-brand" href="#">凍洋</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon">
      <i class="fas fa-bars" style="color:#fff; font-size:28px;"></i></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
        <li class="nav-item">
          <a class="nav-link" href="#">關於凍洋<span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">最新消息</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">商品選購</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">常見問題</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">聯絡我們</a>
        </li>
      </ul>
    </div>
  </nav>
  <div class="row">
    <div class="col-lg-12">
      <div id="carouselIndicators" class="carousel slide " data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselIndicators" data-slide-to="1"></li>
          <li data-target="#carouselIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="../assets/pics/carousel1.jpg" class="d-block img-fluid" alt="...">
            <div class="carousel-caption">
              <h1>
                <span class="d-none d-sm-block">極凍，大海的饗宴</span>
              </h1>
              <h3>
                <span class="d-block d-sm-none">極凍，大海的饗宴</span>
              </h3>
              <p class="d-none d-lg-block">凍洋致力於將海中最極致的鮮美原封不動地呈現在您的餐桌上。漁產從離開海面起，便進入極低溫環境運作。從加工，封裝，到運送。完整地將大海的鮮美冰封保存，直到您的餐桌前重現。</p>
              <p class="d-none d-sm-block">不僅急凍，更是極凍。</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="../assets/pics/carousel2.jpg" class="d-block img-fluid" alt="...">
            <div class="carousel-caption">
              <h1>
                <span class="d-none d-sm-block">極凍，大海的饗宴</span>
              </h1>
              <h3>
                <span class="d-block d-sm-none">極凍，大海的饗宴</span>
              </h3>
              <p class="d-none d-lg-block">凍洋致力於將海中最極致的鮮美原封不動地呈現在您的餐桌上。漁產從離開海面起，便進入極低溫環境運作。從加工，封裝，到運送。完整地將大海的鮮美冰封保存，直到您的餐桌前重現。</p>
              <p class="d-none d-sm-block">不僅急凍，更是極凍。</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="../assets/pics/carousel3.jpg" class="d-block img-fluid" alt="...">
            <div class="carousel-caption">
              <h1>
                <span class="d-none d-sm-block">極凍，大海的饗宴</span>
              </h1>
              <h3>
                <span class="d-block d-sm-none">極凍，大海的饗宴</span>
              </h3>
              <p class="d-none d-lg-block">凍洋致力於將海中最極致的鮮美原封不動地呈現在您的餐桌上。漁產從離開海面起，便進入極低溫環境運作。從加工，封裝，到運送。完整地將大海的鮮美冰封保存，直到您的餐桌前重現。</p>
              <p class="d-none d-sm-block">不僅急凍，更是極凍。</p>
            </div>
          </div>
        </div>
        <a class="carousel-control-prev d-none d-sm-flex" href="#carouselIndicators" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next d-none d-sm-flex" href="#carouselIndicators" role="button" data-slide="next">
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
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
.navbar {
  position: absolute;
  z-index: 10;
  width:100%;
}
.navbar-brand {
  color: aliceblue;
}
.navbar-nav .nav-item .nav-link {
  color: azure;
}
.carousel {
  top: 0;
  height: 80%;
}
.carousel-inner {
  height: 100%;
}
.carousel-item {
  height: 100%;
  background-size: cover;
  background-position: center;
}
.carousel-item img {
  width: 100%;
}
.carousel-caption {
  height: 57%;
}
</style>
