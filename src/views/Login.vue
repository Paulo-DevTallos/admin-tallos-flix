<template>
  <div class="bg-login">
    <div class="size-box">
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
          @click="showLoginBtn"
          v-if="showLoginBtn"
        >
          Faça Login
        </button>
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
      showLoginBtn: true
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
</style>