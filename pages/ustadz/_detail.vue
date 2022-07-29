<template>
  <div>
    <div class="h-44 bg-primary relative z-10">
      <div
        class="px-4 h-full flex flex-col justify-center items-center"
        v-if="ustadz"
      >
        <h2>
          <span class="text-sm font-bold text-white"
            >{{ gelar }} {{ ustadz.name }}</span
          >
        </h2>
        <h2>
          <span class="text-sm font-bold text-white"
            >{{ gelar }} {{ ustadz.name }}</span
          >
        </h2>
      </div>
    </div>
    <div class="min-h-[70vh] bg-white rounded-t-[2rem] relative -mt-10 z-20">
      <div class="py-4 text-center text-primary">Pilih Jadwal</div>
      <div
        v-if="date"
        class="flex flex-row overflow-auto hide-scroll px-4 pb-10"
      >
        <div v-for="x in date" :key="x.full">
          <CardDate
            :month="x.bulan"
            :date="x.tanggal"
            :day="x.hari"
            class="mr-2"
          />
        </div>
      </div>
      <div v-else class="flex flex-row overflow-auto hide-scroll px-4 pb-10">
        <div v-for="x in 8" :key="x">
          <CardDatePulse class="mr-2" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ustadz: null,
      date: null,
    }
  },
  mounted() {
    this.getUstadz()
    this.getDate()
  },
  methods: {
    getUstadz() {
      this.$axios
        .$get('get-ustadz-detail', {
          params: {
            slug: this.$route.params.detail,
          },
        })
        .then(({ data }) => {
          this.ustadz = data
        })
    },
    getDate() {
      this.$axios.$get('date-single').then(({ data }) => {
        this.date = data
        console.log(this.date)
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
