<template>
	<div class='c-searchbar'>
		<input type='text' @input='signalChange'/>
	</div>
</template>

<script>
	export default {
		name: 'Searchbar',
		methods: {
			signalChange: function(e) {
				this.$emit('input', e.target.value);
			}
		}
	}
</script>
