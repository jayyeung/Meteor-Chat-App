<template>
    <div class='c-label' :class='{ "c-label--small" : small }'>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'Label',
		props: {
			small: Boolean
		}
    };
</script>
