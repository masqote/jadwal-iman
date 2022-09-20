<template>
  <div>
    <div class="bg-primary bg-opacity-80 text-white">
      <div class="py-2 px-4">
        <!-- <h1 class="text-4xl text-center font-semibold">Halal Expo</h1> -->
      </div>
      <div class="mx-4 rounded-lg flex justify-center">
        <div
          v-if="event"
          class="h-96 hover:opacity-70 rounded-lg overflow-hidden cursor-pointer"
        >
          <nuxt-img
            :src="`${$axios.defaults.baseURL}` + event.foto"
            class="h-full w-full object-contain object-top"
            alt=""
            sizes="sm:100vw"
            @click="toogleModal = !toogleModal"
          />
        </div>
        <div
          v-else
          class="h-96 w-10/12 animate-pulse bg-gray-400 hover:opacity-70 rounded-lg overflow-hidden cursor-pointer"
        >
          <div class="w-8/12 h-80"></div>
        </div>
      </div>
      <div
        class="mt-4 bg-primary-font-light rounded-t-3xl text-primary-font-dark"
      >
        <div class="px-4 py-2 space-y-4">
          <div class="flex flex-col">
            <h1 class="text-4xl font-bold text-center pb-2" v-if="event">
              {{ event.title }}
            </h1>
            <h1
              class="text-4xl font-bold text-center pb-4 flex justify-center py-2"
              v-else
            >
              <p
                class="bg-gray-400 animate-pulse pb-2 w-1/2 rounded-lg h-4"
              ></p>
            </h1>
            <div
              class="flex flex-col text-white bg-primary bg-opacity-80 rounded-xl px-3 py-2 w-full"
              v-if="event"
            >
              <div class="flex flex-row space-x-2 w-full items-center">
                <p class="w-2/12 font-semibold">Start</p>
                <p class="w-1/12">:</p>
                <p class="w-9/12 text-sm">
                  {{ $dayjs(event.start_date).format('dddd') }},
                  {{ $dayjs(event.start_date).format('DD') }}
                  {{ $dayjs(event.start_date).format('MMMM YYYY') }} -
                  {{ $dayjs(event.start_date).format('HH:mm') }}
                </p>
              </div>
              <div class="flex flex-row space-x-2 items-center">
                <p class="w-2/12 font-semibold">End</p>
                <p class="w-1/12">:</p>
                <p class="w-9/12 text-sm">
                  {{ $dayjs(event.end_date).format('dddd') }},
                  {{ $dayjs(event.end_date).format('DD') }}
                  {{ $dayjs(event.end_date).format('MMMM YYYY') }} -
                  {{ $dayjs(event.start_date).format('HH:mm') }}
                </p>
              </div>
              <div class="flex flex-row space-x-2 items-start">
                <p class="w-2/12 font-semibold">Alamat</p>
                <p class="w-1/12">:</p>
                <p class="w-9/12 text-sm py-0.5">
                  {{
                    event.address
                      ? event.address.name + ' - ' + event.address.alamat
                      : '-'
                  }}
                </p>
              </div>
            </div>
            <div
              class="flex flex-col text-white space-y-6 bg-gray-400 bg-opacity-80 rounded-xl px-3 py-4 w-full animate-pulse"
              v-else
            >
              <div class="flex flex-row space-x-2 w-full">
                <p class="w-2/12 font-semibold h-3 bg-gray-400 rounded-lg"></p>
                <p class="w-9/12 h-3 bg-gray-400 rounded-lg"></p>
              </div>
              <div class="flex flex-row space-x-2">
                <p class="w-2/12 font-semibold h-3 bg-gray-400 rounded-lg"></p>
                <p class="w-9/12 h-3 bg-gray-400 rounded-lg"></p>
              </div>
              <div class="flex flex-row space-x-2">
                <p class="w-2/12 font-semibold h-3 bg-gray-400 rounded-lg"></p>
                <p class="w-9/12 h-3 bg-gray-400 rounded-lg"></p>
              </div>
            </div>
          </div>
          <hr class="border-separate border-primary-verylight" />
          <p v-html="event.description" v-if="event"></p>
        </div>
      </div>
    </div>
    <div class="pb-10"></div>
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
              :src="`${$axios.defaults.baseURL}` + event.foto"
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
      .$get('get-event-detail', {
        params: {
          slug: route.params.detail,
        },
      })
      .then((response) => {
        response.data.bulan = $dayjs(response.data.date_at).format('MMMM')
        response.data.tahun = $dayjs(response.data.date_at).format('YYYY')
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
        'Jadwal Event ' +
        (this.metaWeb && this.metaWeb.title) +
        ' ' +
        (this.metaWeb && this.metaWeb.tahun),
      meta: [
        { charset: 'utf-8' },
        {
          hid: 'description',
          name: 'description',
          content:
            'Yuk hadiri event ' +
            (this.metaWeb && this.metaWeb.title) +
            ' ' +
            (this.metaWeb && this.metaWeb.bulan) +
            ' ' +
            (this.metaWeb && this.metaWeb.tahun) +
            ' - jangan sampai terlewat, cek jadwal event muslim terbaru dan terupdate hanya dengan satu sentuhan',
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content:
            'Jadwal Event ' +
            (this.metaWeb && this.metaWeb.title) +
            ' ' +
            (this.metaWeb && this.metaWeb.bulan) +
            ' ' +
            (this.metaWeb && this.metaWeb.tahun),
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content:
            this.metaWeb && this.metaWeb.foto
              ? this.$axios.defaults.baseURL + this.metaWeb.foto
              : 'https://jadwaliman.id/_nuxt/img/jadwal_iman_primary.6ccf4fc.png',
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content:
            'Yuk hadiri event ' +
            (this.metaWeb && this.metaWeb.title) +
            ' ' +
            (this.metaWeb && this.metaWeb.bulan) +
            ' ' +
            (this.metaWeb && this.metaWeb.tahun) +
            ' - jangan sampai terlewat, cek jadwal event muslim terbaru dan terupdate hanya dengan satu sentuhan',
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
      event: null,
      toogleModal: false,
    }
  },
  mounted() {
    this.getEvent()
  },
  methods: {
    getEvent() {
      this.$axios
        .$get('get-event-detail', {
          params: {
            slug: this.$route.params.detail,
          },
        })
        .then(({ data }) => {
          this.event = data
        })
    },
  },
}
</script>

<style></style>
