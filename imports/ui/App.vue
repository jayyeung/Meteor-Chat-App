<template>
  <div id="app">
	  <div class='wrapper'>
		<Sidebar/>
		<ChatList/>
	  </div>

	  <div class='credits'>Chatroom app designed & developed by Jason Yeung</div>
  </div>
</template>

<script>
import Sidebar from './Sidebar.vue';
import ChatList from './ChatList.vue';

export default {
	components: {
		Sidebar,
		ChatList
	}
}
</script>

<style lang='scss' scoped>
.wrapper {
	display: flex;
	flex-wrap: wrap-reverse;
	box-shadow: 0 0.4rem 12px rgba(black, 0.2);

	&, & > * { height: 100%; }
}

.c-sidebar { flex: 1 2; }
.c-chatlist { flex: 1; }

.credits {
	margin: 1rem auto;
	text-align: center;
	color: #6D7687;

	@media screen and (max-width: 1024px) {
		display: none;
	}
}
</style>
