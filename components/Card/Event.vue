<template>
  <div class="mb-24">
    <div
      class="relative shadow-lg rounded-lg w-full cursor-pointer hover:opacity-80"
    >
      <div class="w-full h-72 rounded-xl">
        <nuxt-img
          :src="`${$axios.defaults.baseURL}` + foto"
          class="h-full w-full object-cover object-top rounded-lg"
          alt=""
          sizes="sm:100vw"
        />
      </div>
      <div class="px-4 absolute w-full">
        <div class="bg-white w-full rounded-lg h-32 -mt-14 shadow-lg">
          <div class="px-2 py-2 flex flex-row h-full divide-x-2">
            <div class="w-3/12 flex justify-center h-full items-center">
              <span
                class="text-4xl font-bold text-center space-y tracking-wide px-2"
              >
                {{ $dayjs(start_date).format('DD MMM') }}
              </span>
            </div>
            <div class="w-9/12 h-full px-2">
              <div class="space-y-2 h-full flex flex-col">
                <h1 class="text-md font-semibold line-clamp-1">
                  {{ title }}
                </h1>
                <div>
                  <h2 class="text-sm">
                    <span class="text-primary">Start</span> :
                    {{ $dayjs(start_date).format('DD MMMM YYYY') }}
                  </h2>
                  <h2 class="text-sm">
                    <span class="text-primary">End</span> :
                    {{ $dayjs(end_date).format('DD MMMM YYYY') }}
                  </h2>
                </div>
                <div class="flex flex-row items-center space-x-2">
                  <img
                    src="~/assets/svg/location1.svg"
                    class="h-4 w-4 mt-1"
                    alt=""
                  />
                  <p class="text-xs line-clamp-2">
                    {{ address.name }} - {{ address.province.name }}
                  </p>
                </div>
              </div>
            </div>
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
  props: {
    foto: {
      type: String,
      default: null,
    },
    title: {
      type: String,
      default: null,
    },
    start_date: {
      type: String,
      default: null,
    },
    end_date: {
      type: String,
      default: null,
    },
    address: {
      type: Object,
      default: null,
    },
  },
}
</script>

<style></style>
