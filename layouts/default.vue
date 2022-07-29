<template>
  <div>
    <div
      class="max-w-screen-sm min-h-screen mx-auto shadow-xl bg-primary-font-light"
    >
      <NavbarFrontend class="mt-14" />
      <Nuxt
        class="mb-14"
        keep-alive
        :keep-alive-props="{ include: ['JadwalKajian', 'Ustadz'] }"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: 'default',
}
</script>
