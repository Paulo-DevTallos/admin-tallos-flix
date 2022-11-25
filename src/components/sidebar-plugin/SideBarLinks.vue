<template>
	<nav>
		<ul>
			<li v-for="item in dataLinks" :key="item.id">
				<router-link :to="{ path: `${item.router}` }">
					<font-awesome-icon :icon="['fas', `${item.icon}`]" />
					<p>{{ item.description }}</p>
				</router-link>
			</li>
		</ul>
	</nav>
</template>

<script>
import RouterData from '../../contants/router-links'

export default {
	name: 'SideBarLinks',
	data() {
		return {
			dataLinks: RouterData,
		}
	},
}
</script>
