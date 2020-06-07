<template>
  <div>
    <div class="hero main-hero is-fullheight is-primary">
      <div class="hero-body">
        <div class="container has-text-centered">
          <div class="title is-centered logo-container">
            <img src="../assets/images/logo.png" />
          </div>
          <div class="subtitle">
            <div class="play-banner">
              <span>
                Join us at
              </span>
              <b-tooltip
                label="Copied to clipboard!"
                :active="addressTooltipActive"
                position="is-bottom"
                always
              >
                <span class="play-address b-tooltip" @click="clickedAddress">
                  {{ playAddress }}
                </span>
              </b-tooltip>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section>
      <div class="container">
        Play either survival or creative.
      </div>
    </section>
  </div>
</template>

<script>
import copy from 'copy-to-clipboard'

export default {
  data() {
    return {
      addressTooltipActive: false,
      playAddress: 'play.towerismmc.com'
    }
  },
  methods: {
    clickedAddress() {
      const success = copy(this.playAddress, { debug: true })
      if (success) {
        this.addressTooltipActive = true
        setTimeout(() => (this.addressTooltipActive = false), 4000)
      }
    }
  }
}
</script>

<style scoped>
.main-hero {
  background: linear-gradient(rgba(20, 26, 35, 0.55), rgba(20, 26, 35, 0.55)),
    url('../assets/images/minecraft-mountainous-bg.jpg') no-repeat center center
      fixed;
  background-size: cover;
}

.logo-container {
}

.play-banner {
  margin-top: 1.2em;
  background-color: rgba(15, 199, 209, 0.75);
  display: inline-block;
  padding: 0.9em;
  border-radius: 6px 0;
}
.play-address {
  background-color: rgba(9, 150, 158, 0.7);
  padding: 0.2em;
  border-radius: 3px;
  font-weight: 800;
  cursor: pointer;
}
</style>
