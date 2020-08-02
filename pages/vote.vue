<template>
  <div>
    <article id="main">

      <header class="special container">
        <span class="b-icon--heading-container">
          <b-icon icon="impression-rate" heading />
        </span>
        <br />
        <br />
        <br />
        <h2>Vote daily for our server, receive <strong>FREE</strong> rewards</h2>
        <p>We are listed at the following services listed below. Visit the links below and enter your username to get your reward. Just remember that you must be online to receive the reward.</p>
      </header>

      <!-- One -->
        <section class="wrapper style4 container">

          <!-- Content -->
            <div class="content">
              <section>
                <header>
                  <h3>Each service lets you vote every 24 hours unless otherwise stated.</h3>
                </header>
                <ul>
                  <li v-for="server of serverLists" :key="server.text">
                    <a
                      :href="server.voteLink"
                      target="_blank"
                      rel="noreferrer noopener"
                      >{{ server.text }}</a
                    >
                    <template v-if="server.parenthesis">
                      <span class="is-size-7 margin-left-small">
                        {{ server.parenthesis }}
                      </span>
                    </template>
                  </li>
                </ul>
              </section>
            </div>
        </section>
    </article>
  </div>
</template>

<script>
import BIcon from '~/components/BIcon'
export default {
  layout: 'page',
  components: {
    BIcon
  },
  data() {
    return {
      serverLists: [
        {
          voteLink: 'https://minecraft-mp.com/server/259773/vote/',
          text: 'minecraft-mp.com'
        },
        {
          voteLink: 'https://minecraftservers.org/vote/588215',
          text: 'minecraftservers.org'
        },
        {
          voteLink: 'https://minecraft-server-list.com/server/462911/vote/',
          text: 'minecraft-server-list.com',
          parenthesis: 'every 16h'
        },
        {
          voteLink: 'https://minecraft-server.net/vote/towerismmc/',
          text: 'minecraft-servers.net'
        },
        {
          voteLink: 'https://topg.org/Minecraft/in-609427',
          text: 'topg.org',
          parenthesis: 'every 12h'
        },
        {
          voteLink: 'https://minecraftservers.network/server-blueprints.150/vote',
          text: 'minecraftservers.network'
        }
      ],
      discordLink: 'https://discord.gg/wqZnDNh'
    }
  }
}
</script>
