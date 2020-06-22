<template>
  <div>
    <div class="hero main-hero is-fullheight">
      <div class="hero-body">
        <div class="container has-text-centered">
          <div class="title is-centered logo-container">
            <img src="../assets/images/logo.png" />
          </div>
          <div class="subtitle">
            <div>
              <div class="links-container">
                <div class="links">
                  <div class="link">
                    <a id="discord-address" href="https://discord.gg/hEGVVwH">
                      <div class="link-icon discord-link">
                        <font-awesome-icon :icon="['fab', 'discord']" />
                      </div>
                      <div class="link-text">Discord</div>
                    </a>
                  </div>
                  <div class="link">
                    <router-link id="vote-address" to="/help">
                      <div class="link-icon">
                        <font-awesome-icon :icon="['fas', 'vote-yea']" />
                      </div>
                      <div class="link-text">Vote</div>
                    </router-link>
                  </div>
                  <div class="link">
                    <router-link id="shop-address" to="/shop">
                      <div class="link-icon">
                        <font-awesome-icon :icon="['fas', 'gem']" />
                      </div>
                      <div class="link-text">Donate</div>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
            <div class="banner has-text-white">
              <div class="play-banner">
                <span>Join us at</span>
                <b-tooltip
                  :label="addressTooltipText"
                  :active="addressTooltipActive"
                  :always="tooltipIsAlwaysOn"
                  type="is-dark"
                >
                  <span
                    class="play-address b-tooltip"
                    @click="clickedAddress"
                    >{{ playAddress }}</span
                  >
                </b-tooltip>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="hero has-background-grey-darker has-text-grey">
      <div class="container">
        Copyright © Towerism MC 2020.
        <ul class="server-list-links">
          <li>
            <a href="https://www.trackyserver.com/minecraft-server">
              TOP of Minecraft servers
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import copy from 'copy-to-clipboard'

export default {
  data() {
    return {
      copiedText: 'Copied to clipboard!',
      copyText: 'Click to copy',
      showingCopiedMessage: false,
      playAddress: 'play.towerismmc.com'
    }
  },
  computed: {
    addressTooltipText() {
      return this.showingCopiedMessage ? this.copiedText : this.copyText
    },
    tooltipIsAlwaysOn() {
      return this.showingCopiedMessage ? true : undefined
    },
    addressTooltipActive() {
      return this.showingCopiedMessage ? true : undefined
    }
  },
  methods: {
    clickedAddress() {
      const success = copy(this.playAddress, { debug: true })
      if (success) {
        this.showingCopiedMessage = true
        setTimeout(() => {
          this.showingCopiedMessage = false
        }, 4000)
      }
    }
  }
}
</script>

<style scoped>
.play-banner {
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

.link-icon {
  color: #31445f;
}

.link {
  font-size: 3em;
  transition: all 0.2s ease-in-out;
  padding: 15px;
  margin: -15px 0;
}

.link a .link-text {
  font-size: 0.33em;
}

.link:hover {
  transform: scale(1.2);
}

.links {
  margin: 2.2em 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.links-container {
  display: inline-block;
  line-height: 2em;
}

.link-text {
  background-color: #31445f5e;
  line-height: 1.2em;
  display: inline-block;
  vertical-align: top;
  margin-bottom: -2em;
  color: #dbe1ea;
  padding: 0 0.2em;
  border-radius: 2px;
}

.server-list-links {
  list-style-type: none;
}

.server-list-links a {
  color: currentColor;
}
</style>
