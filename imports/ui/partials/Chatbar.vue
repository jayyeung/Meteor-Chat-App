<template>
	<form class='c-chatlist__chatbar' autocomplete='off'>
		<Avatar tagged :class='{ "c-avatar--target" : userTarget }'
		:src='userTarget.avatar || currentUser.avatar' class='u-ml-40 u-mv-8'/>

		<input v-model='message' name='message' ref='input'
		type='text' placeholder='Send a message' maxlength='500'/>

		<button class='u-pv-28' type='submit' @click='onSubmit'>
			<i class='c-icon-send'></i>
			Send message
		</button>
	</form>
</template>

<script>
import Avatar from '../objects/Avatar.vue';

import MeteorData from '../store/data';

export default {
	components: {
		Avatar
	},
	data: function() {
		return {
			message: ''
		}
	},
	methods: {
		onSubmit: function(e) {
			e.preventDefault();
			const target = this.userTarget || this.currentUser;
			const payload = {
				message: this.message,
				target: target.username
			};

			this.$store.dispatch('sendMessage', payload);
			this.message = '';
		}
	},
	...MeteorData
};
</script>
