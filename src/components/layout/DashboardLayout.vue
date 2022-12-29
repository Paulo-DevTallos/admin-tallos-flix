<template>
	<div class="wrapper">
		<side-bar />
		<div class="main-painel">
			<div>
				<Header />
			</div>
			<div>
				<Content />
			</div>
			<div>
				<Footer />
			</div>
		</div>
	</div>
</template>
<script>
import Footer from "../Footer/Footer.vue";
import Header from "../Headers/Header.vue";
import SideBar from "../sidebar-plugin/SideBar.vue";
import Content from "./Content.vue";

export default {
	name: "DashboardLayout",
	components: { Content, SideBar, Header, Footer },
};
</script>
<style scoped>
.wrapper {
	display: flex;
	justify-content: space-between;
	width: 100%;
	padding-bottom: 30px;
	/*background-color: #cecece;*/
	background-color: #f5f5f3;
}

.wrapper .main-painel {
	width: 80%;
	min-height: 100vh;
}
</style>
