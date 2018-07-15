<template>
	<div class='c-chatlist__info'>
		<div class='u-inline-block u-relative u-mr-28'>
			<Avatar tagged
			:class='{ "user-self" : !userTarget }'
			:src='userTarget.avatar || currentUser.avatar'/>

			<transition name='reflect'>
				<Avatar v-show='userTarget'
				class='user-avatar' width='1.25rem'
				:src='currentUser.avatar'/>
			</transition>
		</div>

		<div class='u-mr-40'>
			<Label class='u-color-grey'>
				<i class='c-icon-anon'></i> {{ (userTarget) ? 'Disguised as' : 'This is you' }}
			</Label>
			<div class='o-type-ms(1)'>{{ userTarget.username || currentUser.username }}</div>
		</div>

		<transition name='scale'>
			<Label v-show='userTarget' class='remove-disguise' @click.native='removeDisguise'>
				<i class='c-icon-anon-disabled'></i> Remove Disguise
			</Label>
		</transition>
	</div>
</template>

<script>
import Label from '../objects/Label.vue';
import Avatar from '../objects/Avatar.vue';

import MeteorData from '../store/data';

export default {
	components: {
		Label,
		Avatar
	},
	methods: {
		removeDisguise: function() {
			this.$store.dispatch('setTarget', null);
		}
	},
	...MeteorData
};
</script>

<style lang='scss' scoped>
@import '/client/styles/settings/color';

.user-self { border-color: color-get(attacker); }
.user-avatar {
	position: absolute;
	right: -0.25rem;
	bottom: 0;
}

.remove-disguise {
	cursor: pointer;
	color: color-get(attacker);
	border-bottom: 0.1rem solid color-get(attacker, light);

	transition: all 0.3s;
	opacity: 0.5;
	&:hover { opacity: 1; }
}
</style>
