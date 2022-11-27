import { api } from './api'

export default {
	login: (data) => {
		return api.post('/login', data)
	},
	listPaginateUsers: () => {
		return api.get('/users')
	}
}
