<template>
	<div class="c-chatlist">
		<UserInfo/>

		<transition-group name='fade' tag='div' class='c-chatlist__list'>
			<Message v-for='(message, i) in []'
			from='Nerissa Oh' avatar='https://d3iw72m71ie81c.cloudfront.net/male-79.jpg'
			:key='`message-${i}`'>
				{{ message.value }}
			</Message>

			<div class='u-pv-40' key='empty'></div>
		</transition-group>

		<Chatbar/>
	</div>
</template>

<script>
import UserInfo from './partials/UserInfo.vue';
import Message from './partials/Message.vue';
import Chatbar from './partials/Chatbar.vue';

export default {
	components: {
		Message,
		Chatbar,
		UserInfo,
	},
	props: {
		msg: String
	},
	computed: {
	}
}
</script>

