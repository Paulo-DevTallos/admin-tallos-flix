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
		<div class="avatar-container">
			<span> P </span>
		</div>
	</header>
</template>

<script>
export default {
	name: "Header",
};
</script>
