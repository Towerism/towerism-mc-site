<template>
  <img :class="myClass" :src="iconData" />
</template>

<script>
export default {
  props: {
    icon: String,
    heading: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      iconData: ''
    }
  },
  computed: {
    myClass() {
      return this.heading ? 'b-icon--heading' : 'b-icon'
    }
  },
  methods: {
    async initIconData() {
      const module = await import(`../assets/${this.icon}.svg`)
      this.iconData = module.default;
    }
  },
  mounted() {
    this.initIconData()
  }
}
</script>

<style scoped>
.b-icon {
  margin-bottom: 1rem;
  width: 110px;
  height: 110px;
}

.b-icon--heading {
  width: 90px;
  height: 90px;
}
</style>
