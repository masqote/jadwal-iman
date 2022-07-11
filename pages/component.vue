<template>
  <div class="w-full p-4">
    <h1 class="text-center text-2xl font-bold">Component Reusable</h1>
    <div class="border border-primary bg-primary my-2"></div>
    <div class="space-y-2 divide-y divide-primary divide-dashed">
      <div class="flex flex-col space-y-2">
        <span class="text-lg">Card Date</span>
        <pre class="text-sm">Props : rahasia</pre>
        <div class="flex flex-row space-x-2">
          <CardDate />
          <!-- <CardDatePulse /> -->
        </div>
      </div>
      <div class="flex flex-col space-y-2">
        <span class="text-lg">Card Jadwal</span>
        <pre class="text-sm">Props : rahasia</pre>
        <div class="flex flex-col space-y-2">
          <CardJadwal />
          <!-- <CardJadwalPulse /> -->
        </div>
      </div>
      <div class="flex flex-col space-y-2">
        <span class="text-lg">Card Jadwal</span>
        <pre class="text-sm">Props : rahasia</pre>
        <div class="flex flex-col space-y-2">
          <CardJadwal />
          <!-- <CardJadwalPulse /> -->
        </div>
      </div>
      <div class="flex flex-col space-y-2">
        <span class="text-lg">Card Jadwal</span>
        <pre class="text-sm">Props : rahasia</pre>
        <div class="flex flex-col space-y-2">
          <CardJadwal />
          <!-- <CardJadwalPulse /> -->
        </div>
      </div>
      <div class="flex flex-col space-y-2">
        <span class="text-lg">Card Jadwal</span>
        <pre class="text-sm">Props : rahasia</pre>
        <div class="flex flex-col space-y-2">
          <CardJadwal />
          <!-- <CardJadwalPulse /> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
      this.$axios.$get('date-single').then((data) => {
        this.date = data
      })
    },
  },
}
</script>

<style></style>
