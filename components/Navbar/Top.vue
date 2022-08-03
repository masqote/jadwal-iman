<template>
  <div>
    <!-- Navbar -->
    <div
      class="fixed top-0 z-50 max-w-[490px] w-full h-14 shadow-lg transition-all duration-200 bg-white drop-shadow-lg border-b"
    >
      <div
        class="flex items-center justify-between h-full overflow-hidden -ml-3"
      >
        <img
          src="~/assets/img/jadwal_iman_primary.png"
          class="h-52 w-52 cursor-pointer"
          alt=""
          @click="$router.push('/')"
        />
        <span
          class="text-primary text-sm pr-3 underline select-none cursor-pointer"
          @click="$router.push({ path: '/about' })"
          >Tentang Kami</span
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
