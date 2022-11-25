<template>
	<header class="header">
		<div class="user-info">
			<div>
				<p>Nome do Usuário</p>
			</div>
			<div>
				<Typography class="typograph-config">
					Nome da página - Ex: Dashboard
				</Typography>
			</div>
		</div>
		<NavBar />
	</header>
</template>

<script>
import Typography from "../Typography/Typography.vue";
import NavBar from "./NavBar.vue";

export default {
	name: "Header",
	components: { NavBar, Typography },
};
</script>
