<template>
	<div class="c-chatlist">
		<UserInfo/>

		<div class='c-chatlist__list' ref='list'>
			<transition-group name='slide'>
				<template v-for='(message, i) in messages'>
					<Notification v-if='message.type === "Notification"'
					:date='message.created_at' :key='`notify-${i}`'>
						{{ message.note }}
					</Notification>

					<Message v-else :background='labelMessage(message)'
					:from='`${message.target.username}  ${(message.created_by === currentUser._id) ? "(You)" : ""}`'
					:avatar='message.target.avatar'
					:date='message.created_at' :key='`message-${i}`'>
						{{ message.message }}
					</Message>
				</template>
			</transition-group>

			<div class='u-pv-20'></div>
		</div>

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
	mounted: function() {
		this.onListScroll();
	},
	data: function() {
		return { scrollBottom: true }
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
		},

		onListScroll: function() {
			const list = this.$refs.list;
			let bottomOfList;
			list.onscroll = () => {
				bottomOfList = (list.scrollTop + list.clientHeight) >= (list.scrollHeight - 10);
				this.scrollBottom = bottomOfList;
			};
		}
	},
	watch: {
		messages(val) {
			const list = this.$refs.list;
			if (this.scrollBottom)
				list.scrollTop = list.scrollHeight;
		}
	},
	...MeteorData
}
</script>

