<template>
  <div>
    <div class="h-52 bg-primary">
      <nuxt-img
        src="/tahun_baru_islam.jpg"
        class="h-full w-full object-cover object-center"
        alt=""
        sizes="sm:100vw"
      />
    </div>
    <div class="relative">
      <div class="h-full bg-white -mt-3 rounded-lg mx-4 pt-2 drop-shadow-xl">
        <div class="flex justify-center text-primary">
          Jadwal Ustadz Favorit
        </div>
        <div
          v-if="ustadz"
          class="h-full max-w-screen-sm p-4 flex flex-row items-center bg-white overflow-auto hide-scroll"
        >
          <div v-for="(x, index) in ustadz" :key="x.id">
            <NuxtLink
              :to="{
                name: 'ustadz-detail',
                params: { detail: x.slug },
              }"
            >
              <CardUstadz
                v-if="index < 5"
                :name="x.name"
                :gender="x.gender"
                class="mr-2 w-40"
              />
            </NuxtLink>
          </div>

          <NuxtLink
            :to="{
              name: 'ustadz',
            }"
          >
            <div
              class="flex flex-row items-center text-primary cursor-pointer hover:opacity-70 space-x-2 pl-2 pr-5"
            >
              <span class="text-xs">Semua Ustadz</span>
              <span class="text-xs">>></span>
            </div>
          </NuxtLink>
        </div>
        <div
          v-else
          class="h-full max-w-screen-sm p-4 flex flex-row items-center bg-white overflow-auto hide-scroll"
        >
          <div v-for="x in 7" :key="x">
            <CardUstadzPulse class="mr-2" />
          </div>
        </div>
      </div>
    </div>
    <div class="px-4 mt-4">
      <div v-if="date" class="flex justify-between items-center">
        <span class="text-lg text-primary"
          >Kajian Hari ini <br />
          <p class="text-sm">
            {{ date[0].hari }} - {{ date[0].tanggal }} {{ date[0].bulan }}
            {{ date[0].tahun }}
          </p>
        </span>
        <NuxtLink to="/jadwal-kajian">
          <div class="flex flex-row items-center mt-1 space-x-1">
            <img src="~/assets/svg/eye1.svg" class="h-4 w-4" alt="" />
            <span class="text-xs text-primary">Lihat Semua</span>
          </div>
        </NuxtLink>
      </div>
      <div v-else class="flex justify-between items-center">
        <span class="text-lg text-primary">
          <br />
          <p class="text-sm"><br /></p>
        </span>

        <div class="flex flex-row items-center mt-1 space-x-1">
          <span class="text-xs text-primary"><br /></span>
        </div>
      </div>
    </div>
    <div class="mt-1 px-4 pb-4">
      <div v-if="jadwal" class="space-y-3">
        <div v-for="(y, index) in jadwal" :key="y.id">
          <CardJadwal
            v-if="index < 5"
            :jam="y.time_at"
            :ustadz="y.ustadz.slug"
            :ustadzName="y.ustadz_name"
            :title="y.title"
            :address="y.address ? y.address.name : 'Kajian Online'"
            :date="y.date_at"
            :slug="y.slug"
            :province="y.province_name ?? ''"
            :gender="y.ustadz.gender"
          />
        </div>
        <div v-if="!jadwal.length > 0" class="text-sm text-red-600 py-3">
          Maaf, untuk hari ini tidak ada jadwal, harap cek jadwal hari lainnya
        </div>
      </div>
      <div v-else class="space-y-3">
        <div v-for="y in 5" :key="y">
          <CardJadwalPulse />
        </div>
      </div>
    </div>
    <!-- <div class="px-4 py-4 bg-white">
      <div class="flex justify-between items-center">
        <span class="text-lg text-primary">Berita Terbaru </span>
        <NuxtLink to="/berita">
          <div class="flex flex-row items-center mt-1 space-x-1">
            <img src="~/assets/svg/eye1.svg" class="h-4 w-4" alt="" />
            <span class="text-xs text-primary">Lihat Semua</span>
          </div>
        </NuxtLink>
      </div>
      <div class="space-y-2 mt-2">
        <div v-for="b in 5" :key="b">
          <NuxtLink
            :to="{
              name: 'berita-slug',
              params: { slug: b },
            }"
          >
            <CardBerita
              :thumbnail="'https://source.unsplash.com/300x200?' + b"
            />
          </NuxtLink>
        </div>
      </div>
    </div> -->
    <div class="mt-4 text-primary-font-light">.</div>
  </div>
</template>

<script>
export default {
  head: {
    title: 'Aplikasi Pencarian Jadwal Ustadz dan Event Muslim',
    titleTemplate: 'Jadwaliman | %s',
    meta: [
      { charset: 'utf-8' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Cari jadwal kajian ustadz favorit kalian dan event muslim di seluruh indonesia hanya dengan satu sentuhan',
      },
      {
        hid: 'og:title',
        name: 'og:title',
        content:
          'Jadwaliman | Aplikasi Pencarian Jadwal Ustadz dan Event Muslim',
      },
      {
        hid: 'og:image',
        name: 'og:image',
        content:
          'https://jadwaliman.id/_nuxt/img/jadwal_iman_primary.6ccf4fc.png',
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content:
          'Temukan jadwal kajian ustadz favorit kalian hanya dengan satu sentuhan',
      },
      {
        hid: 'og:url',
        name: 'og:url',
        content: 'https://jadwaliman.id/',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  name: 'IndexPage',
  data() {
    return {
      date: null,
      jadwal: null,
      ustadz: null,
      selectedDay: this.$today,
    }
  },
  mounted() {
    // Load ustadz
    this.getUstadz()
    // Load tanggal perhari
    this.getDate()
    // Load Jadwal berdasarkan tanggal yang dipilih
    this.getJadwal()
  },
  methods: {
    getUstadz() {
      this.$axios.$get('get-ustadz-favorit').then(({ data }) => {
        this.ustadz = data
      })
    },
    getDate() {
      this.$axios.$get('date-single').then(({ data }) => {
        this.date = data
      })
    },
    getJadwal() {
      this.jadwal = null
      this.$axios
        .$get('get-jadwal', {
          params: {
            day: this.selectedDay,
          },
        })
        .then(({ data }) => {
          const timeNow = this.$dayjs(new Date()).format('HH:mm:ss')
          const filteredData = data.filter((x) => x.time_at > timeNow)
          if (filteredData.length > 0) {
            this.jadwal = filteredData
          } else {
            this.jadwal = data
          }
        })
    },
  },
}
</script>
