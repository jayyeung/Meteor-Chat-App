<template>
	<div class='c-avatar'
		:style='{ width : width, height : width }'>

		<img :src='src' alt='user avatar'/>
	</div>
</template>

<script>
	export default {
		name: 'Avatar',
		props: {
			width: String,
			src: { type: String, required: true },
		}
	}
</script>
