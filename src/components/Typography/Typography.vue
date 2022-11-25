<template>
	<div>
		{{ text_description }}
	</div>
</template>

<script>
export default {
	name: 'Typography',
	props: {
		text_description: { type: String },
	},
}
</script>
