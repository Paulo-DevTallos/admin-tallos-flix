<template>
	<div class="card-dash">
		<div class="title-infos">
			<div class="card-icon">
				<font-awesome-icon :icon="['fas', 'users']" />
			</div>
			<div class="card-dash-data">
				<h6>Usuários ativos na plataforma</h6>
				<span>250</span>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'DashInfo',
}
</script>
