<template>
  <NuxtLink
    :to="{
      name: 'detail-kajian-ustadz-date-slug',
      params: { ustadz: ustadz, date: date, slug: slug },
    }"
  >
    <div
      class="rounded-lg overflow-hidden shadow-lg cursor-pointer hover:opacity-90"
    >
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
              <span class="font-bold text-primary-font-dark line-clamp-1"
                >{{ gelar }} {{ ustadz }}</span
              >
            </div>
            <div class="h-full flex flex-row space-x-2 items-center">
              <img src="~/assets/svg/book.svg" class="h-6 w-6 mt-1" alt="" />
              <span
                class="font-normal text-primary-font-light text-sm line-clamp-2"
                >{{ title }}
              </span>
            </div>
            <div class="h-full flex flex-row space-x-2 items-center">
              <span
                class="font-medium text-xs text-primary-font-dark line-clamp-1"
                >{{ address }} - {{ province }}</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script>
export default {
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
    date: {
      type: String,
      default: null,
    },
    slug: {
      type: String,
      default: null,
    },
    province: {
      type: String,
      default: null,
    },
    gender: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {}
  },

  computed: {
    gelar() {
      return this.gender === 1 ? 'Ustadz' : 'Ustadzah'
    },
  },
}
</script>

<style></style>
