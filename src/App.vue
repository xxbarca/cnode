<template>
	<div id="app">
		<Header></Header>
		<div class='main'>
			<router-view name='slideBar'></router-view>
			<router-view name='main'></router-view>
		</div>
	</div>
</template>

<script>
	import Header from "./components/Header";
	import PostList from "./components/PostList"
	export default {
		name: "App",
		components: {
			Header,
			PostList
		}
	};
</script>

<style scoped>
#app {
	background-color: #E1E1E1;
}
.main {
	width: 100%;
	margin: 0 auto;
}

</style>
