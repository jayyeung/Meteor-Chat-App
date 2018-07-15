<template>
	<div class="c-chatlist">
		<UserInfo/>

		<transition-group name='slide' tag='div' class='c-chatlist__list'>
			<template v-for='(message, i) in messages'>
				<Notification v-if='message.type === "Notification"'
				:key='`notify-${i}`'>
					{{ message.note }}
				</Notification>

				<Message v-else
				:from='message.target.username' :avatar='message.target.avatar'
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
	...MeteorData
}
</script>

