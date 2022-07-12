<template>
  <div
    class="shadow-lg rounded-lg flex justify-center w-40 h-20 cursor-pointer hover:opacity-90 animate-pulse"
  >
    <div class="flex w-full flex-col items-center">
      <div
        class="flex flex-col w-full h-full bg-gray-300 items-center justify-center rounded-lg"
      >
        <span
          class="p-2 text-center text-base font-bold text-primary-font-light w-3/4 space-y-2 items-center flex justify-center flex-col"
        >
          <p class="border bg-gray-100 h-2 rounded w-3/4"></p>
          <p class="border bg-gray-100 h-2 rounded w-full"></p>
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
