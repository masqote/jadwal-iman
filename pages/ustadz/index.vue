<template>
  <div>
    <div class="h-32 bg-primary relative overflow-hidden">
      <div class="px-4">
        <h1 class="text-2xl font-bold text-white py-8">Ustadz</h1>
      </div>
    </div>
    <div class="bg-white mx-4 -mt-10 relative min-h-screen rounded-lg px-4">
      <div class="flex justify-center pt-2">
        <span class="text-primary">Filter Nama Ustadz</span>
      </div>
      <div class="space-x-3 pb-6 px-2 py-4 overflow-auto hide-scroll">
        <span
          v-for="abjad in alphabet"
          :key="abjad"
          :class="{
            'bg-primary text-white shadow-lg': selectedAbjad === abjad,
          }"
          class="select-none uppercase cursor-pointer hover:opacity-60 hover:rounded-md rounded-md hover:shadow-lg py-2 px-2"
          @click="selectAbjad(abjad)"
          >{{ abjad }}</span
        >
      </div>
      <hr class="mb-4 border-dashed mx-1" />
      <div
        v-if="ustadz"
        class="pb-10"
        :class="{ 'grid grid-cols-2 gap-2': ustadz.length > 0 }"
      >
        <div v-for="x in ustadz" :key="x.id">
          <NuxtLink
            :to="{
              name: 'ustadz-detail',
              params: { detail: x.slug },
            }"
          >
            <CardUstadz :name="x.name" text="text-base" class="mr-2" />
          </NuxtLink>
        </div>
        <div v-if="ustadz.length <= 0" class="mx-1 w-full">
          <span class="text-red-500"
            >Nama berawalan huruf
            <span class="text-primary uppercase">{{ selectedAbjad }}</span>
            tidak ditemukan!</span
          >
        </div>
      </div>
    </div>
    <div class="invisible mt-10">.</div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Cari Ustadz Favorit',
      meta: [
        { charset: 'utf-8' },
        {
          hid: 'description',
          name: 'description',
          content:
            'Pilih jadwal ustadz favorit anda dan temukan jadwal kajian di hari yang tepat',
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: 'Cari Ustadz Favorit',
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
            'Pilih jadwal ustadz favorit anda dan temukan jadwal kajian di hari yang tepat',
        },
        {
          hid: 'og:url',
          name: 'og:url',
          content: 'https://jadwaliman.id' + this.$nuxt.$route.path,
        },
      ],
    }
  },
  name: 'Ustadz',
  data() {
    return {
      alphabet: [
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
        'g',
        'h',
        'i',
        'j',
        'k',
        'l',
        'm',
        'n',
        'o',
        'p',
        'q',
        'r',
        's',
        't',
        'u',
        'v',
        'w',
        'x',
        'y',
        'z',
      ],
      selectedAbjad: null,
      ustadz: null,
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
    })
    this.getUstadz(this.selectedAbjad)
  },
  methods: {
    selectAbjad(val) {
      if (this.selectedAbjad === val) {
        this.selectedAbjad = null
      } else {
        this.selectedAbjad = val
      }
      this.getUstadz(this.selectedAbjad)
    },
    getUstadz(params) {
      this.$nextTick(() => {
        this.$nuxt.$loading.start()
      })
      this.$axios
        .$get('get-ustadz', {
          params: {
            q: params,
          },
        })
        .then(({ data }) => {
          this.ustadz = data
          this.$nuxt.$loading.finish()
        })
    },
  },
}
</script>

<style></style>
