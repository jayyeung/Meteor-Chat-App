<template>
	<div class='c-searchbar'>
		<div class='c-searchbar__wrapper' @click='focusInput'>
			<input type='text' :placeholder='`Search ${item || "Users"}…`'
			ref='input' @input='signalChange'/>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Searchbar',
		props: { item: String },
		methods: {
			focusInput: function() {
				this.$refs.input.focus();
			},

			signalChange: function(e) {
				this.$emit('input', e.target.value);
			}
		}
	}
</script>
