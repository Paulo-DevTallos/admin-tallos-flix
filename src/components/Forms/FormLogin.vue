<template>
	<div class="form-container">
		<form @submit.prevent="$emit('submitEvent', user)">
			<div class="form-title">
				<Typography :typography_text="'Gerenciador TallosFlix'"/>
			</div>
			<div class="data-container">
				<div>
					<label for="email">E-mail</label>
					<div class="input-type">
						<font-awesome-icon :icon="['fas', 'envelope']" />
						<BaseInput
							type="text"
							id="email"
							placeholder="email@teste.com"
							v-model="user.email"
						/>
					</div>
				</div>
				<div>
					<label for="passwrod">Senha</label>
					<div class="input-type">
						<font-awesome-icon :icon="['fas', 'lock']" />
						<BaseInput
							type="password"
							id="password"
							placeholder="*******"
							v-model="user.password"
						/>
						<!--<div class="input-styles">
							<input type="text" placeholder="teste">
							<font-awesome-icon :icon="['fas', 'eye']"/>
						</div>-->
					</div>
				</div>
			</div>
			<div>
				<p class="sub-text">Plataforma de gerenciamento de recursos Tallosflix</p>
			</div>
			<MainButton
				class="btn-login"
				type="submit"
				:title_btn="'Login'"
			/>
		</form>
	</div>
</template>

<script>
import BaseInput from "../../assets/sass/components/Inputs/BaseInput.vue";
import MainButton from "../Buttons/MainButton.vue";
import Typography from "../Typography/Typography.vue";

export default {
	name: "FormLogin",
	components: { MainButton, Typography, BaseInput },
	emits: ['submitEvent'],
	data() {
		return {
			user: {
				email: '',
				password: '',
			},
		};
	},
};
</script>
