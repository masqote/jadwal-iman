<template>
  <div>
    <div class="h-32 bg-primary relative overflow-hidden z-10">
      <div class="px-4">
        <h2 class="text-2xl font-bold text-white py-8">Jadwal Kajian</h2>
      </div>
    </div>
    <div class="relative z-20">
      <div
        class="p-1 left-1/2 transform -translate-x-1/2 text-lg flex justify-center text-primary absolute -top-1 z-20"
      >
        Pilih Tanggal Kajian
      </div>
      <div
        class="bg-white -mt-10 rounded-lg mx-3 overflow-auto hide-scroll pt-5"
      >
        <div v-if="date" class="max-w-screen-sm p-4 flex flex-row">
          <div v-for="x in date" :key="x.full">
            <CardDate
              :month="x.bulan"
              :date="x.tanggal"
              :day="x.hari"
              class="mr-2"
              @click.native="getJadwal(x.full)"
              :selected="x.full === selectedDay"
            />
          </div>
        </div>
        <div v-else class="max-w-screen-sm space-x-2 p-4 flex flex-row">
          <div v-for="x in 8" :key="x">
            <CardDatePulse />
          </div>
        </div>
      </div>
    </div>
    <div class="p-4 pb-4">
      <div class="flex justify-center text-red-600 mb-2" v-if="jadwal">
        <span class="text-sm"
          >Tanggal Dipilih : {{ $dayjs(selectedDay).format('dddd') | ahad }},
          {{ $dayjs(selectedDay).format('DD MMMM YYYY') }}
        </span>
      </div>
      <div class="space-y-3" v-if="jadwal">
        <div v-for="y in jadwal" :key="y.id">
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
        <div
          class="flex justify-center items-center flex-col"
          v-if="jadwal.length <= 0"
        >
          <img src="~/assets/img/not-found.png" class="w-56 h-56" alt="" />
          <span class="text-sm text-primary"
            >Maaf akhi/ukhti, jadwal yang anda pilih tidak tersedia</span
          >
        </div>
      </div>

      <div class="space-y-3" v-else>
        <div v-for="y in 5" :key="y">
          <CardJadwalPulse />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JadwalKajian',
  data() {
    return {
      date: null,
      jadwal: null,
      selectedDay: null,
      slug: this.$route.params.slug,
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
    // Load tanggal perhari
    this.getDate()
    // Load Jadwal berdasarkan tanggal yang dipilih
    this.getJadwal()
  },

  methods: {
    getDate() {
      this.$axios.$get('date-single').then(({ data }) => {
        this.date = data
      })
    },
    getJadwal(date = this.$today) {
      // if (!date) {
      //   date = 'hari-ini'
      // }
      // history.pushState({}, null, '/jadwal-kajian/' + encodeURIComponent(date))
      // this.$router.push({ name: 'jadwal-kajian-slug', params: { slug: date } })

      this.selectedDay = date
      this.jadwal = null
      this.$axios
        .$get('get-jadwal', {
          params: {
            day: date,
          },
        })
        .then(({ data }) => {
          this.jadwal = data
        })
    },
  },
}
</script>
