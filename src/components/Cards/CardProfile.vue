<template>
	<div class="card-profile">
		<div>
			Aqui vão as infomações do usuário
			<font-awesome-icon @click="$emit('close')" :icon="['fas', 'xmark']" />
		</div>
	</div>
</template>

<script>
export default {
	name: "CardProfile",
	emits: ["close"],
};
</script>

<style scoped lang="scss">
.card-profile {
	background-color: #fff;
	height: 100vh;
	width: 400px;
	position: fixed;
	right: -100%;
	top: 0;
	z-index: 2000;
	filter: drop-shadow(-2px 2px 10px rgba(0, 0, 0, 0.26));
	display: flex;
	justify-content: center;
	align-items: center;
	transition: right 0.4s ease-in-out;
}

.isCardProfileActive {
	right: 0;
	transition: right 0.4s ease-in-out;
}
</style>
