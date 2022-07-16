<template>
  <div>
    <!-- Navbar -->

    <div
      class="max-w-screen-sm min-h-screen mx-auto shadow-lg bg-primary-font-light"
    >
      <div
        class="fixed mx-auto top-0 z-50 max-w-screen-sm w-full flex h-14 shadow-md transition-all duration-200 bg-primary pl-4 drop-shadow-md"
      >
        <div
          class="flex items-center h-full space-x-1 cursor-pointer select-none"
          @click="$router.back()"
        >
          <img src="~/assets/svg/back3.svg" class="w-2.5 h-2.5" alt="" />
          <span class="font-bold text-sm text-white">Kembali</span>
        </div>
      </div>
      <NavbarDetail class="mt-14" />
      <Nuxt class="mb-14" />
    </div>
  </div>
</template>
<script>
export default {
  name: 'detail',
}
</script>
