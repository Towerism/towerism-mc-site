<template>
  <header id="header" :class="myClass">
    <h1 id="logo"><router-link to="/">Blueprints</router-link></h1>
    <nav id="nav">
      <ul>
        <li class="current"><router-link to="/">Welcome</router-link></li>
        <li><router-link to="/rules">Rules</router-link></li>
        <li><router-link to="/vote">Vote</router-link></li>
        <li><a href="https://discord.gg/wqZnDNh" target="blank" rel="noreferrer noopener">Discord</a></li>
        <li><a href="https://shop.blueprints.gg" class="button primary" target="blank" rel="noreferrer noopener">Shop</a></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  props: {
    alt: Boolean
  },
  computed: {
    myClass() {
      if (this.alt) {
        return 'alt'
      } else {
        return ''
      }
    }
  }
}
</script>
