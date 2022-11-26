import { api } from './api'

export default {
	listPaginateUsers: () => {
		return api.get('/users')
	}
}
