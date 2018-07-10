<template>
	<div class='c-avatar'>
		<img :src='src' alt='user avatar'/>
	</div>
</template>

<script>
	export default {
		name: 'Avatar',
		props: {
			src: { type: String, required: true },
		}
	}
</script>
