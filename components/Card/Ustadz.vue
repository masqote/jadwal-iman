<template>
  <div
    class="shadow-lg rounded-lg flex justify-center w-full h-20 cursor-pointer hover:opacity-90"
  >
    <div class="flex w-full flex-col items-center">
      <div
        class="flex flex-col w-full h-full bg-gradient-to-br from-primary via-primary-light to-primary-verylight items-center justify-center rounded-lg"
      >
        <span
          class="px-2 py-2 text-center text-sm font-bold text-primary-font-light"
        >
          {{ gelar }} {{ name }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },

  filters: {},
  props: {
    name: {
      type: String,
      default: null,
    },
    gender: {
      type: Number,
      default: null,
    },
  },

  computed: {
    gelar() {
      if (this.gender === 1) {
        return 'Ustadz'
      } else if (this.gender === 2) {
        return 'Ustadzah'
      } else {
        return null
      }
    },
  },
}
</script>

<style></style>
