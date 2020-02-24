<template>
<div>
<div>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="/">凍洋</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
        <li class="nav-item">
          <a class="nav-link" href="/About">關於凍洋<span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/News">最新消息</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Product">商品選購</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/FAQ">常見問題</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Contact">聯絡我們</a>
        </li>
      </ul>
    </div>
  </nav>
  </div>
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
  <router-view/>
</div>
</template>

<script>
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
