<template>
	<form class='c-chatlist__chatbar' autocomplete='off'>
		<Avatar :src='userTarget.avatar || currentUser.avatar' class='u-ml-40 u-mv-8'/>
		<input v-model='message' name='message' type='text' placeholder='Send a message'/>
		<button class='u-pv-28' :class='{ "u-button-attacker" : !userTarget }'
		type='submit' @click='onSubmit'>
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
		onSubmit(e) {
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

<style lang='scss' scoped>
	@import '/client/styles/settings/color';
	.u-button-user {
		background: color-get(attacker);
		border-color: darken(color-get(attacker), 15);
	}
</style>
