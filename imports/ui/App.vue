<template>
	<div id='app'>
		<div v-for='(user, i) in users' :key='i'>{{ user }}</div>

		<div>MESSAGES</div>
		<div v-for='(message, i) in messages' :key='`message-${i}`'>{{ message }}</div>
		<button @click='click'></button>

		<input v-model='username'/>

		<input placeholder='Enter message' v-model='message'>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				username: '',
				message: ''
			};
		},

		methods: {
			click() {
				const payload = {
					message: this.message,
					target: this.username
				};

				this.$store.dispatch('sendMessage', payload);
			}
		}
	};
</script>

