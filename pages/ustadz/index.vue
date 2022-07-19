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
          @click="selectAbjad(abjad)"
          class="select-none uppercase cursor-pointer hover:opacity-60 hover:rounded-md rounded-md hover:shadow-lg py-2 px-2"
          >{{ abjad }}</span
        >
      </div>
      <div class="grid grid-cols-3 gap-2">
        <div v-for="x in 40" :key="x">
          <CardUstadz name="Khalid Basalamah Hafidzahullah" class="mr-2" />
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
    }
  },
  methods: {
    selectAbjad(val) {
      if (this.selectedAbjad === val) {
        this.selectedAbjad = null
      } else {
        this.selectedAbjad = val
      }
    },
  },
}
</script>

<style></style>
