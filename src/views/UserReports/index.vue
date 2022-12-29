<template>
	<main>
		<header class="bg-header">Usuários</header>
		<div>
			<SearchBar @search="searchUserData" @callForm="callFormNewUser" />
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
	methods: {
		searchUserData(data) {
			console.log(data);
		},
		callFormNewUser() {
			alert("teste");
		},
	},
};
</script>
