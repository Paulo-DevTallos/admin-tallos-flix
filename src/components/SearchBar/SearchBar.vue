<template>
	<div class="search-bar-container">
		<form @submit.prevent="$emit('search', data)">
			<BaseInput
				class="input-search"
				v-model="data.receiveData"
				type="text"
				placeholder="Realize sua pesquisa"
			/>
			<font-awesome-icon icon="fa-solid fa-rotate-right" />
			<MainButton
				class="btn-style"
				type="submit"
				:title_btn="'Pesquisar usuário'"
			/>
		</form>
		<MainButton
			class="btn-style"
			@click="$emit('callForm')"
			:title_btn="'Criar novo usuário'"
		/>
	</div>
</template>

<script>
import MainButton from "../Buttons/MainButton.vue";
import BaseInput from "../Inputs/BaseInput.vue";

export default {
	name: "SearchBar",
	components: { BaseInput, MainButton },
	emits: ["search", "callForm"],
	data() {
		return {
			data: {
				receiveData: "",
			},
		};
	},

	computed: {
		reloadList() {
			if (this.data.receiveData !== "") return true;
			else return false;
		},
	},
};
</script>
