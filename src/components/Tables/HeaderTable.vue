<template>
	<header>
		<ul>
			<li v-for="column in columns" :key="column">{{ column }}</li>
		</ul>
	</header>
</template>

<script>
export default {
	name: 'HeaderTable',
	props: {
		columns: {
			type: Array,
		}
	}
}
</script>
