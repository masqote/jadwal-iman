<template>
  <div>
    <div class="h-32 bg-primary-light relative overflow-hidden z-10">
      <div class="px-6 flex justify-center">
        <h2 class="text-2xl font-bold text-white py-8">Detail Kajian</h2>
      </div>
    </div>
    <div class="pt-10 -mt-20 z-20 relative" v-if="data">
      <div class="bg-white mx-4 pb-10 pt-6 rounded-lg">
        <div class="px-4 space-y-2 divide-y divide-dashed">
          <div class="flex flex-row w-full pt-1">
            <span class="w-4/12 text-lg font-bold text-primary-font-dark"
              >Penceramah</span
            >
            <span class="w-1/12">:</span>
            <span class="w-7/12 text-blue-500">{{ data.ustadz_name }}</span>
          </div>
          <div class="flex flex-row w-full pt-1">
            <span class="w-4/12 text-lg font-bold text-primary-font-dark"
              >Judul</span
            >
            <span class="w-1/12">:</span>
            <span class="w-7/12 text-primary">{{ data.title }} </span>
          </div>
          <div class="flex flex-row w-full pt-1">
            <span class="w-4/12 text-lg font-bold text-primary-font-dark"
              >Tanggal</span
            >
            <span class="w-1/12">:</span>
            <span class="w-7/12 text-primary"
              >{{ $dayjs(data.date_at).format('dddd') | ahad }},
              {{ $dayjs(data.date_at).format('DD MMMM YYYY') }}
            </span>
          </div>
          <div class="flex flex-row w-full pt-1">
            <span class="w-4/12 text-lg font-bold text-primary-font-dark"
              >Pukul</span
            >
            <span class="w-1/12">:</span>
            <span class="w-7/12 text-primary"
              >{{ data.time_at }} - Selesai
            </span>
          </div>
          <div class="flex flex-row w-full pt-1">
            <span class="w-4/12 text-lg font-bold text-primary-font-dark"
              >Alamat</span
            >
            <span class="w-1/12">:</span>
            <span class="w-7/12 text-primary"
              >{{ data.address }} - {{ data.province_name }}
            </span>
          </div>
        </div>
        <div class="px-4 l">
          <div
            class="mt-10 w-full h-64 rounded-xl overflow-hidden bg-gray-200 drop-shadow-lg"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1983.0749872704835!2d106.80148926591326!3d-6.243957666585031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1d21a55dd6b%3A0xa74c97e308112846!2sRengit%20Travel!5e0!3m2!1sen!2sid!4v1657784541492!5m2!1sen!2sid"
              width="600"
              height="450"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div class="mx-4 mt-10 flex justify-end">
          <button
            class="px-4 py-2 rounded-lg text-primary drop-shadow-lg bg-primary text-sm flex flex-row items-center space-x-2"
          >
            <img src="~/assets/svg/whatsapp1.svg" class="w-4 h-4" alt="" />
            <span class="text-primary-font-light">Share</span>
          </button>
        </div>
      </div>
    </div>
    <div class="mx-4 rounded-lg mt-6" v-if="data">
      <div class="flex flex-row justify-between">
        <div class="flex flex-col">
          <span class="text-primary-font-dark text-base font-bold"
            >Kajian Lainnya :</span
          >
          <span class="text-sm text-primary"
            >{{ $dayjs(data.date_at).format('dddd') | ahad }},
            {{ $dayjs(data.date_at).format('DD MMMM YYYY') }}</span
          >
        </div>

        <div class="flex self-end" v-if="jadwalLainnya">
          <NuxtLink :to="'/jadwal-kajian/' + data.date_at">
            <div class="flex flex-row items-center mt-1 space-x-1">
              <img src="~/assets/svg/eye1.svg" class="h-4 w-4" alt="" />
              <span class="text-xs text-primary">Lihat Semua</span>
            </div>
          </NuxtLink>
        </div>
      </div>
      <div class="mt-2">
        <div v-if="jadwalLainnya" class="space-y-3">
          <div v-for="(y, index) in jadwalLainnya" :key="y.id">
            <div v-if="index < 11 && y.slug != slug" class="space-y-1">
              <CardJadwal
                :jam="y.time_at"
                :ustadz="y.ustadz_name"
                :title="y.title"
                :address="y.address"
                :date="y.date_at"
                :slug="y.slug"
                :province="y.province_name"
              />
            </div>
          </div>
        </div>
        <div v-else class="text-sm text-red-600">
          Maaf, Jadwal tidak dapat ditemukan di wilayah anda, harap cari jadwal
          lain.
          <br />
          <br />
          <span class="text-primary-font-dark text-sm">Cari jadwal lain :</span>
          <NuxtLink :to="'/jadwal-kajian/' + data.date_at"
            ><span class="text-sm text-primary underline"
              >Lihat disini</span
            ></NuxtLink
          >
        </div>
      </div>
    </div>

    <div class="invisible mt-10">.</div>
  </div>
</template>

<script>
export default {
  layout: 'detail',
  data() {
    return {
      slug: this.$route.params.slug,
      data: null,
      jadwalLainnya: null,
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
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
    })
    this.getJadwal(this.slug)
  },
  computed: {
    jadwal() {
      return this.$dayjs(this.data.date_at).format('YYYY/MM/DD')
    },
  },
  methods: {
    getJadwal(val) {
      this.$axios.$get('/get-jadwal/' + val).then(({ data }) => {
        this.data = data

        this.getJadwalLainnya(data.date_at, data.province_id)
      })
    },
    getJadwalLainnya(day, province) {
      this.$axios
        .$get('/get-jadwal', {
          params: {
            day,
            province,
          },
        })
        .then(({ data }) => {
          if (data.length > 1) {
            this.jadwalLainnya = data
          }

          setTimeout(() => this.$nuxt.$loading.finish(), 500)
        })
    },
  },
}
</script>

<style>
iframe {
  @apply w-full h-full z-10;
}
</style>
