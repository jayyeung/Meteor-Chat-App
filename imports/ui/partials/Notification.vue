<template>
	<div class='c-chatlist__notification'>
		<span>
			{{ date && `${getNotifyTime} &ndash; ` || '' }}
			<slot></slot>
		</span>
	</div>
</template>

<script>
export default {
	props: {
		date: Date
	},
	computed: {
		getNotifyTime: function() {
			const options = {
				hour: 'numeric',
				minute: 'numeric',
				hour12: true
			};
			return (this.date).toLocaleString('en-US', options);
		}
	}
}
</script>
