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
          <h2>TOWERISM MC</h2>
        </header>
        <p>Finally a SMP server for
        <br />builders, designers, and
        <br />Kpop fans
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
        <span class="b-icon--heading-container">
          <b-icon icon="blueprint" heading />
        </span>
        <p class="spacer">&nbsp;</p>
        <h2>Towerism MC is all about creating a safe and fun environment
        <br />
        for builders, designers, and of course Kpop fans.</h2>
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
                <h2>Our <strong>SMP</strong> server offers a near-vanilla experience.</h2>
              </header>
              <p>The SMP (read 'Survival Multiplayer') philosophy is "less is more". Towerism MC feels like vanilla minecraft, but there is just enough extra goodies to keep you coming back for more.</p>
              <footer>
                <ul class="buttons">
                  <li><a href="#survival" class="button scrolly">Find Out More</a></li>
                </ul>
              </footer>

            </div>
          </div>
        </section>

      <!-- Two -->
        <section class="wrapper style1 container special" id="survival">
          <div class="row">
            <div class="col-4 col-12-narrower">

              <section>
                <span>
                  <b-icon icon="emerald" />
                </span>
                <header>
                  <h3>Emerald Economy</h3>
                </header>
                <p>
                  The economy is based on emeralds. Trade with other players, custom villager NPCs, buy unique perks, etc., all with emeralds. Keep your emeralds in the bank while exploring so you don't lose your amassed wealth.
                </p>
              </section>

            </div>
            <div class="col-4 col-12-narrower">

              <section>
                <span>
                  <b-icon icon="holy-grail" />
                </span>
                <header>
                  <h3>Quests</h3>
                </header>
                <p>
                  Obtain emeralds and other rewards by completing quests. These quests are by no means required, but many players eventually find themselves completing them when they need a reprieve from their usual survival activities.
                </p>
              </section>

            </div>
            <div class="col-4 col-12-narrower">

              <section>
                <span>
                  <b-icon icon="crate" />
                </span>
                <header>
                  <h3>Crates</h3>
                </header>
                <p>
                  Crates give fun cosmetics which you can use to express yourself and set yourself apart from other players. Keys to open these crates can be obtained by completing certain quests.
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
        <h2>Wondering how to join?</h2>
        <p>Your friends are waiting for you, come on!</p>
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
import BIcon from '~/components/BIcon'
import IpButton from '~/components/IpButton'
export default {
  components: {
    BIcon,
    IpButton
  }
}
</script>
