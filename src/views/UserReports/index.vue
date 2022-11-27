<template>
	<main>
		<header class="bg-header">Usuários cadastrados</header>
		<div>
			<SearchBar :title="'Cadastrar novo usuário'" />
		</div>
		<div class="user-table">
			<Table />
		</div>
	</main>
</template>

<script>
import SearchBar from "../../components/SearchBar/SearchBar.vue";
import Table from "../../components/Tables/Table.vue";

export default {
	name: "UserReports",
	components: { Table, SearchBar },
};
</script>
