<template>
  <div
    class="shadow-lg rounded-lg flex justify-center w-40 h-20 cursor-pointer hover:opacity-90"
  >
    <div class="flex w-full flex-col items-center">
      <div
        class="flex flex-col w-full h-full bg-gradient-to-br from-primary via-primary-light to-primary-verylight items-center justify-center rounded-lg"
      >
        <span
          class="p-2 text-center text-base font-bold text-primary-font-light"
        >
          {{ name }}
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
  },
}
</script>

<style></style>
