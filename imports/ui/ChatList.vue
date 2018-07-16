<template>
	<div class="c-chatlist">
		<UserInfo/>

		<transition-group name='slide' tag='div' class='c-chatlist__list'>
			<template v-for='(message, i) in messages'>
				<Notification v-if='message.type === "Notification"'
				:key='`notify-${i}`'>
					{{ message.note }}
				</Notification>

				<Message v-else :background='labelMessage(message)'
				:from='`${message.target.username}  ${(message.created_by === currentUser._id) ? "(You)" : ""}`'
				:avatar='message.target.avatar'
				:date='message.created_at' :key='`message-${i}`'>
					{{ message.message }}
				</Message>
			</template>

			<div class='u-pv-40' key='empty'></div>
		</transition-group>

		<Chatbar/>
	</div>
</template>

<script>
import UserInfo from './partials/UserInfo.vue';
import Notification from './partials/Notification.vue';
import Message from './partials/Message.vue';
import Chatbar from './partials/Chatbar.vue';

import MeteorData from './store/data';

export default {
	components: {
		Notification,
		Message,
		Chatbar,
		UserInfo,
	},
	methods: {
		labelMessage: function(message) {
			const mesCreated = message.created_by;
			const mesUser = message.target.username;
			const user = this.currentUser._id;
			const target = this.userTarget.username;

			if (target && mesUser === target)
				return (mesCreated === user) ? '#0652DD' : '#E74C3C';
			return 'none';
		}
	},
	...MeteorData
}
</script>

