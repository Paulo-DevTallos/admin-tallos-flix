<template>
  <main>
		<div class="card-dash-container">
			<DashInfo />
			<DashInfo />
			<DashInfo />
			<DashInfo />
		</div>
  </main>
</template>

<script>
import DashInfo from '../components/DashInfo/DashInfo.vue'

export default {
  name: 'Overview',
	components: { DashInfo }
}
</script>
