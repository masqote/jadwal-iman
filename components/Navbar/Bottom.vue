<template>
  <div>
    <div
      class="fixed bottom-0 z-50 max-w-[490px] w-full bg-primary drop-shadow-lg shadow-2xl h-14"
    >
      <div class="flex justify-around items-center h-full">
        <NuxtLink to="/" class="h-full text-primary-font-light grayscale">
          <div
            class="hover:opacity-80 cursor-pointer rounded flex items-center justify-center h-full px-4 flex-col"
          >
            <img src="~/assets/svg/home.svg" class="w-5 h-5" alt="" />
            <span class="font-bold text-sm">Home</span>
          </div>
        </NuxtLink>
        <NuxtLink
          to="/jadwal-kajian"
          :class="{
            'shadow-lg bg-primary-light drop-shadow-lg text-white grayscale-0 rounded-md':
              bgParentJadwal,
            'text-primary-font-light': !bgParentJadwal,
          }"
          class="h-full grayscale"
        >
          <div
            class="hover:opacity-80 cursor-pointer rounded flex items-center justify-center h-full px-4 flex-col"
          >
            <img src="~/assets/svg/calendar.svg" class="w-5 h-5" alt="" />
            <span class="font-bold text-sm">Jadwal</span>
          </div>
        </NuxtLink>
        <NuxtLink
          to="/ustadz"
          class="h-full grayscale"
          :class="{
            'shadow-lg bg-primary-light drop-shadow-lg text-white grayscale-0 rounded-md':
              bgParentUstadz,
            'text-primary-font-light': !bgParentUstadz,
          }"
        >
          <div
            class="hover:opacity-80 cursor-pointer rounded flex items-center justify-center h-full px-4 flex-col"
          >
            <img src="~/assets/svg/ustadz1.svg" class="w-5 h-5" alt="" />
            <span class="font-bold text-sm">Ustadz</span>
          </div>
        </NuxtLink>
        <!-- <NuxtLink
          to="/berita"
          :class="{
            'shadow-lg bg-primary-light drop-shadow-lg text-white grayscale-0 rounded-md':
              bgParentBerita,
            'text-primary-font-light': !bgParentBerita,
          }"
          class="h-full grayscale"
        >
          <div
            class="hover:opacity-80 cursor-pointer rounded flex items-center justify-center h-full px-4 flex-col"
          >
            <img src="~/assets/svg/news.svg" class="w-5 h-5" alt="" />
            <span class="font-bold text-sm">Berita</span>
          </div>
        </NuxtLink> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    bgParentJadwal() {
      return (
        this.$route.name === 'jadwal-kajian' ||
        this.$route.name === 'detail-kajian-ustadz-date-slug'
      )
    },
    bgParentUstadz() {
      return (
        this.$route.name === 'ustadz' || this.$route.name === 'ustadz-detail'
      )
    },
    bgParentBerita() {
      return this.$route.name === 'berita' || this.$route.name === 'berita-slug'
    },
  },
}
</script>

<style></style>
