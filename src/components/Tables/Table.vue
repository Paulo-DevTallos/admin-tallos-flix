<template>
	<div class="table-container">
		<HeaderTable :columns="table.column" />
		<div class="scroll-table">
			<ul class="list-users">
				<ListUser />
			</ul>
		</div>
	</div>
</template>

<script>
import HeaderTable from "./HeaderTable.vue";
import ListUser from "./ListUser.vue";
const column = ["Avatar", "Nome", "E-mail", "Criado em", "Acoes"];

export default {
	name: "Table",
	components: { ListUser, HeaderTable },
	data() {
		return {
			table: {
				column: [...column],
			},
		};
	},
};
</script>
