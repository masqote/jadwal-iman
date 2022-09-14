<template>
  <div class="mb-24 animate-pulse">
    <div
      class="relative shadow-lg rounded-lg w-full cursor-pointer hover:opacity-80"
    >
      <div class="w-full h-72 rounded-xl bg-gray-400">
        <div class="h-full w-full"></div>
      </div>
      <div class="px-4 absolute w-full">
        <div class="bg-white w-full rounded-lg h-32 -mt-14 shadow-lg">
          <div class="px-2 py-2 flex flex-row h-full divide-x-2">
            <div class="w-3/12 flex justify-center h-full items-center">
              <span
                class="text-4xl font-bold text-center space-y tracking-wide px-2"
              >
              </span>
            </div>
            <div class="w-9/12 h-full px-2">
              <div class="space-y-2 h-full flex flex-col">
                <h1 class="text-md font-semibold line-clamp-1"></h1>
                <div>
                  <h2 class="text-sm">
                    <span class="text-primary"></span>
                  </h2>
                  <h2 class="text-sm">
                    <span class="text-primary"></span>
                  </h2>
                </div>
                <div class="flex flex-row items-center space-x-2">
                  <p class="text-xs line-clamp-2"></p>
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
}
</script>

<style></style>
