<template>
  <aside class="sidebar">
		<div class="tool-sidebar">
			<div class="logo-sidebar">
				<img src="/img/logo-tallosflix.png" alt="logo tallosflix">
			</div>
			<div>
				<SideBarLinks />
			</div>
		</div>
  </aside>
</template>
<script>
import SideBarLinks from './SideBarLinks.vue';

export default {
    name: "SideBar",
    components: { SideBarLinks }
}
</script>
<style>
.sidebar {

  height: 100vh;
  width: 20%;
}
</style>
