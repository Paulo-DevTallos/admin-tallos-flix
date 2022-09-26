<template>
  <div class="bg-login">
    <div class="size-box size-info">
      <div>
        <img src="/img/TallosFlix-removebg-preview.png" alt="Logo TalloFlix">
      </div>
      <div class="title">
        <h1>Bem-vindo(a) ao TallosFlix</h1>
        <p>Aproveite o melhor de filmes e series exclusivos na plataforma TallosFlix. Tenha o melhor de críticas e comentários do cinema mundial nas suas mãos!</p>
      </div>
      <div>
        <button 
          class="btn-login"
          @click="showLoginDisplay"
          v-if="showLoginBtn"
        >
          Faça Login
        </button>
      </div>
      <div 
        class="login-area"
        v-if="displayModalForm"
      >
        <!-- botao de usuario ainda desabilitado -->
        <div class="login" @click="toggleUser" style="display: none;">
          (i) Área do usuário
        </div>
        <div class="login" @click="toggleAdmin">
          (i) Área do Admin
        </div>
      </div>
    </div>
    <div class="size-box form-content">
      <div class="form-user" v-if="hiddenAdmin">
        <form @submit.prevent="handleSubmitLogin">
          <div class="form-title">
            <h2>Área do Admin</h2>
          </div>
          <div>
            <div>
              <label for="email">E-mail</label>
              <div class="input-type">
                <font-awesome-icon :icon="['fas', 'envelope']" />
                <input 
                  type="text" 
                  v-model="user.email" 
                  id="email" 
                  placeholder="meuemail@example.com" 
                />
              </div>
            </div>
            <div>
              <label for="passwrod">Senha</label>
              <div class="input-type">  
                <font-awesome-icon :icon="['fas', 'lock']" />
                <input 
                  type="password" 
                  v-model="user.password"
                  id="password" 
                  placeholder="Digite sua senha" 
                />
              </div>
            </div>
            <button type="submit">
              Fazer login
            </button>
          </div>
        </form>
      </div>
    </div>  
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      showLoginBtn: true,
      displayModalForm: false,
      hiddenAdmin: false,
      user: {
        email: '',
        password: '',
      }
    }
  },

  methods: {
    showLoginDisplay() {
      this.displayModalForm = true;
      this.showLoginBtn = false;
    },

    toggleAdmin() {
      this.hiddenAdmin = !this.hiddenAdmin
    },

    async handleSubmitLogin() {
      await this.$store.dispatch('handleSubmitLogin', this.user)
    }
  }
}
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
  width: 300px;
}

.size-info .btn-login {
  padding: 14px 100px;
  border-radius: 10px;
  cursor: pointer;
  font-weight: bold;
  background-color: rgb(255, 234, 0);
  transition: .4s;
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
  animation: roar .4s ease-in;
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
  transition: .5s ease;
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

.form-user {
  background-color: #c9d2ff;
  color: #121212;
  padding: 50px 60px;
  border-radius: 15px;
  width: 400px;
  position: fixed;
  animation: blow .7s ease-in-out;
}

@keyframes blow {
  0% {
    opacity: 0;
    visibility: hidden;
    transform: scale(0.0);
    position: fixed;
    top: 50%;
    right: -100%;
    transform: translate(-50%, -50%);
  }
  100% {
    opacity: 1;
    visibility: visible;
    position: fixed;
    top: 50%;
    right: 0;
    transform: translate(-50%, -50%);
  }
}

.form-user .form-title {
  text-align: center;
  margin-bottom: 30px;
}

.input-type input {
  padding: 7px 10px;
  border: none;
  outline: none;
  width: 90%;
  margin-left: 5px;
}

.form-user .input-type {
  width: 100%;
  background-color: #fff;
  padding: 0 10px;
  border-radius: 5px;
  border: 1px solid #808070;
  margin-bottom: 7px;
}

.form-user button {
  cursor: pointer;
  width: 100%;
  padding: 8px;
  margin: 5px 0;
  border: 1px solid #009acc;
  border-radius: 7px;
  background: #009acc;
  color: #fff; 
  transition: .4s ease;
}

.form-user button:hover {
  background-color: #00789f;
  border: 1px solid #00789f;
  box-shadow: -2px -2px 3px #056f92c4;
}
</style>