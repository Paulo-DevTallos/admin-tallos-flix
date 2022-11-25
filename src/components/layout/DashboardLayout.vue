<template>
  <div class="wrapper">
    <side-bar />
    <div class="main-painel">
      <div>
        navbar
      </div>
			<div>
				<Content />
			</div>
      <div>
        footer
      </div>
    </div>
  </div>
</template>
<script>
import SideBar from '../sidebar-plugin/SideBar.vue';
import Content from './Content.vue';

export default {
    name: "DashboardLayout",
    components: { Content, SideBar }
}
</script>
<style scoped>
.wrapper {
  display: flex;
  justify-content: space-between;
  height: 100vh;
  width: 100%;
	background-color: #f5f5f3;
}

.wrapper .main-painel {
  width: 80%;
}
</style>
