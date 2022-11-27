<template>
	<div class="search-bar-container">
		<form @submit.prevent="">
			<BaseInput
				class="input-search"
				v-model="data.receiveData"
				type="text"
				placeholder="Realize sua pesquisa"
			/>
			<div>
				<font-awesome-icon icon="fa-solid fa-rotate-right" />
			</div>
			<button type="submit">Pesquisa</button>
		</form>
		<button>
      {{ title }}
      <font-awesome-icon icon="fa-solid fa-plus" />
    </button>
	</div>
</template>

<script>
import BaseInput from "../Inputs/BaseInput.vue";

export default {
	name: "SearchBar",
	components: { BaseInput },
	props: {
		title: {
			type: String,
		},
	},
	data() {
		return {
			data: {
				receiveData: '',
			}
		}
	},

	computed: {
		reloadList() {
			if (this.data.receiveData !== '') return true
			else return false
		}
	}
};
</script>
