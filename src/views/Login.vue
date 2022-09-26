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
        <div class="login" @click="toggleUser">
          (i) Área do usuário
        </div>
        <div class="login" @click="toggleAdmin">
          (i) Área do Admin
        </div>
      </div>
    </div>
    <div class="size-box">
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
    }
  },

  methods: {
    showLoginDisplay() {
      this.displayModalForm = true;
      this.showLoginBtn = false;
    },
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

</style>