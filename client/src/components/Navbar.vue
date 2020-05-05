<template>
  <div>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="/">凍洋</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
        <li class="nav-item">
          <router-link to="/About" class="nav-link">關於凍洋<span class="sr-only">(current)</span></router-link>
        </li>
        <li class="nav-item">
          <router-link to="/News" class="nav-link">最新消息</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/Product" class="nav-link">商品選購</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/FAQ" class="nav-link">常見問題</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/Contact" class="nav-link">聯絡我們</router-link>
        </li>
      </ul>
      <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
        <li class="nav-item" v-if="!isLoggedIn">
          <router-link to="/Register" class="nav-link">註冊</router-link>
        </li>
        <li class="nav-item" v-if="!isLoggedIn">
          <router-link to="/Login" class="nav-link">登入</router-link>
        </li>
        <li class="nav-item" v-if="isLoggedIn">
          <router-link to="/Profile" class="nav-link">會員資料</router-link>
        </li>
        <li class="nav-item" v-if="isLoggedIn">
          <a to="/" class="nav-link" @click.prevent="logoutUser">登出</a>
        </li>
      </ul>
    </div>
  </nav>
  </div>
</template>

<script>
import { mapGetters, mapActions} from 'vuex'
export default {
  computed: {
    ...mapGetters(['isLoggedIn'])
  },
  methods: {
    ...mapActions(['logout']),
    logoutUser() {
      this.logout()
    }
  }
}
</script>

<style>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
</style>