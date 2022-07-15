<template>
  <div class="max-w-screen-sm">
    <NavbarTop />
    <!-- Menu Bottom -->
    <NavbarBottom />
  </div>
</template>

<script>
export default {
  data() {
    return {
      scrollPosition: null,
      bgTransparent: false,
    }
  },
  // methods: {
  //   updateScroll() {
  //     this.scrollPosition = window.scrollY
  //     if (this.scrollPosition > 100) {
  //       this.bgTransparent = true
  //     } else {
  //       this.bgTransparent = false
  //     }
  //   },
  // },
  // mounted() {
  //   window.addEventListener('scroll', this.updateScroll)
  // },
}
</script>

<style></style>
