<template>
	<li
		v-for="user in users"
		:key="user._id"
		class="list-user"
	>
		<div class="set-spacing">
			<img
				:src="user.avatar"
				:alt="user.avatar"
				class="avatar"
			/>
		</div>
		<div class="spacing">
			{{ user.name }}
		</div>
		<div class="spacing">
			{{  user.email }}
		</div>
		<div class="spacing">
			{{ user.createdAt }}
		</div>
		<div class="set-spacing">
			excluir / editar
		</div>
	</li>
</template>

<script>
import userRequest from '../../services/user-request';

export default {
	name: 'ListUser',
	data() {
		return {
			users: [],
		}
	},
	methods: {
		listAllPaginateUsers()  {
			userRequest.listPaginateUsers().then(res => {
				this.users = res.data
			})
		}
	},

	mounted() {
		this.listAllPaginateUsers()
	}
}
</script>
