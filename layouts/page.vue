<template>
  <div class="index is-preload">
    <div id="page-wrapper">

      <!-- Header -->
      <nav-header />

      <nuxt />

      <!-- Footer -->
      <b-footer />

    </div>
  </div>
</template>

<script>
import NavHeader from "~/components/NavHeader"
import BFooter from "~/components/BFooter"

export default {
  components: {
    NavHeader,
    BFooter
  }
}
</script>
