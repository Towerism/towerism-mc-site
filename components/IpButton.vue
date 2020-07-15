<template>
  <div :class="myClass" @click="clickedAddress">{{ipText}}</div>
</template>

<script>
import copy from 'copy-to-clipboard'
export default {
  props: {
    primary: Boolean
  },
  data() {
    return {
      copiedText: 'Copied!',
      showingCopiedMessage: false,
      playAddress: 'Play.towerismmc.com'
    }
  },
  computed: {
    ipText() {
      return this.showingCopiedMessage ? this.copiedText : this.playAddress
    },
    myClass() {
      if (this.primary) {
        return ['primary', 'button']
      } else {
        return 'button'
      }
    }
  },
  methods: {
    clickedAddress() {
      const success = copy(this.playAddress)
      if (success) {
        this.showingCopiedMessage = true
        setTimeout(() => {
          this.showingCopiedMessage = false
        }, 2500)
      }
    }
  }
}
</script>
