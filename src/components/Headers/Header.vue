<template>
	<header class="header">
		<div class="user-info">
			<p>
				Seja bem vindo,
				<strong>
					{{
						$store.state.userStore.userName
							.split(" ")
							.slice(0, 2)
							.toString()
							.replace(",", " ")
					}}
				</strong>
			</p>
			<div>
				<strong>{{ $store.state.userStore.routerName }}</strong>
			</div>
		</div>
		<div class="avatar-container" @click="callCardProfile">
			<span> P </span>
		</div>
		<CardProfile
			@close="closeCardProfile"
			:class="{ isCardProfileActive: isActive }"
		/>
	</header>
</template>

<script>
import CardProfile from "../Cards/CardProfile.vue";

export default {
	name: "Header",
	components: { CardProfile },
	data() {
		return {
			isActive: false,
		};
	},
	methods: {
		callCardProfile() {
			this.isActive = true;
		},
		closeCardProfile() {
			this.isActive = false;
		},
	},
};
</script>
