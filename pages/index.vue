<template>
  <div>
    <!-- Banner -->
    <section id="banner">

      <!--
        ".inner" is set up as an inline-block so it automatically expands
        in both directions to fit whatever's inside it. This means it won't
        automatically wrap lines, so be sure to use line breaks where
        appropriate (<br />).
      -->
      <div class="inner">

        <header>
          <h2>BLUEPRINTS</h2>
        </header>
        <p>Finally a Minecraft server for
        <br />builders, designers, and
        <br />Kpop lovers
        <br />
        <footer>
          <ul class="buttons stacked">
            <li><ip-button /></li>
          </ul>
        </footer>

      </div>

    </section>

  <!-- Main -->
    <article id="main">

      <header class="special container">
        <span class="icon solid fa-university"></span>
        <h2>Blueprints is all about creating a safe and fun environment
        <br />
        for builders, designers, and of course KPop fans.</h2>
        <p>Our community consists of mature young adults who are passionate
        <br />
        about designing and building really cool structures. Especially doing
        it in the challenge of Survival mode.
        <br />
        Many of us are also Kpop fans! Sometimes we love to talk about what's
        <br />
        playing on our spotify!</p>
      </header>

      <!-- One -->
        <section class="wrapper style2 container special-alt">
          <div class="row gtr-50">
            <div class="col-12-narrower">
              <header>
                <h2>Our <strong>network</strong> offers multiple gamemodes.</h2>
              </header>
              <p>Our survival server is the main attraction. Every other gamemode serves as a diversion for when you need a break from survival. Turf Wars and Hide & Seek are two of the diversions; you can randomly find mystery boxes while you play. Mystery boxes contain whacky gadgets and cosmetics. There are over 500 cosmetics and gadgets to collect and show off to your friends across the server!</p>
              <footer>
                <ul class="buttons">
                  <li><a href="#gamemodes" class="button scrolly">Find Out More</a></li>
                </ul>
              </footer>

            </div>
          </div>
        </section>

      <!-- Two -->
        <section class="wrapper style1 container special" id="gamemodes">
          <div class="row">
            <div class="col-4 col-12-narrower">

              <section>
                <span class="icon solid featured fa-drumstick-bite"></span>
                <header>
                  <h3>Survival</h3>
                </header>
                <p>
                  We have an economy, a crate system, cave surprises, and much more. Every single crate tier can be found just by playing. You'll have a chance to find them through certain activities. But they won't be spoiled here!
                </p>
              </section>

            </div>
            <div class="col-4 col-12-narrower">

              <section>
                <span class="icon solid featured fa-theater-masks"></span>
                <header>
                  <h3>Hide and Seek</h3>
                </header>
                <p>
                  Play on 2 carefully crafted maps. Each map designed to enhance the fun for the hider and the challenge for the seeker. Earn coins while playing, and spend them on various perks. The perks you can unlock range from a higher chance to become the hider to being able to change your disguise mid-game.
                </p>
              </section>

            </div>
            <div class="col-4 col-12-narrower">

              <section>
                <span class="icon solid featured fa-fist-raised"></span>
                <header>
                  <h3>Turf Wars</h3>
                </header>
                <p>
                  Two teams face off in a build-combat-build cadence to see who will be the first to claim the whole arena. Four unlockable kits ensure the game stays fresh. Keep the fun going: there are 4 maps which rotate each round.
                </p>
              </section>

            </div>
          </div>
        </section>

      <!-- Three -->
    </article>

  <!-- CTA -->
    <section id="cta">

      <header>
        <h2>What are you waiting for?</h2>
        <p>You've read this far. Get on the server and play!</p>
      </header>
      <footer>
        <ul class="buttons">
          <li><ip-button primary /></li>
          <li><router-link to="/rules" class="button">Rules</router-link></li>
        </ul>
      </footer>

    </section>
  </div>
</template>

<script>
import IpButton from '~/components/IpButton'
export default {
  components: {
    IpButton
  }
}
</script>
