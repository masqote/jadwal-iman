<template>
  <div>{{ $route.params.ustadz }}</div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
    }
  },
  // created() {
  //   if (!this.id) {
  //     this.$router.back()
  //   }
  // },
}
</script>

<style></style>
