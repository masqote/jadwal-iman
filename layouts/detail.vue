<template>
  <div>
    <!-- Navbar -->

    <div
      class="max-w-screen-sm min-h-screen mx-auto shadow-xl bg-primary-font-light"
    >
      <div
        class="fixed mx-auto top-0 z-50 max-w-screen-sm w-full flex h-14 shadow-lg transition-all duration-200 bg-primary pl-4"
      >
        <div
          class="flex items-center h-full px-2 space-x-1 cursor-pointer select-none"
          @click="$router.back()"
        >
          <img src="~/assets/svg/back3.svg" class="w-4 h-4" alt="" />
          <span class="font-bold text-base text-primary-font-light"
            >Kembali</span
          >
        </div>
      </div>
      <NavbarDetail class="mt-14" />
      <Nuxt class="mb-14" />
    </div>
  </div>
</template>
