<template>
	<div class='c-chatlist__message'>
		<div v-if='background' class='bg'
		:style='{"background": background}'></div>

		<div class='o-media__fixed u-pr-28'>
			<Avatar :src='avatar'/>
		</div>

		<div class='o-media__fluid'>
			<div class='o-type-ms(1) u-mb-8'>
				<span class='u-mr-20'>{{ from }}</span>
				<Label v-if='date' class='u-inline-block u-opacity-40'>{{ getMessageTime }}</Label>
			</div>
			<p class='text'><slot></slot></p>
		</div>
	</div>
</template>

<script>
import Avatar from '../objects/Avatar.vue';
import Label from '../objects/Label.vue';

export default {
	components: {
		Avatar,
		Label
	},
	props: {
		avatar: String,
		background: String,
		from: { type: String, required: true },
		date: Date
	},
	computed: {
		getMessageTime: function() {
			const options = {
				hour: 'numeric',
				minute: 'numeric',
				hour12: true
			};
			return (this.date).toLocaleString('en-US', options);
		}
	}
};
</script>

<style lang="scss">
.text {
	max-width: 600px;
	word-wrap: break-word;
}

.bg {
	position: absolute;
	top: 0; bottom: 0;
	left: 0; right: 0;
	opacity: 0.075;
}
</style>

