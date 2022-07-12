<template>
  <div class="rounded-lg overflow-hidden shadow-lg">
    <div class="w-full flex flex-row h-24 items-center">
      <div
        class="w-2/12 h-full items-center flex bg-primary justify-center flex-col border-r"
      >
        <span class="font-bold text-primary-font-light">{{
          jam | removeJam
        }}</span>
        <!-- <span class="font-bold text-primary-font-light">AM</span> -->
      </div>
      <div
        class="w-10/12 h-full items-center flex bg-gradient-to-br from-primary via-primary-light to-primary-verylight"
      >
        <div class="flex flex-col h-full px-2">
          <div class="h-full flex flex-row space-x-2 items-center">
            <img src="~/assets/svg/user.svg" class="h-4 w-4" alt="" />
            <span class="font-bold text-primary-font-dark">{{ ustadz }}</span>
          </div>
          <div class="h-full flex flex-row space-x-2 items-center">
            <img src="~/assets/svg/book.svg" class="h-6 w-6 mt-1" alt="" />
            <span
              class="font-normal text-primary-font-light text-sm line-clamp-2"
              >{{ title }}
            </span>
          </div>
          <div class="h-full flex flex-row space-x-2 items-center">
            <span class="font-medium text-xs text-primary-font-dark">{{
              address
            }}</span>
          </div>
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
  filters: {
    removeJam(val) {
      val = val.slice(0, -3)
      return val
    },
  },
  props: {
    jam: {
      type: String,
      default: '05:00:00',
    },
    ustadz: {
      type: String,
      default: null,
    },
    title: {
      type: String,
      default: null,
    },
    address: {
      type: String,
      default: null,
    },
  },
}
</script>

<style></style>
