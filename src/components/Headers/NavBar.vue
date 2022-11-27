<template>
	<nav>
		<div @click="logout" class="logout-btn">
			<span>Logout</span>
		</div>
	</nav>
</template>

<script>
export default {
	name: 'NavBar',
	methods: {
		logout() {
			localStorage.clear()

			this.$router.push('/login')
		}
	}
}
</script>
