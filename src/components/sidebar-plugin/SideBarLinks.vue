<template>
	<nav class="nav-links-sidebar">
		<ul class="menu-links">
			<li v-for="item in dataLinks" :key="item.id">
				<router-link
					:to="{ path: `${item.router}` }"
					:class="{
						activeItemSidebar:
							pathRouterName === item.description ? isActive : isInactive,
					}"
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
			isActive: true,
			isInactive: false,
			pathRouterName: this.$store.state.userStore.routerName,
		};
	},
	methods: {
		// CRIA O METODO PEGANDO O DATA
		pickRoute(data) {
			this.$store.state.userStore.routerName = data;
			this.pathRouterName = data;
			this.isActive;
		},
	},
};
</script>
