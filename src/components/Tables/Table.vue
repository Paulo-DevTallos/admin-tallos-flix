<template>
	<div class="table-container">
		<HeaderTable :columns="table.column" />
		<ul>
			<ListUser />
			<ListUser />
			<ListUser />
			<ListUser />
			<ListUser />
		</ul>
	</div>
</template>

<script>
import HeaderTable from "./HeaderTable.vue";
import ListUser from "./ListUser.vue";
const column = ['Avatar', 'Nome', 'E-mail', 'Criado em']

export default {
	name: "Table",
	components: { ListUser, HeaderTable },
	data() {
		return {
			table: {
				column: [...column],
			}
		}
	}
};
</script>
