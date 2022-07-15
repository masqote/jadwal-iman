<template>
  <div>
    <div class="pt-10" v-if="data">
      <div class="bg-white mx-4 pb-20 rounded-lg">
        <div class="px-4">
          <h2 class="text-2xl font-bold text-primary-font-dark py-8">
            Detail Kajian
          </h2>
        </div>
        <div class="px-4 space-y-2 divide-y divide-dashed">
          <div class="flex flex-row w-full pt-1">
            <span class="w-4/12 text-lg font-bold text-primary-font-dark"
              >Penceramah</span
            >
            <span class="w-1/12">:</span>
            <span class="w-7/12 text-primary">{{ data.ustadz_name }}</span>
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
              >{{ $dayjs(data.date_at).format('dddd, DD MMMM YYYY') }}
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
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'detail',
  data() {
    return {
      slug: this.$route.params.slug,
      data: null,
    }
  },
  filters: {
    ahad(val) {
      console.log(val)
    },
  },
  mounted() {
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
      })
    },
  },
}
</script>

<style>
iframe {
  @apply w-full h-full;
}
</style>
