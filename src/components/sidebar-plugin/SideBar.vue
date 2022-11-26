<template>
  <aside class="sidebar">
		<div class="tool-sidebar">
			<div class="logo-sidebar">
				<router-link :to="{ path: '/admin/overview' }">
					<img src="/img/logo-tallosflix.png" alt="logo tallosflix">
				</router-link>
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
