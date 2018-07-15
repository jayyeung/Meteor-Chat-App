<template>
	<div class='c-chatlist__info'>
		<div class='u-inline-block u-relative u-mr-28'>
			<Avatar tagged :src='""'/>
			<Avatar v-if='true' class='user-avatar' width='1.25rem' :src='""'/>
		</div>

		<div class='u-mr-40'>
			<Label class='u-color-grey'>
				<i class='c-icon-anon'></i> {{ (true) ? 'Disguised as' : 'Your persona' }}
			</Label>
			<div class='o-type-ms(1)'>{{ "target" }}</div>
		</div>

		<transition name='scale'>
			<Label v-show='true' class='remove-disguise' @click.native='removeDisguise'>
				<i class='c-icon-anon-disabled'></i> Remove Disguise
			</Label>
		</transition>
	</div>
</template>

<script>
import Label from '../objects/Label.vue';
import Avatar from '../objects/Avatar.vue';

import { mapGetters } from 'vuex';

export default {
	components: {
		Label,
		Avatar
	},
	methods: {
		removeDisguise: function() {
			console.log('yes');
			this.$store.dispatch('changeTarget', null);
		}
	},
	computed: {

	}
};
</script>

<style lang='scss' scoped>
@import '/client/styles/settings/color';

.user-self {
	@keyframes border {
		from {border-width: 0;}
	}
	animation: border 0.5s;
	border: 0.2rem solid color-get(attacker);
}
.user-target {
	@extend .user-self;
	border-color: color-get(victim);
}
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
