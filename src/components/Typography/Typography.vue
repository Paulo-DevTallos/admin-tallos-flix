<template>
	<p>{{ typography_text }}</p>
</template>

<script>
export default {
	name: 'Typography',
	props: {
		typography_text: { type: String },
	},
}
</script>
