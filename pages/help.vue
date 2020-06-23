<template>
  <div class="page-container">
    <div class="container">
      <div class="tile is-ancestor">
        <div class="tile is-parent">
          <article class="tile is-child notification has-background-white">
            <div class="content">
              <p class="title">Voting</p>
              <p class="subtitle">
                Vote daily for our server and get <strong>rewards</strong>.
              </p>
              <div class="content">
                We are listed at the following servers listed below. Visit the
                links below and enter your username to get your reward. Just
                remember that you must be online to receive the reward.
                <ul class="server-lists">
                  <li v-for="server of serverLists" :key="server.text">
                    <a
                      :href="server.voteLink"
                      target="_blank"
                      rel="noreferrer noopener"
                      >{{ server.text }}</a
                    >
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
          text: 'minecraft-server-list.com'
        },
        {
          voteLink: 'https://minecraft-server.net/vote/towerismmc/',
          text: 'minecraft-servers.net'
        },
        {
          voteLink: 'https://topg.org/Minecraft/in-609427',
          text: 'topg.org'
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
</style>
