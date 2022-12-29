<template>
	<nav class="nav-links-sidebar">
		<ul class="menu-links">
			<li v-for="item in dataLinks" :key="item.id">
				<router-link
					:to="{ path: `${item.router}` }"
					@click="pickRoute(item.description)"
					><!-- EVENTO DE CLICK É REFERENTE A ROTA CLICADA! -->
					<font-awesome-icon :icon="['fas', `${item.icon}`]" />
					<p>{{ item.description }}</p>
				</router-link>
			</li>
		</ul>
	</nav>
</template>

<script>
import RouterData from "../../contants/router-links";

export default {
	name: "SideBarLinks",
	data() {
		return {
			dataLinks: RouterData,
		};
	},
	methods: {
		// CRIA O METODO PEGANDO O DATA
		pickRoute(data) {
			this.$store.state.userStore.routerName = data;
		},
	},
};
</script>
