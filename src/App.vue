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
import ChatList from './components/ChatList.vue'
import Sidebar from './components/Sidebar.vue';

export default {
  components: {
    ChatList,
	Sidebar
  }
}
</script>

<style lang='scss'>
@import 'styles/main.scss';
</style>

<style lang='scss' scoped>
.wrapper {
	display: flex;
	flex-wrap: wrap-reverse;

	height: 100%;
	box-shadow: 0 0.4rem 12px rgba(black, 0.2);
}

.c-sidebar { flex: 1 2; }
.c-chatlist { flex: 1 700px; }

.credits {
	margin: 1rem auto;
	text-align: center;
	color: #6D7687;
}
</style>

