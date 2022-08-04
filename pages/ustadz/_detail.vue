<template>
  <div>
    <div class="h-52 bg-primary relative overflow-hidden z-10">
      <div
        class="bg-white w-40 h-14 rounded-full flex items-center justify-center absolute shadow-lg -right-10 -top-2"
      >
        <div class="pr-8 text-primary font-bold pt-2">Detail</div>
      </div>
      <div
        class="py-4 px-4 h-full flex space-y-3 flex-col items-center"
        v-if="ustadz"
      >
        <div
          class="w-24 h-24 overflow-hidden border border-white rounded-full shadow-lg"
        >
          <img
            src="~/assets/img/ustadz/default.jpg"
            class="w-full h-full object-cover"
            alt=""
          />
        </div>
        <h2>
          <span class="text-sm font-bold text-white"
            >{{ gelar }} {{ ustadz.name }}</span
          >
        </h2>
      </div>
    </div>
    <div
      class="min-h-[70vh] bg-white rounded-t-[2rem] relative -mt-10 z-20 pb-10"
    >
      <div class="pt-4 text-center text-primary">Pilih Jadwal</div>
      <div
        v-if="date"
        class="flex py-6 overflow-hidden hide-scroll flex-row px-4 pb-10"
      >
        <div v-for="x in date" :key="x.full">
          <CardDate
            :month="x.bulan"
            :date="x.tanggal"
            :day="x.hari"
            :selected="x.full === selectedDay"
            @click.native="getJadwal(x.full)"
            class="mr-2"
          />
        </div>
      </div>
      <div
        v-else
        class="flex py-6 flex-row overflow-auto hide-scroll px-4 pb-10"
      >
        <div v-for="x in 8" :key="x">
          <CardDatePulse class="mr-2" />
        </div>
      </div>
      <div v-if="jadwal" class="flex justify-center text-primary mb-2">
        <span class="text-sm"
          >Tanggal Dipilih : {{ $dayjs(selectedDay).format('dddd') | ahad }},
          {{ $dayjs(selectedDay).format('DD MMMM YYYY') }}
        </span>
      </div>
      <div v-if="jadwal" class="space-y-3 px-3">
        <div v-for="y in jadwal.data" :key="y.id">
          <CardJadwal
            :jam="y.time_at"
            :ustadz="y.ustadz_name"
            :title="y.title"
            :address="y.address"
            :date="y.date_at"
            :slug="y.slug"
            :province="y.province_name"
            :gender="y.ustadz.gender"
          />
        </div>
        <div
          v-if="!jadwal.data"
          class="flex justify-center items-center flex-col"
        >
          <img src="~/assets/img/not-found.png" class="w-56 h-56" alt="" />
          <span class="text-sm text-red-600 w-3/4 text-center"
            >Maaf akhi/ukhti, jadwal
            <span class="text-primary">{{ gelar }} {{ ustadz.name }}</span> yang
            anda pilih tidak ditemukan, coba cari tanggal lain</span
          >
        </div>
      </div>
      <div v-else class="space-y-3 px-3">
        <div v-for="y in 5" :key="y">
          <CardJadwalPulse />
        </div>
      </div>
      <div class="mt-10 px-3">
        <div class="flex justify-between">
          <span class="text-sm text-primary">Ustadz Favorit Lainnya:</span>
          <NuxtLink to="/ustadz">
            <div class="flex flex-row items-center mt-1 space-x-1">
              <img src="~/assets/svg/eye1.svg" class="h-4 w-4" alt="" />
              <span class="text-xs text-primary">Lihat Semua</span>
            </div>
          </NuxtLink>
        </div>
      </div>
      <div
        class="mx-3 flex flex-row hide-scroll py-2 overflow-auto"
        v-if="ustadzFavorit"
      >
        <div v-for="(x, index) in ustadzFavorit" :key="x.id">
          <NuxtLink
            :to="{
              name: 'ustadz-detail',
              params: { detail: x.slug },
            }"
          >
            <CardUstadz
              v-if="index < 10 && x.slug !== $route.params.detail"
              :name="x.name"
              :gender="x.gender"
              class="mr-2 w-40 select-none"
            />
          </NuxtLink>
        </div>
      </div>
    </div>
    <div class="invisible mt-10">.</div>
  </div>
</template>

<script>
export default {
  asyncData({ $axios, route }) {
    return $axios
      .$get('get-ustadz-detail', {
        params: {
          slug: route.params.detail,
        },
      })
      .then((response) => {
        const metaWeb = response.data
        return { metaWeb }
      })
  },
  head() {
    return {
      title:
        'Jadwal ' +
        (this.metaWeb.gender === 1 ? 'Ustadz ' : ' Ustadzah ') +
        this.metaWeb.name +
        ' Hari Ini',
      meta: [
        { charset: 'utf-8' },
        {
          hid: 'description',
          name: 'description',
          content:
            'Jadwal kajian ' +
            (this.metaWeb.gender === 1 ? 'Ustadz ' : ' Ustadzah ') +
            this.metaWeb.name +
            ' hari ini dan hari lainnya, pilih jadwal yang kalian inginkan',
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content:
            'Jadwal ' +
            (this.metaWeb.gender === 1 ? 'Ustadz ' : ' Ustadzah ') +
            this.metaWeb.name +
            ' Hari Ini',
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
            'Jadwal kajian ' +
            (this.metaWeb.gender === 1 ? 'Ustadz ' : ' Ustadzah ') +
            this.metaWeb.name +
            ' hari ini dan hari lainnya, pilih jadwal yang kalian inginkan',
        },
        {
          hid: 'og:url',
          name: 'og:url',
          content: 'https://jadwaliman.id' + this.$nuxt.$route.path,
        },
      ],
    }
  },
  data() {
    return {
      ustadz: null,
      ustadzFavorit: null,
      date: null,
      selectedDay: this.$today,
      jadwal: null,
    }
  },

  filters: {
    ahad(val) {
      const value = val.split(',')
      if (value[0] === 'Minggu') {
        return 'Ahad'
      } else {
        return value[0]
      }
    },
  },
  mounted() {
    this.getDate()
    this.getUstadz()
    this.getUstadzLainnya()
  },
  methods: {
    getUstadz() {
      this.$axios
        .$get('get-ustadz-detail', {
          params: {
            slug: this.$route.params.detail,
          },
        })
        .then(({ data }) => {
          this.ustadz = data
          this.getJadwal()
        })
    },
    getDate() {
      this.$axios.$get('date-single').then(({ data }) => {
        this.date = data
      })
    },
    getJadwal(date = this.$today) {
      this.selectedDay = date
      this.jadwal = null
      this.$axios
        .$get('get-jadwal-ustadz', {
          params: {
            day: date,
            id: this.ustadz.id,
          },
        })
        .then((data) => {
          this.jadwal = data
        })
    },
    getUstadzLainnya() {
      this.$axios.$get('get-ustadz-favorit').then(({ data }) => {
        this.ustadzFavorit = data
      })
    },
  },
  computed: {
    gelar() {
      return this.ustadz.gender === 1 ? 'Ustadz' : 'Ustadzah'
    },
  },
}
</script>

<style></style>
