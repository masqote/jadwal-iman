<template>
  <div class="max-w-screen-sm">
    <div
      class="fixed top-0 z-50 max-w-screen-sm w-full h-14 shadow-lg transition-all duration-200"
      :class="[bgTransparent ? 'bg-white ' : 'bg-primary']"
    >
      <div class="flex items-center h-full px-2 space-x-2 hover:">
        <img src="~/assets/svg/pin.svg" class="w-6 h-6" alt="" />
        <span
          class="font-bold text-xl"
          :class="[bgTransparent ? 'text-primary-font-dark ' : 'text-white']"
          >Logo</span
        >
      </div>
    </div>
    <div
      class="fixed bottom-0 z-50 max-w-screen-sm w-full bg-primary h-14 drop-shadow-lg"
    >
      <div class="flex justify-around items-center h-full">
        <NuxtLink to="/" class="h-full">
          <div
            class="hover:opacity-80 cursor-pointer rounded flex items-center justify-center h-full px-4 flex-col"
          >
            <img src="~/assets/svg/home.svg" class="w-5 h-5" alt="" />
            <span class="font-bold text-sm text-primary-font-light">Home</span>
          </div>
        </NuxtLink>
        <NuxtLink to="/component" class="h-full">
          <div
            class="hover:opacity-80 cursor-pointer rounded flex items-center justify-center h-full px-4 flex-col"
          >
            <img src="~/assets/svg/calendar.svg" class="w-5 h-5" alt="" />
            <span class="font-bold text-sm text-primary-font-light"
              >Jadwal</span
            >
          </div>
        </NuxtLink>
        <NuxtLink to="/ustadz" class="h-full">
          <div
            class="hover:opacity-80 cursor-pointer rounded flex items-center justify-center h-full px-4 flex-col"
          >
            <img src="~/assets/svg/ustadz1.svg" class="w-5 h-5" alt="" />
            <span class="font-bold text-sm text-primary-font-light"
              >Ustadz</span
            >
          </div>
        </NuxtLink>
      </div>
    </div>
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
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY
      if (this.scrollPosition > 100) {
        this.bgTransparent = true
      } else {
        this.bgTransparent = false
      }
    },
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll)
  },
}
</script>

<style></style>
