<template>
	<li>
		<div class="list-user">
			<div class="table-list">
				<span></span>
			</div>
			<div class="table-list">
				<p>Paulo Sergio</p>
			</div>
			<div class="table-list">
				<p>pauloserg861@gmail.com</p>
			</div>
			<div class="table-list">
				<p>25/12/2022</p>
			</div>
			<div class="table-list">
				<p>Excluir</p>
				<p>Editar</p>
			</div>
		</div>
	</li>
</template>

<script>
export default {
	name: "ListUser",
};
</script>

<style scoped lang="scss">
.list-user {
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;

	.table-list {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		width: 100%;
		padding: 5px 15px;

		&:first-child {
			width: 80%;
		}

		span {
			background: gray;
			width: 50px;
			height: 50px;
			border-radius: 100%;
		}
	}
}
</style>
<!--<template>
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
				console.log(res.data)
			})
		}
	},

	mounted() {
		this.listAllPaginateUsers()
	}
}
</script>-->
