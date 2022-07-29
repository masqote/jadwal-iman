<template>
  <div>
    <div class="h-32 bg-primary relative overflow-hidden">
      <div class="px-4">
        <h2 class="text-2xl font-bold text-white py-8">Ustadz</h2>
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
        .then(({ ustadz }) => {
          this.ustadz = ustadz
          this.$nuxt.$loading.finish()
        })
    },
  },
}
</script>

<style></style>
