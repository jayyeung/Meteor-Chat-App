<template>
  <div class="hello">
    <Label class='u-opacity-40'>Disguised As</Label>
    <div class='u-type-ms(1)'>Noah Newson</div>
  </div>
</template>

<script>
import Label from './objects/Label.vue';

export default {
  components: {
    Label
  },
  props: {
    msg: String
  }
}
</script>
