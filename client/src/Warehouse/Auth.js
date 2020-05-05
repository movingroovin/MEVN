import axios from 'axios'
import router from '../router'

const state = {
  token: localStorage.getItem('token') || '',
  user: {},
  status: '',
  error: null
}

const getters = {
  isLoggedIn: state => !!state.token, // function(state) { if token != '' then True else False }
  user: state => state.user,
  authState: state => state.status,
  error: state => state.error
}

// call api here
// actions will trigger mutations (commit) to alter state
const actions = {
  // Login Action
  async login({ commit }, user) {
    commit('auth_request')
    try {
      let res = await axios.post('/api/users/login', user)
      if (res.data.success) {
        const token = res.data.token
        const user = res.data.user
        // Store token into LocalStorage (should store in cookie and set httpOnly/ secure)
        localStorage.setItem('token', token)
        // Set request header
        axios.defaults.headers.common['Authorization'] = token
        commit('auth_success', token , user)
      }
      return res
    } catch {
      commit('auth_error')
    }
  },
  // Register Action
  async register({ commit }, userData) {
    try {
      commit('register_request')
      let res = await axios.post('/api/users/register', userData)
      if (res.data.success !== undefined ) {
        commit('register_success')
      }
      return res
    } catch {
      commit('register_error')
    }
  },
  // After login
  async getProfile({ commit }) {
    commit('profile_request')
    let res = await axios.get('/api/users/profile')
    commit('user_profile', res.data.user)
    return res
  },
  // logout (delete token)
  async logout({ commit }) {
    await localStorage.removeItem('token')
    commit('logout')
    delete axios.defaults.headers.common['Authorization']
    router.push('/')
    return
  }
}

const mutations = {
  // login
  auth_request(state) {
    state.error = null,
    state.status = 'loading'
  },
  auth_success(state, token, user) {
    state.token = token,
    state.user = user,
    state.error = null,
    state.status = 'success'
  },
  auth_error(state, err) {
    state.error = err.data.msg
  },
  // register
  register_request(state) {
    state.error = null,
    state.status = 'loading'
  },
  register_success(state) {
    state.error = null,
    state.status = 'success'
  },
  register_error(state, err) {
    state.error = err.data.msg
  },
  profile_request(state) {
    state.status = 'loading'
  },
  user_profile(state, user) {
      state.user = user
  },
  logout(state) {
      state.error = null
      state.status = ''
      state.token = ''
      state.user = ''
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}