<template>
	<main>
		<div class="card-dash-container">
			<DashInfo :icon="'users'" />
			<DashInfo :icon="'video'" />
			<DashInfo :icon="'comment'" />
			<DashInfo :icon="'location-dot'" />
		</div>
	</main>
</template>

<script>
import DashInfo from "../components/DashInfo/DashInfo.vue";

export default {
	name: "Overview",
	components: { DashInfo },
};
</script>
