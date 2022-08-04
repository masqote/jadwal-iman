<template>
  <div>
    <div
      class="max-w-[490px] min-h-screen mx-auto shadow-xl bg-primary-font-light"
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
  head: {
    htmlAttrs: {
      lang: 'id',
    },
    title: 'Cari Jadwal Kajian',
    titleTemplate: 'Jadwaliman | %s',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Cari jadwal kajian ustadz favorit kalian hanya dengan sentuhan',
      },
      {
        hid: 'og:image',
        name: 'og:image',
        content:
          'https://jadwaliman.id/_nuxt/img/jadwal_iman_primary.6ccf4fc.png',
      },
      {
        hid: 'og:site_name',
        name: 'og:site_name',
        content: 'Jadwaliman',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
}
</script>
