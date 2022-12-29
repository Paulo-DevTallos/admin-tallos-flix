<template>
	<div class="card-dash">
		<div class="title-infos">
			<div class="card-icon">
				<font-awesome-icon :icon="['fas', `${icon}`]" />
			</div>
			<div class="card-dash-data">
				<h6>{{ description_card }}</h6>
				<span>250</span>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "DashInfo",
	props: {
		icon: {
			type: String,
			required: true,
		},
		description_card: {
			type: String,
			required: true,
		},
	},
};
</script>
