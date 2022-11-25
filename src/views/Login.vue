<template>
	<div class="bg-login">
		<div class="size-box size-info">
			<div>
				<img src="/img/logo-tallosflix.png" alt="Logo TalloFlix" />
			</div>
			<div class="login-section">
				<div class="title">
					<h1>Bem-vindo(a) ao TallosFlix</h1>
					<p>
						Aproveite o melhor de filmes e series exclusivos na plataforma
						TallosFlix. Tenha o melhor de críticas e comentários do cinema
						mundial nas suas mãos!
					</p>
				</div>
				<div>
					<MainButton
						class="btn-login"
						@action="toggleAdmin"
						:title_btn="'Faça seu Login'"
					/>
				</div>
			</div>
		</div>
		<div class="size-box form-content">
			<div class="form-user">
				<FormLogin
					v-if="hiddenFormAdmin" @submitEvent="handleSubmitLogin"
				/>
			</div>
		</div>
	</div>
</template>

<script>
import MainButton from "../components/Buttons/MainButton.vue";
import FormLogin from "../components/Forms/FormLogin.vue";

export default {
	name: "Login",
	components: { MainButton, FormLogin },
	data() {
		return {
			showLoginBtn: true,
			displayModalForm: false,
			hiddenFormAdmin: false,
		};
	},
	methods: {
		showLoginDisplay() {
			this.displayModalForm = true;
			this.showLoginBtn = false;
		},
		toggleAdmin() {
			this.hiddenFormAdmin = !this.hiddenFormAdmin;
		},
		handleSubmitLogin(user) {
			//await this.$store.dispatch("handleSubmitLogin", this.user);
		},
	},
};
</script>

<style scoped>
.bg-login {
	background-image: url(/img/bg-movie.png);
	background-repeat: no-repeat;
	background-size: cover;
	color: #fff;
	height: 100vh;
	display: flex;
	padding: 50px;
}

.size-info {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
}

.size-box {
	width: 50%;
}

.size-info h1 {
	font-size: 45px;
	margin-bottom: 30px;
}

.size-info img {
	filter: drop-shadow(0 0 1px #fff);
	width: 350px;
}

.size-info .login-section {
	padding-left: 4%;
}

.size-info .btn-login {
	padding: 14px 100px;
	border-radius: 10px;
	font-weight: bold;
	background-color: rgb(255, 234, 0);
	border: 0;
	transition: 0.4s;
	margin: 40px 0;
}

.size-info .btn-login:hover {
	background-color: rgb(247, 189, 0);
}

.size-info .login-area {
	display: flex;
	margin: 30px 0;
	background-color: #009acc;
	border-radius: 10px;
	cursor: pointer;
	animation: roar 0.4s ease-in-out;
}

@keyframes roar {
	0% {
		opacity: 0;
		visibility: hidden;
	}
	100% {
		opacity: 1;
		visibility: visible;
	}
}

.login-area .login {
	padding: 50px 30px;
	transition: 0.5s ease;
}

.login-area .login:hover {
	background-color: #00789f;
	border-radius: 10px;
}

.form-content {
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>
