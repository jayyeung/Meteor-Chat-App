<template>
	<div class='c-avatar' ref='avatar' :class='{ "c-avatar--tagged" : tagged }'
		:style='{ width : width, height : width }'>

		<img :src='src' alt='user avatar'/>

		<!-- img used for transitions -->
		<img ref='trans-img' class='transition' src='#'/>
	</div>
</template>

<script>
	export default {
		name: 'Avatar',
		props: {
			width: String,
			tagged: Boolean,
			src: { type: String, required: true },
		},
		watch: {
			src: function(src, oldSrc) {
				let transition = this.$refs['trans-img'];
				transition.src = oldSrc;

				// replay the animation
				transition.style.animation = 'none';
				transition.offsetHeight;
				transition.style.animation = null;

				let avatar = this.$refs['avatar'];
				avatar.style.animation = 'none';
				avatar.offsetHeight;
				avatar.style.animation = null;
			}
		}
	}
</script>

<style lang="scss" scoped>
.transition {
	position: absolute;
	left: 0; right: 0;
	top: 0; bottom: 0;

	@keyframes moveOut {
		from { opacity: 1; }
		to { opacity: 0; transform: scale(1.25); }
	}

	animation: moveOut 0.4s;
	animation-fill-mode: forwards;
}
</style>

