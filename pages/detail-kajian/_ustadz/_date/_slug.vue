<template>
  <div>
    <div class="h-32 bg-primary-light">
      <div class="px-6 flex flex-row py-8 items-center">
        <button
          class="flex flex-row items-center justify-start px-3 space-x-1 py-2 -ml-4 cursor-pointer hover:opacity-80 select-none"
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
        </button>
        <h2 class="-ml-6 w-full flex justify-center">
          <span class="text-2xl font-bold text-white">Detail Kajian</span>
        </h2>
      </div>
    </div>
    <div v-if="data" class="-mt-10 z-20 relative">
      <div class="bg-white mx-3 pb-10 pt-6 rounded-lg">
        <div class="px-4 space-y-2 divide-y divide-dashed">
          <div class="flex flex-row w-full pt-1">
            <span class="w-4/12 text-base font-bold text-primary-font-dark"
              >Penceramah</span
            >
            <span class="w-1/12">:</span>
            <NuxtLink
              class="w-7/12"
              :to="{
                name: 'ustadz-detail',
                params: { detail: data.ustadz.slug },
              }"
            >
              <span
                class="underline underline-offset-8 cursor-pointer text-blue-500"
                >{{ gelar }} {{ data.ustadz_name }}</span
              >
            </NuxtLink>
          </div>
          <div class="flex flex-row w-full pt-1">
            <span class="w-4/12 text-base font-bold text-primary-font-dark"
              >Judul</span
            >
            <span class="w-1/12">:</span>
            <span class="w-7/12 text-primary">{{ data.title }} </span>
          </div>
          <div class="flex flex-row w-full pt-1">
            <span class="w-4/12 text-base font-bold text-primary-font-dark"
              >Tanggal</span
            >
            <span class="w-1/12">:</span>
            <span class="w-7/12 text-primary"
              >{{ $dayjs(data.date_at).format('dddd') | ahad }},
              {{ $dayjs(data.date_at).format('DD MMMM YYYY') }}
            </span>
          </div>
          <div class="flex flex-row w-full pt-1">
            <span class="w-4/12 text-base font-bold text-primary-font-dark"
              >Pukul</span
            >
            <span class="w-1/12">:</span>
            <span class="w-7/12 text-primary"
              >{{ data.time_at }} - Selesai
            </span>
          </div>
          <div class="flex flex-row w-full pt-1">
            <span class="w-4/12 text-base font-bold text-primary-font-dark"
              >Alamat</span
            >
            <span class="w-1/12">:</span>
            <span class="w-7/12 text-primary"
              >{{ data.address }} - {{ data.province_name }}
            </span>
          </div>
          <div class="flex flex-row w-full pt-1">
            <span class="w-4/12 text-base font-bold text-primary-font-dark"
              >Tipe Kajian</span
            >
            <span class="w-1/12">:</span>
            <span class="w-7/12 text-primary">
              {{ data.tipe_kajian ? 'Kajian Online' : 'Kajian Offline' }}
            </span>
          </div>
          <!-- <div class="flex flex-row w-full pt-1">
            <span class="w-4/12 text-base font-bold text-primary-font-dark"
              >Deskripsi</span
            >
            <span class="w-1/12">:</span>
            <span class="w-7/12 text-primary text-sm">
              {{ data.deskripsi ? data.deskripsi : '-' }}
            </span>
          </div> -->
        </div>
        <div class="px-4 l">
          <div
            v-if="!data.tipe_kajian"
            class="mt-10 w-full h-64 rounded-xl overflow-hidden bg-gray-200 drop-shadow-lg"
          >
            <span v-if="data.url_kajian" v-html="data.url_kajian"></span>
            <span
              v-else
              class="flex items-center py-4 px-4 text-red-600 select-none"
              >Lokasi tidak dapat ditampilkan! harap lihat alamat detail
              diatas</span
            >
          </div>
          <div v-else class="pt-10 flex flex-col">
            <span>Link Kajian Online : </span>

            <a :href="data.url_kajian" target="_blank"
              ><span class="text-blue-500 underline cursor-pointer">{{
                data.url_kajian
              }}</span></a
            >
          </div>
        </div>
        <div class="mx-4 mt-10 flex justify-end">
          <button
            class="px-4 py-2 rounded-lg drop-shadow-lg bg-primary-light text-sm flex flex-row items-center space-x-2"
          >
            <img src="~/assets/svg/whatsapp1.svg" class="w-4 h-4" alt="" />
            <a
              :href="
                'https://api.whatsapp.com/send/?text=Coba cek jadwal kajian ' +
                gelar +
                ' ' +
                data.ustadz_name +
                ' - ' +
                data.title +
                ' di https://jadwaliman.id/ustadz/' +
                data.ustadz.slug
              "
            >
              <span class="text-primary-font-light">Share</span></a
            >
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
  head() {
    return {
      title:
        'Kajian ' +
        this.metaWeb.gelar +
        ' ' +
        this.metaWeb.ustadz +
        ' - ' +
        this.metaWeb.title,
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content:
            'Cek kajian ' +
            this.metaWeb.gelar +
            ' ' +
            this.metaWeb.ustadz +
            ' - ' +
            this.metaWeb.title,
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content:
            'Kajian ' +
            this.metaWeb.gelar +
            ' ' +
            this.metaWeb.ustadz +
            ' - ' +
            this.metaWeb.title,
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
            'Cek kajian ' +
            this.metaWeb.gelar +
            ' ' +
            this.metaWeb.ustadz +
            ' - ' +
            this.metaWeb.title,
        },
        {
          hid: 'og:url',
          name: 'og:url',
          content: 'https://jadwaliman.id' + this.$nuxt.$route.path,
        },
      ],
    }
  },
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
      metaWeb: {
        title: null,
        ustadz: null,
        gelar: null,
      },
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
          this.metaWeb.title = data.title
          this.metaWeb.ustadz = data.ustadz_name
          this.metaWeb.gelar = this.gelar
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
