<template>
  <div>
    <div class="h-[30vh] bg-primary"></div>
    <div class="relative">
      <div
        class="p-1 left-1/2 transform -translate-x-1/2 text-lg flex justify-center text-primary absolute -top-1 z-20"
      >
        Cari Jadwal
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
              class="mr-3"
            />
          </div>
        </div>
        <div v-else class="max-w-screen-sm space-x-3 p-4 flex flex-row">
          <div v-for="x in 8" :key="x">
            <CardDatePulse />
          </div>
        </div>
      </div>
    </div>
    <div class="p-4">
      <div class="space-y-3">
        <CardJadwal />
        <CardJadwal />
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
    }
  },
  mounted() {
    this.getDate()
  },
  methods: {
    getDate() {
      this.$axios.$get('date-single').then(({ data }) => {
        this.date = data
      })
    },
  },
}
</script>
