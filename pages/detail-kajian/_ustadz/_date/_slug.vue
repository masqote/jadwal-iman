<template>
  <div>
    <div class="h-32 bg-primary-light">
      <div class="px-6 flex flex-row py-8 items-center">
        <div
          class="flex flex-row items-center justify-start px-3 space-x-1 py-2 -ml-4 cursor-pointer hover:opacity-80"
          @click="$router.go(-1)"
        >
          <img
            src="~/assets/svg/back3.svg"
            class="w-2 h-2 cursor-pointer"
            alt=""
          />
          <span class="text-primary-font-light text-sm cursor-pointer"
            >Back</span
          >
        </div>
        <h2 class="-ml-6 w-full flex justify-center">
          <span class="text-2xl font-bold text-white">Detail Kajian</span>
        </h2>
      </div>
    </div>
    <div v-if="data" class="-mt-10 z-20 relative">
      <div class="bg-white mx-4 pb-10 pt-6 rounded-lg">
        <div class="px-4 space-y-2 divide-y divide-dashed">
          <div class="flex flex-row w-full pt-1">
            <span class="w-4/12 text-lg font-bold text-primary-font-dark"
              >Penceramah</span
            >
            <span class="w-1/12">:</span>
            <NuxtLink
              :to="{
                name: 'ustadz-detail',
                params: { detail: data.ustadz.slug },
              }"
            >
              <span
                class="w-7/12 underline underline-offset-8 cursor-pointer text-blue-500"
                >{{ gelar }} {{ data.ustadz_name }}</span
              >
            </NuxtLink>
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
    <div v-if="data" class="mx-4 rounded-lg mt-6">
      <div class="flex flex-row justify-between">
        <div class="flex flex-col">
          <span class="text-primary-font-dark text-base font-bold"
            >Kajian Lainnya di {{ data.province_name }} :</span
          >
          <span class="text-sm text-primary"
            >{{ $dayjs(data.date_at).format('dddd') | ahad }},
            {{ $dayjs(data.date_at).format('DD MMMM YYYY') }}</span
          >
        </div>

        <div v-if="jadwalLainnya" class="flex self-end">
          <NuxtLink to="/jadwal-kajian">
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
            <div v-if="index < 5 && y.slug != slug" class="space-y-1">
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
          </div>
        </div>
        <div v-else class="text-sm text-red-600">
          Maaf, tidak ditemukan jadwal pada tanggal dan wilayah anda, harap cari
          jadwal lain.
          <br />
          <br />
          <span class="text-primary-font-dark text-sm">Cari jadwal lain :</span>
          <NuxtLink to="/jadwal-kajian"
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
  name: 'DetailKajian',
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
  data() {
    return {
      slug: this.$route.params.slug,
      data: null,
      jadwalLainnya: null,
    }
  },
  computed: {
    jadwal() {
      return this.$dayjs(this.data.date_at).format('YYYY/MM/DD')
    },
    gelar() {
      return this.data.ustadz.gender === 1 ? 'Ustadz' : 'Ustadzah'
    },
  },

  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
    })
    this.getJadwal(this.slug)
  },

  methods: {
    getJadwal(val) {
      this.$axios
        .$get('/get-jadwal/' + val)
        .then(({ data }) => {
          this.data = data

          this.getJadwalLainnya(data.date_at, data.province_id)
        })
        .catch((err) => {
          if (err.response.status === 404) {
            this.$router.go(-1)
          }
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
            this.shuffle(this.jadwalLainnya)
          }

          this.$nuxt.$loading.finish()
        })
    },
    shuffle(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        const temp = array[i]
        this.$set(array, i, array[j])
        this.$set(array, j, temp)
      }
    },
  },
}
</script>

<style>
iframe {
  @apply w-full h-full z-10;
}
</style>
