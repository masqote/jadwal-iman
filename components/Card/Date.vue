<template>
  <div
    @mouseenter="bounce = true"
    @mouseleave="bounce = false"
    class="shadow-xl flex justify-center rounded-lg w-28 h-32 border bg-primary cursor-pointer"
    :class="{ 'transform scale-105': selected }"
  >
    <div class="flex w-full flex-col items-center overflow-visible">
      <div class="w-full text-lg text-center py-1 text-primary-font-light">
        <!-- Bulan -->
        {{ month }}
      </div>
      <div
        class="relative flex flex-col w-full h-full items-center justify-center bg-primary-light rounded-b-lg text-primary-font-dark"
      >
        <!-- <div class="absolute w-full h-full" v-show="selected">
          <img
            src="~/assets/svg/checked2.svg"
            class="w-7 h-7 absolute -translate-x-1/2 left-1/2 -bottom-4"
            alt=""
          />
        </div> -->
        <span class="text-5xl font-bold" :class="{ 'text-white': selected }">
          <!-- Tanggal -->
          {{ date | removeZero }}
        </span>
        <span class="text-sm text-primary-font -mt-1">
          <!-- Hari -->
          {{ day }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bounce: false,
    }
  },

  filters: {
    removeZero(val) {
      if (val[0] === '0') {
        return val[1]
      } else {
        return val
      }
    },
  },
  props: {
    month: {
      type: String,
      default: 'Januari',
    },
    date: {
      type: String,
      default: '28',
    },
    day: {
      type: String,
      default: 'Jumat',
    },
    selected: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style></style>
