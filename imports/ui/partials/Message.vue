<template>
	<div class='c-chatlist__message'>
		<div class='o-media__fixed u-pr-28'>
			<Avatar :src='avatar'/>
		</div>

		<div class='o-media__fluid'>
			<div class='o-type-ms(1) u-mb-8'>
				{{ from }}
				<Label class='u-inline-block u-opacity-40 u-ml-20'>7:58pm</Label>
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
		from: { type: String, required: true },
		date: String,
	}
};
</script>

<style lang="scss">
.text { max-width: 600px; }
</style>

