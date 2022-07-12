<template>
  <div>
    <div class="h-52 bg-primary">
      <img src="~/assets/img/idul-adha.jpeg" class="h-full w-full" alt="" />
    </div>
    <div class="relative">
      <div
        class="pt-2 left-1/2 transform w-full -translate-x-1/2 text-lg flex justify-center text-primary absolute -top-1 z-20"
      >
        <span class="px-2"> Cari Jadwal Ustadz Favorit Kalian</span>
      </div>
      <div
        class="bg-white -mt-10 rounded-lg mx-4 overflow-auto hide-scroll pt-5 drop-shadow-xl"
      >
        <div class="max-w-screen-sm p-4 flex flex-row bg-white" v-if="ustadz">
          <div v-for="x in ustadz" :key="x.id">
            <CardUstadz :name="x.name" class="mr-2" />
          </div>
        </div>
        <div class="max-w-screen-sm p-4 flex flex-row bg-white" v-else>
          <div v-for="x in 7" :key="x">
            <CardUstadzPulse class="mr-2" />
          </div>
        </div>
      </div>
    </div>
    <div class="px-4 mt-4">
      <div class="flex justify-between items-center" v-if="date">
        <span class="text-lg text-primary"
          >Kajian Hari ini <br />
          <p class="text-sm">
            {{ date[0].hari }} - {{ date[0].tanggal }} {{ date[0].bulan }}
            {{ date[0].tahun }}
          </p>
        </span>
        <NuxtLink to="/jadwal-kajian/hari-ini">
          <div class="flex flex-row items-center mt-1 space-x-1">
            <img src="~/assets/svg/eye1.svg" class="h-4 w-4" alt="" />
            <span class="text-xs text-primary">Lihat Semua</span>
          </div>
        </NuxtLink>
      </div>
      <div class="flex justify-between items-center" v-else>
        <span class="text-lg text-primary">
          <br />
          <p class="text-sm"><br /></p>
        </span>
        <NuxtLink to="/jadwal-kajian/hari-ini">
          <div class="flex flex-row items-center mt-1 space-x-1">
            <span class="text-xs text-primary"><br /></span>
          </div>
        </NuxtLink>
      </div>
    </div>
    <div class="mt-1 px-4 pb-4">
      <div class="space-y-3" v-if="jadwal">
        <div v-for="(y, index) in jadwal" :key="y.id">
          <CardJadwal
            v-if="index < 3"
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
    <div class="px-4 py-4 bg-white">
      <div class="flex justify-between items-center">
        <span class="text-lg text-primary">Berita Terbaru </span>
        <NuxtLink to="/berita">
          <div class="flex flex-row items-center mt-1 space-x-1">
            <img src="~/assets/svg/eye1.svg" class="h-4 w-4" alt="" />
            <span class="text-xs text-primary">Lihat Semua</span>
          </div>
        </NuxtLink>
      </div>
      <div class="space-y-2 mt-2">
        <div v-for="b in 5" :key="b">
          <CardBerita />
        </div>
      </div>
    </div>
    <div class="mt-4 text-primary-font-light">.</div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      date: null,
      jadwal: null,
      ustadz: null,
      selectedDay: this.$today,
    }
  },
  mounted() {
    // Load ustadz
    this.getUstadz()
    // Load tanggal perhari
    this.getDate()
    // Load Jadwal berdasarkan tanggal yang dipilih
    this.getJadwal()
  },
  methods: {
    getUstadz() {
      this.$axios.$get('get-ustadz').then(({ ustadz }) => {
        this.ustadz = ustadz
        console.log(ustadz)
      })
    },
    getDate() {
      this.$axios.$get('date-single').then(({ data }) => {
        this.date = data
      })
    },
    getJadwal() {
      this.jadwal = null
      this.$axios
        .$get('get-jadwal', {
          params: {
            day: this.selectedDay,
          },
        })
        .then(({ data }) => {
          const filteredData = data.filter((x) => x.time_at > this.$time)
          if (filteredData.length > 0) {
            this.jadwal = filteredData
          } else {
            this.jadwal = data
          }
        })
    },
  },
}
</script>
