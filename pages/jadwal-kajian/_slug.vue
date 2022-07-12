<template>
  <div>
    <div class="h-52 bg-primary"></div>
    <div class="relative">
      <div
        class="p-1 left-1/2 transform -translate-x-1/2 text-lg flex justify-center text-primary absolute -top-1 z-20"
      >
        Cari Jadwal Kajian
      </div>
      <div
        class="bg-white -mt-20 rounded-lg mx-3 overflow-auto hide-scroll pt-5"
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
      <div class="space-y-3" v-if="jadwal">
        <div v-for="y in jadwal" :key="y.id">
          <CardJadwal
            :jam="y.time_at"
            :ustadz="y.ustadz_name"
            :title="y.title"
            :address="y.address"
          />
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
  name: 'IndexPage',
  data() {
    return {
      date: null,
      jadwal: null,
      selectedDay: null,
      slug: this.$route.params.slug,
    }
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
    getJadwal(date = this.slug) {
      if (!date) {
        date = 'hari-ini'
      }
      history.pushState({}, null, '/jadwal-kajian/' + encodeURIComponent(date))

      this.selectedDay = date === 'hari-ini' ? this.$today : date
      this.jadwal = null
      this.$axios
        .$get('get-jadwal', {
          params: {
            day: date === 'hari-ini' ? this.$today : date,
          },
        })
        .then(({ data }) => {
          this.jadwal = data
        })
    },
  },
}
</script>
