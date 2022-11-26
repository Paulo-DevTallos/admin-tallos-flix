<template>
	<main>
		<div>
			barra de pesquisa
		</div>
		<header class="bg-header">Usuários cadastrados</header>
		<div class="user-table">
			<Table />
		</div>
	</main>
</template>

<script>
import Table from "../../components/Tables/Table.vue";

export default {
	name: "UserReports",
	components: { Table },
};
</script>
