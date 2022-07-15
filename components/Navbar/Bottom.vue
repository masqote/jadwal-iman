<template>
  <div>
    <div class="fixed bottom-0 z-50 max-w-screen-sm w-full bg-primary h-14">
      <div class="flex justify-around items-center h-full">
        <NuxtLink to="/" class="h-full">
          <div
            class="hover:opacity-80 cursor-pointer rounded flex items-center justify-center h-full px-4 flex-col"
          >
            <img src="~/assets/svg/home.svg" class="w-5 h-5" alt="" />
            <span class="font-bold text-sm text-primary-font-light">Home</span>
          </div>
        </NuxtLink>
        <NuxtLink
          to="/jadwal-kajian/hari-ini"
          class="h-full"
          :class="{ 'bg-primary-light rounded-md': bgParent }"
        >
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
        <NuxtLink to="/component" class="h-full">
          <div
            class="hover:opacity-80 cursor-pointer rounded flex items-center justify-center h-full px-4 flex-col"
          >
            <img src="~/assets/svg/news.svg" class="w-5 h-5" alt="" />
            <span class="font-bold text-sm text-primary-font-light"
              >Berita</span
            >
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
      return this.$route.name === 'jadwal-kajian-slug'
    },
  },
}
</script>

<style></style>
