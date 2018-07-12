<template>
	<div class="c-chatlist">
		<div class='c-chatlist__info'>
			<div class='u-inline-block u-relative u-mr-28'>
				<Avatar src='https://randomuser.me/api/portraits/men/24.jpg'/>
				<Avatar class='user-avatar' width='1.25rem' src='https://randomuser.me/api/portraits/women/0.jpg'/>
			</div>

			<div>
				<Label class='u-color-grey'>
					<i class='c-icon-anon'></i> Disguised as
				</Label>
				<div class='o-type-ms(1)'>Noah Newson</div>
			</div>
		</div>

		<div class='c-chatlist__list'>
			<Message from='Nerissa Oh' avatar='https://d3iw72m71ie81c.cloudfront.net/male-79.jpg'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere pariatur libero illum tenetur deleniti sequi?
			</Message>
			<div class='u-pv-60'></div>
		</div>

		<Chatbar/>
	</div>
</template>

<script>
import Label from './objects/Label.vue';
import Avatar from './objects/Avatar.vue';

import Message from './partials/Message.vue';
import Chatbar from './partials/Chatbar.vue';

export default {
	components: {
		Message,
		Chatbar,
		Avatar,
		Label
	},
	props: {
		msg: String
	}
}
</script>

<style lang="scss" scoped>
	.user-avatar {
		position: absolute;
		right: -0.25rem;
		bottom: 0;
	}
</style>

