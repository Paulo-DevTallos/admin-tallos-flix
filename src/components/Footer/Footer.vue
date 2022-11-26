<template>
	<footer class="footer">
		Equipe de desenvolvimento trainee Tallos io &copy; {{ year }}
	</footer>
</template>

<script>
export default {
	name: 'Footer',
	data() {
		return {
			year: '',
		}
	},

	mounted() {
		const currentDate = new Date()
		this.year = currentDate.getFullYear().toLocaleString()
	}
}
</script>
