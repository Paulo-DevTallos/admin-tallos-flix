<template>
	<button class="btn" @click="$emit('action')">
		{{ title_btn }}
	</button>
</template>

<script>
export default {
	name: 'MainButton',
	emits: ['action'],
	props: {
		title_btn: { type: String },
	},
}
</script>
