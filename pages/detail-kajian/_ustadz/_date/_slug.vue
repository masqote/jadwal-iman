<template>
  <div>
    <div class="h-32 bg-primary-light">
      <div class="px-6 flex flex-row py-8 items-center">
        <!-- <button
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
        </button> -->
        <h1 class="w-full flex justify-center">
          <span class="text-2xl font-bold text-white">Detail Kajian</span>
        </h1>
      </div>
    </div>
    <div v-if="data" class="-mt-10 z-20 relative">
      <div class="bg-white mx-3 pb-10 pt-2 rounded-lg">
        <div class="divide-y px-4 divide-dashed">
          <div class="py-3" v-if="data.brosur">
            <div
              class="h-60 hover:opacity-70 rounded-lg overflow-hidden cursor-pointer"
            >
              <nuxt-img
                :src="`${$axios.defaults.baseURL}` + data.brosur"
                class="h-full w-full object-cover object-top"
                alt=""
                sizes="sm:100vw"
                @click="toogleModal = !toogleModal"
              />
            </div>
          </div>
          <div class="py-3">
            <div>
              <h1 class="text-xl font-bold">{{ data.title }}</h1>
            </div>
          </div>
          <div class="py-3 cursor-pointer hover:opacity-70">
            <NuxtLink
              :to="{
                name: 'ustadz-detail',
                params: {
                  detail: data.ustadz.slug,
                },
              }"
            >
              <div class="flex flex-row items-center w-full">
                <div class="flex flex-row space-x-3 w-11/12">
                  <img
                    src="~/assets/svg/user1.svg"
                    class="h-5 w-5 mt-1"
                    alt=""
                  />
                  <h2 class="px-2">{{ gelar }} {{ data.ustadz_name }}</h2>
                </div>
                <div class="flex w-1/12 justify-end">
                  <img
                    src="~/assets/svg/right-arrow.svg"
                    class="h-3 w-3"
                    alt=""
                  />
                </div>
              </div>
            </NuxtLink>
          </div>
          <div class="py-3 cursor-pointer hover:opacity-70" v-if="data.address">
            <div class="flex flex-row items-center w-full">
              <div class="flex flex-row space-x-3 w-11/12">
                <img src="~/assets/svg/home2.svg" class="h-5 w-5 mt-1" alt="" />
                <h2 class="px-2">
                  {{ data.address.name }}
                </h2>
              </div>
              <div class="flex w-1/12 justify-end">
                <img
                  src="~/assets/svg/right-arrow.svg"
                  class="h-3 w-3"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div class="py-3" v-if="data.address">
            <div class="flex flex-row items-center w-full">
              <div class="flex flex-row space-x-3">
                <img
                  src="~/assets/svg/location2.svg"
                  class="h-5 w-5 mt-1"
                  alt=""
                />
                <span class="px-2">{{ data.address.alamat }}</span>
              </div>
            </div>
          </div>
          <div class="py-3">
            <div class="flex flex-row items-center w-full">
              <div class="flex flex-row space-x-3">
                <img
                  src="~/assets/svg/calendar1.svg"
                  class="h-5 w-5 mt-1"
                  alt=""
                />
                <span class="px-2"
                  >{{ $dayjs(data.date_at).format('dddd') | ahad }},
                  {{ $dayjs(data.date_at).format('DD MMMM YYYY') }}
                </span>
              </div>
            </div>
          </div>
          <div class="py-3">
            <div class="flex flex-row items-center w-full">
              <div class="flex flex-row space-x-3">
                <img
                  src="~/assets/svg/clock1.svg"
                  class="h-5 w-5 mt-1"
                  alt=""
                />
                <div class="flex flex-row items-center px-2 space-x-2">
                  <span
                    v-if="data.waktu"
                    class="p-1 px-2 bg-primary rounded-lg text-sm text-primary-font-light"
                  >
                    {{ data.waktu.name }}
                  </span>
                  <span>{{ data.time_at }} - Selesai </span>
                </div>
              </div>
            </div>
          </div>
          <div class="py-3">
            <div class="flex flex-row items-center w-full">
              <div class="flex flex-row space-x-3">
                <img
                  src="~/assets/svg/kajian.svg"
                  class="h-5 w-5 mt-1"
                  alt=""
                />
                <span class="px-2 font-bold"
                  >{{ data.tipe_kajian ? 'Kajian Online' : 'Kajian Offline' }}
                </span>
              </div>
            </div>
          </div>
          <div class="py-3">
            <div class="flex flex-row items-center">
              <div class="flex flex-row space-x-3">
                <img
                  src="~/assets/svg/description.svg"
                  class="h-5 w-5 mt-1"
                  alt=""
                />
                <span
                  class="px-2 break-all"
                  v-if="data.deskripsi"
                  v-html="data.deskripsi"
                ></span>
                <span class="px-2" v-else>-</span>
              </div>
            </div>
          </div>

          <div class="py-4" v-if="!data.tipe_kajian">
            <div class="font-bold">Peta Lokasi :</div>
            <div
              class="mt-6 w-full h-64 rounded-xl overflow-hidden bg-gray-200 drop-shadow-lg"
            >
              <span v-if="data.address.maps" v-html="data.address.maps"></span>
              <span
                v-else
                class="flex items-center py-4 px-4 text-red-600 select-none"
                >Lokasi tidak dapat ditampilkan! harap lihat alamat detail
                diatas</span
              >
            </div>
          </div>
          <div class="py-4" v-else>
            <div class="flex flex-col">
              <span>Link Kajian Online : </span>

              <a :href="data.url_kajian" target="_blank"
                ><span class="text-blue-500 underline cursor-pointer">{{
                  data.url_kajian
                }}</span></a
              >
            </div>
          </div>
          <div class="pt-4 flex justify-end">
            <button
              class="px-4 py-2 rounded-xl shadow-lg bg-primary-light text-sm flex flex-row items-center space-x-2 hover:opacity-80"
            >
              <img src="~/assets/svg/whatsapp1.svg" class="w-4 h-4" alt="" />
              <a
                :href="
                  'https://api.whatsapp.com/send/?text=Yuk kita ke kajian ini' +
                  ' https://jadwaliman.id' +
                  $nuxt.$route.path
                "
              >
                <span class="text-primary-font-light">Bagikan</span></a
              >
            </button>
          </div>
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
            >Pada Hari : {{ $dayjs(data.date_at).format('dddd') | ahad }},
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

    <div
      class="fixed overflow-x-hidden overflow-y-auto inset-0 flex justify-center items-center z-50"
      v-if="toogleModal"
    >
      <div
        class="relative mx-auto w-full max-w-[490px] bg-black bg-opacity-70 h-full"
      >
        <div
          class="mx-auto rounded-lg w-full h-full bg-opacity-90 flex items-center justify-center inset-0"
        >
          <div class="relative rounded max-w-[400px] mx-4">
            <span
              @click="toogleModal = !toogleModal"
              class="absolute text-white -right-2 bg-opacity-80 px-2 rounded-lg bg-red-500 -top-2 z-50 cursor-pointer font-bold"
              >X</span
            >
            <nuxt-img
              :src="`${$axios.defaults.baseURL}` + data.brosur"
              class="max-h-[75vh] h-full w-full rounded-md object-contain cursor-pointer"
              alt=""
              sizes="sm:100vw"
              @click="toogleModal = !toogleModal"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  asyncData({ $axios, route, error, $dayjs }) {
    return $axios
      .$get('/get-jadwal/' + route.params.slug)
      .then(({ data }) => {
        // const bulan = {
        //   asd: $dayjs(data.date_at).format('YYYY/MM/DD'),
        // }//
        data.bulan = $dayjs(data.date_at).format('MMMM')
        data.tahun = $dayjs(data.date_at).format('YYYY')
        const metaWeb = data
        return { metaWeb }
      })
      .catch(({ response }) => {
        if (response.status === 400) {
          error({ statusCode: 404, message: 'Post not found' })
        }
      })
  },
  head() {
    return {
      title:
        'Kajian ' +
        (this.metaWeb && this.metaWeb.ustadz.gender === 1
          ? 'Ustadz '
          : ' Ustadzah ') +
        ' ' +
        (this.metaWeb && this.metaWeb.ustadz_name) +
        ' ' +
        (this.metaWeb && this.metaWeb.bulan) +
        ' ' +
        (this.metaWeb && this.metaWeb.tahun) +
        ' - ' +
        (this.metaWeb && this.metaWeb.title),
      meta: [
        { charset: 'utf-8' },
        {
          hid: 'description',
          name: 'description',
          content:
            'Jadwal kajian ' +
            (this.metaWeb && this.metaWeb.ustadz.gender === 1
              ? 'Ustadz'
              : ' Ustadzah') +
            ' ' +
            (this.metaWeb && this.metaWeb.ustadz_name) +
            ' ' +
            (this.metaWeb && this.metaWeb.bulan) +
            ' ' +
            (this.metaWeb && this.metaWeb.tahun) +
            ' di ' +
            (this.metaWeb && this.metaWeb.address_id
              ? this.metaWeb.address.name
              : 'Online') +
            ' ' +
            (this.metaWeb && this.metaWeb.province_name
              ? this.metaWeb.province_name
              : '') +
            ' - ' +
            (this.metaWeb && this.metaWeb.title),
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content:
            'Kajian ' +
            (this.metaWeb && this.metaWeb.ustadz.gender === 1
              ? 'Ustadz '
              : ' Ustadzah ') +
            ' ' +
            (this.metaWeb && this.metaWeb.ustadz_name) +
            ' ' +
            (this.metaWeb && this.metaWeb.bulan) +
            ' ' +
            (this.metaWeb && this.metaWeb.tahun) +
            ' - ' +
            (this.metaWeb && this.metaWeb.title),
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content:
            this.metaWeb && this.metaWeb.brosur
              ? this.$axios.defaults.baseURL + this.metaWeb.brosur
              : 'https://jadwaliman.id/_nuxt/img/jadwal_iman_primary.6ccf4fc.png',
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content:
            'Jadwal kajian ' +
            (this.metaWeb && this.metaWeb.ustadz.gender === 1
              ? 'Ustadz'
              : ' Ustadzah') +
            ' ' +
            (this.metaWeb && this.metaWeb.ustadz_name) +
            ' ' +
            (this.metaWeb && this.metaWeb.bulan) +
            ' ' +
            (this.metaWeb && this.metaWeb.tahun) +
            ' di ' +
            (this.metaWeb && this.metaWeb.address_id
              ? this.metaWeb.address.name
              : 'Online') +
            ' ' +
            (this.metaWeb && this.metaWeb.province_name
              ? this.metaWeb.province_name
              : '') +
            ' - ' +
            (this.metaWeb && this.metaWeb.title),
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
      toogleModal: false,
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
          this.getJadwalLainnya(
            data.date_at,
            data.address ? data.address.province_id : ''
          )
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
