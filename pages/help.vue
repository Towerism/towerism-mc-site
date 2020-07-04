<template>
  <div class="page-container">
    <div class="container">
      <div class="tile is-ancestor">
        <div class="tile is-parent">
          <article class="tile is-child notification has-background-white">
            <div class="content">
              <p class="title">Voting</p>
              <p class="subtitle">
                Vote daily for our network and get <strong>rewards</strong>.
              </p>
              <div class="content">
                <p>
                  We are listed at the following services listed below. Visit
                  the links below and enter your username to get your reward.
                  Just remember that you must be online to receive the reward.
                </p>
                <p class="is-italic">
                  Each service lets you vote every 24 hours unless otherwise
                  stated.
                </p>
                <ul class="server-lists">
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

                  <li></li>
                </ul>
              </div>
            </div>
          </article>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child notification  has-background-white">
            <div class="content">
              <p class="title">Discord</p>
              <p class="subtitle">Stay connected with your fellow players!</p>
              <div class="content">
                Join the discussion at our discord server. Use our permanent
                link to join
                <a :href="discordLink" target="_blank" rel="noreferrer noopener"
                  >here</a
                >.
              </div>
            </div>
          </article>
        </div>
      </div>
      <div class="tile is-ancestor">
        <div class="tile is-parent">
          <article class="tile is-child notification has-background-white">
            <div class="content">
              <p class="title">Rules</p>
              <p class="subtitle">
                Our network's rules are about respect and protecting our
                players' enjoyment of the game.
              </p>
              <div class="content">
                We appreciate our players greatly, and we respect their time
                investment on the server. Therefore we take breaking these very
                seriously, because doing so undermines our players' time and
                effort. Please follow the rules, and enjoy playing!
                <ul>
                  <li>No advertising</li>
                  <li>No glitch exploiting</li>
                  <li>No spamming</li>
                  <li>No griefing</li>
                  <li>No modded clients</li>
                  <li>No ban evading</li>
                  <li>No discussing religion</li>
                  <li>No discussing politics</li>
                  <li>No disclosing personal information</li>
                  <li>No harmful language to others</li>
                </ul>
                Not following the rules above may result in an immediate ban.
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'page',
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
        }
      ],
      discordLink: 'https://discord.gg/wqZnDNh'
    }
  }
}
</script>

<style scoped>
.server-lists {
  list-style-type: none;
}

.margin-left-small {
  margin-left: 0.5em;
}
</style>
