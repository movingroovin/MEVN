<template>
  <div>
    <div class="row">
      <div class="card mx-auto" style="width: 40rem;">
        <div class="card-body">
          <h5 class="card-title">註冊</h5>
          <hr>
          <form @submit.prevent="registerUser">
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                placeholder="會員帳號（電子信箱）"
                name="email"
                id="email"
                v-model="userinfo.email">
            </div>
            <div class="form-group">
              <input
                type="password"
                class="form-control"
                placeholder="密碼"
                name="password"
                id="password"
                v-model="userinfo.password">
            </div>
            <div class="form-group">
              <input
                type="password"
                class="form-control"
                placeholder="確認密碼"
                name="confirm_password"
                id="confirm_password"
                v-model="userinfo.confirm_password">
            </div>
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                placeholder="姓名"
                name="name"
                id="name"
                v-model="userinfo.name">
            </div>
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                placeholder="性別"
                name="gender"
                id="gender"
                v-model="userinfo.gender">
            </div>
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                placeholder="出生日期"
                name="bday"
                id="bday"
                v-model="userinfo.bday">
            </div>
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                placeholder="聯絡電話"
                name="phone"
                id="phone"
                v-model="userinfo.phone">
            </div>
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                placeholder="手機"
                name="mobilephone"
                id="mobilephone"
                v-model="userinfo.mobilephone">
            </div>
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                placeholder="地址"
                name="address"
                id="address"
                v-model="userinfo.address">
            </div>
            <button class="btn btn-primary" style="width: 100%">確定註冊</button>
            <hr>
            <span>已經有帳號了？&nbsp;</span>
            <router-link to="/Login" class="card-link">登入</router-link>
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
      userinfo: {
        email: null,
        password: null,
        confirm_password: null,
        name: null,
        bday: null,
        phone: null,
        mobilephone: null,
        address: null
      }
    }
  },
  methods: {
    ...mapActions(['register']),
    registerUser() {
      this.register(this.userinfo).then(res => {
        if(res.data.success) {
          this.$router.push('Login')
        }
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