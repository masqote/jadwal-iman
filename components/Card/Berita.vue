<template>
  <div>
    <div
      class="shadow-lg border border-primary-font-light rounded flex flex-row h-28 cursor-pointer hover:opacity-80"
    >
      <div class="w-4/12">
        <img
          :src="thumbnail"
          class="h-full w-full object-cover rounded-l"
          alt=""
        />
      </div>
      <div class="flex flex-col w-8/12 justify-between py-2 pl-2">
        <h2 class="text-sm font-bold text-primary line-clamp-2">
          12 Resep Olahan Daging Sapi: Tongseng Bulgogi, Steak dan Gulai, Wah
          murah banget
        </h2>
        <div class="flex items-end text-xs">
          <span
            class="bg-primary-light p-1 rounded px-2 text-primary-font-light"
            >Gaya Hidup</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  props: {
    thumbnail: {
      type: String,
      default: null,
    },
  },
}
</script>

<style></style>
