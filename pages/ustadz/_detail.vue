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
        <h1>
          <span class="text-sm font-bold text-white"
            >{{ gelar }} {{ ustadz.name }}</span
          >
        </h1>
      </div>
    </div>
    <div
      class="min-h-[70vh] bg-white rounded-t-[2rem] relative -mt-10 z-20 pb-10"
    >
      <div class="py-2 pt-4">
        <div v-if="jadwal" class="flex justify-center text-primary mb-2">
          <span class="text-sm"
            >Jadwal Kajian {{ gelar }} {{ ustadz.name }}
          </span>
        </div>
        <div v-else class="flex justify-center text-primary mb-2">
          <span
            class="h-2 rounded-lg mx-14 w-full bg-gray-300 animate-pulse"
          ></span>
        </div>
      </div>

      <div class="p-2 flex justify-center pb-4">
        <div class="flex space-x-2 text-xs">
          <div
            class="px-3 py-2 rounded-xl cursor-pointer"
            @click="setIsActive('now')"
            :class="{
              'bg-primary text-white': isActive === 'now',
              'bg-gray-400 text-black': isActive !== 'now',
            }"
          >
            Kajian Tersedia
          </div>
          <div
            class="px-3 py-2 rounded-xl cursor-pointer"
            @click="setIsActive('old')"
            :class="{
              'bg-primary text-white': isActive === 'old',
              'bg-gray-400 text-black': isActive !== 'old',
            }"
          >
            Kajian yang Terlewat
          </div>
        </div>
      </div>
      <!-- CARD JADWAL USTADZ  -->
      <div class="px-2 space-y-2" v-if="jadwal">
        <div
          v-for="y in jadwal.data"
          :key="y.id"
          class="rounded-lg overflow-hidden shadow-lg border cursor-pointer hover:opacity-90 bg-primary-verylight"
        >
          <NuxtLink
            :to="{
              name: 'detail-kajian-ustadz-date-slug',
              params: {
                ustadz: y.ustadz.slug,
                date: y.date_at,
                slug: y.slug,
              },
            }"
          >
            <div class="w-full flex flex-row h-24 items-center">
              <div
                class="w-[20%] h-full items-center flex justify-center flex-col"
              >
                <div v-if="y.brosur" class="w-full h-full">
                  <nuxt-img
                    :src="`${$axios.defaults.baseURL}` + y.brosur"
                    class="h-full w-full object-cover object-top"
                    alt=""
                    sizes="sm:100vw"
                  />
                </div>
                <div v-else class="">
                  <nuxt-img
                    src="/image-not-found.svg"
                    class="h-full w-full object-fill object-center p-4"
                    alt=""
                    sizes="sm:100vw"
                  />
                </div>
              </div>
              <div
                class="w-[80%] h-full items-center flex bg-gradient-to-br from-primary via-primary-light to-primary-verylight"
              >
                <div class="flex flex-col h-full w-full px-2">
                  <div
                    class="h-full flex flex-row space-x-2 items-center w-full"
                  >
                    <img src="~/assets/svg/clock1.svg" class="h-4 w-4" alt="" />
                    <div class="flex w-full justify-between">
                      <span class="font-medium text-sm text-primary-font-dark"
                        >{{ $dayjs(y.date_at).format('dddd') | ahad }},{{
                          $dayjs(y.date_at).format('DD MMMM YYYY')
                        }}</span
                      >
                      <span class="font-medium text-sm text-primary-font-dark"
                        >Pukul {{ y.time_at | removeJam }}</span
                      >
                    </div>
                  </div>

                  <div class="h-full flex flex-row space-x-2 items-center">
                    <img
                      src="~/assets/svg/book.svg"
                      class="h-6 w-6 mt-1"
                      alt=""
                    />
                    <span
                      class="font-semibold text-primary-font-light text-sm line-clamp-2"
                      >{{ y.title }}
                    </span>
                  </div>
                  <!-- <div class="h-full flex flex-row space-x-2 items-center">
                  <img src="~/assets/svg/user.svg" class="h-3 w-3" alt="" />
                  <span
                    class="font-bold text-xs text-primary-font-light line-clamp-1"
                    >{{ gelar }} {{ y.ustadz_name }}</span
                  >
                </div> -->
                  <div class="h-full flex flex-row space-x-2 items-center">
                    <span
                      class="font-medium text-xs text-primary-font-dark line-clamp-1"
                    >
                      {{
                        y.address_id
                          ? y.address.name + ' - ' + y.address.province.name
                          : 'Kajian Online'
                      }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </NuxtLink>
        </div>
        <div
          v-if="!jadwal.data"
          class="flex justify-center items-center flex-col px-6"
        >
          <img src="~/assets/img/not-found.png" class="w-56 h-56" alt="" />
          <span class="text-sm text-red-600"
            >Maaf akhi/ukhti, jadwal {{ gelar }} {{ ustadz.name }} belum
            tersedia.</span
          >
        </div>
      </div>
      <div class="px-2 space-y-2" v-else>
        <div v-for="y in 5" :key="y">
          <CardJadwalPulse />
        </div>
      </div>
      <!-- END CARD JADWAL USTADZ -->

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
  asyncData({ $axios, route, error }) {
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
      .catch(({ response }) => {
        if (response.status === 400) {
          error({ statusCode: 404, message: 'Post not found' })
        }
      })
  },
  head() {
    return {
      title:
        'Jadwal ' +
        (this.metaWeb && this.metaWeb.gender === 1 ? 'Ustadz ' : ' Ustadzah ') +
        (this.metaWeb && this.metaWeb.name),
      meta: [
        { charset: 'utf-8' },
        {
          hid: 'description',
          name: 'description',
          content:
            'Cek jadwal kajian ' +
            (this.metaWeb && this.metaWeb.gender === 1
              ? 'Ustadz '
              : ' Ustadzah ') +
            (this.metaWeb && this.metaWeb.name) +
            ' hari ini, cek jadwal kajian terbaru atau pilih hari lainnya sesuai dengan yang kalian inginkan',
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content:
            'Jadwal ' +
            (this.metaWeb && this.metaWeb.gender === 1
              ? 'Ustadz '
              : ' Ustadzah ') +
            (this.metaWeb && this.metaWeb.name),
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
            'Cek jadwal kajian ' +
            (this.metaWeb && this.metaWeb.gender === 1
              ? 'Ustadz '
              : ' Ustadzah ') +
            (this.metaWeb && this.metaWeb.name) +
            ' hari ini, cek jadwal kajian terbaru atau pilih hari lainnya sesuai dengan yang kalian inginkan',
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
      isActive: 'now',
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
    removeJam(val) {
      val = val.slice(0, -3)
      return val
    },
  },
  mounted() {
    this.getUstadz()
    this.getUstadzLainnya()
  },
  methods: {
    setIsActive(val) {
      this.isActive = val
      this.getJadwal(val)
    },
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
    getJadwal(val) {
      this.jadwal = null
      this.$axios
        .$get('get-jadwal-ustadz', {
          params: {
            id: this.ustadz.id,
            filter: val,
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
