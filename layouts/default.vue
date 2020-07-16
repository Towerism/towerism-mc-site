<template>
  <div id="page-wrapper">
    <nav-header alt />

    <nuxt />

    <b-footer />
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
