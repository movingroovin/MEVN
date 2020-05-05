<template>
  <div>
    <div class="row">
      <div class="card mx-auto" style="width: 40rem;">
        <div class="card-body">
          <h5 class="card-title">登入</h5>
          <hr>
          <form @submit.prevent="loginUser">
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                placeholder="會員帳號（電子信箱）"
                name="email"
                id="email"
                v-model="logininfo.email"
              >
            </div>
            <div class="form-group">
              <input
                type="password"
                class="form-control"
                placeholder="密碼"
                name="password"
                id="password"
                v-model="logininfo.password"
              >
            </div>
            <input type="submit" class="btn btn-primary" value="登入">
            <hr>
            <span>還沒有帳號？&nbsp;</span>
            <router-link to="/Register" class="card-link">註冊</router-link>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      logininfo: {
        email: null,
        password: null
      }
    }
  },
  methods: {
    ...mapActions(['login']),
    loginUser(){
      this.login(this.logininfo).then(res => {
        // console.log(res)
        if (res.data.success) {
          this.$router.push('/Profile')
        }
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style scoped>
.card-title {
  text-align: center;
}
</style>