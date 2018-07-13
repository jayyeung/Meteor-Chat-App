<template>
	<form class='c-chatlist__chatbar' autocomplete='off'>
		<Avatar :src='getTarget.profile_pic || getUser.profile_pic' class='u-ml-40 u-mv-8'/>
		<input v-model='message' name='message' type='text' placeholder='Send a message'/>
		<button class='u-pv-28' type='submit' @click='onSubmit'>
			<i class='c-icon-send'></i>
			Send to Noah
		</button>
	</form>
</template>

<script>
import Avatar from '../objects/Avatar.vue';

import { mapGetters } from 'vuex';

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
			this.message = '';
		}
	},
	computed: {
		...mapGetters([
			'getUser',
			'getTarget'
		])
	}
};
</script>
