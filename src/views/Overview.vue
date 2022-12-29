<template>
	<main>
		<div class="card-dash-container">
			<DashInfo
				:icon="'users'"
				:description_card="'Usuários ativos na plataforma'"
			/>
			<DashInfo
				:icon="'video'"
				:description_card="'Filmes cadastrados na plataforma'"
			/>
			<DashInfo
				:icon="'comment'"
				:description_card="'Total de comentários na plataforma'"
			/>
			<DashInfo
				:icon="'location-dot'"
				:description_card="'Cinemas disponíveis na plataforma'"
			/>
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
