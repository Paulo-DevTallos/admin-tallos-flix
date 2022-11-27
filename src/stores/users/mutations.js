export default {
  LOGIN(state, payload) {
		console.log(state, payload)
    state.userName = payload.name
    state.userEmail = payload.email
    state.userId =  payload.sub
    state.userAvatar = payload.avatar
  }
}
