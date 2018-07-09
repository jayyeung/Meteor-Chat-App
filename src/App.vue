<template>
  <div id="app">
    <ChatList/>
  </div>
</template>

<script>
import ChatList from './components/ChatList.vue'

export default {
  components: {
    ChatList
  }
}
</script>

<style lang="scss">
@import 'styles/main.scss';
</style>
