import { createStore } from "vuex"
import Services from '../api/axios-request'

export const store = createStore({
  state: {
    user: {
      email: '',
      password: '',
    },
    token: '',
  },
  mutations: {  
    authLogin(state, payload) {
      state.token = payload.access_token
      state.user = payload.user
    }
  },
  actions: {
    async handleSubmitLogin(context, user) {
      await Services.login({
        email: user.email,
        password: user.password
      }).then(res => {
        if (res.status === 200) {
          if(res.data.access_token) {
            localStorage.setItem('token', res.data.access_token)
            localStorage.setItem('email', res.data._doc.email)
            localStorage.setItem('name', res.data._doc.name)
          }
        }

        console.log(res.data)
        context.commit('authLogin', res.data)
      })
    }
  },
})