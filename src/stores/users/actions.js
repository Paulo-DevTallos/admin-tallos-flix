import userService from '../../services/user-request'
import jwtDecode from 'jwt-decode'

export default {

	async login(context, data) {
		console.log(data)
		await userService.login(data).then(res => {
			console.log(res.data);
			const validToken = res.data.access_token

			if (validToken) {
				localStorage.setItem('token', validToken)

				const decode = jwtDecode(validToken)

				context.commit('LOGIN', decode)

				location.replace('/admin/overview')
			}
		})
	}
}
