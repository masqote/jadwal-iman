<template>
  <div>
    <div
      class="fixed bottom-0 z-50 max-w-screen-sm w-full bg-primary drop-shadow-lg shadow-2xl h-14"
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
              bgParent,
            'text-primary-font-light': !bgParent,
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
        <NuxtLink to="/ustadz" class="h-full grayscale text-primary-font-light">
          <div
            class="hover:opacity-80 cursor-pointer rounded flex items-center justify-center h-full px-4 flex-col"
          >
            <img src="~/assets/svg/ustadz1.svg" class="w-5 h-5" alt="" />
            <span class="font-bold text-sm">Ustadz</span>
          </div>
        </NuxtLink>
        <NuxtLink
          to="/component"
          class="h-full grayscale text-primary-font-light"
        >
          <div
            class="hover:opacity-80 cursor-pointer rounded flex items-center justify-center h-full px-4 flex-col"
          >
            <img src="~/assets/svg/news.svg" class="w-5 h-5" alt="" />
            <span class="font-bold text-sm">Berita</span>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    bgParent() {
      return (
        this.$route.name === 'jadwal-kajian-slug' ||
        this.$route.name === 'detail-kajian-ustadz-date-slug'
      )
    },
  },
}
</script>

<style></style>
