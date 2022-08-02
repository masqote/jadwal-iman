<template>
  <div>
    <h1 class="py-6 flex flex-col">
      <span class="text-5xl pl-6 text-primary">Berita</span>
      <span class="text-base pl-7 text-primary-light"
        >Cari Berita Islam Terkini</span
      >
    </h1>

    <div class="relative px-4">
      <div
        class="flex absolute inset-y-0 left-0 items-center pl-7 pointer-events-none"
      >
        <svg
          aria-hidden="true"
          class="w-5 h-5 text-gray-500 dark:text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          ></path>
        </svg>
      </div>
      <input
        type="search"
        class="block p-3 pl-10 w-full text-sm text-gray-900 outline-none bg-gray-50 rounded-lg border border-gray-300 focus:ring-1 ring-primary dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Cari Berita..."
        autocomplete="off"
      />
    </div>

    <div class="mt-4">
      <VueSlickCarousel v-bind="settings">
        <div v-for="x in 7" :key="x">
          <NuxtLink
            :to="{
              name: 'berita-slug',
              params: { slug: x },
            }"
          >
            <div
              class="mx-2 rounded-3xl h-52 overflow-hidden relative bg-black"
            >
              <nuxt-img
                src="/blog.jpg"
                class="h-full w-full object-cover object-center opacity-60"
                alt=""
                sizes="sm:100vw"
              />
              <div class="absolute top-36 left-2 right-2 px-4 rounded-lg">
                <h3 class="text-base text-white line-clamp-2 drop-shadow-xl">
                  12 Jadwal kajian dilokasi anda asdsada asdasdsad asdasdas
                  asdasdas dasdsadsadas adsadasdasdsad sadsada asdsadas
                  asdasdsadasda
                </h3>
              </div>
            </div>
          </NuxtLink>
        </div>
      </VueSlickCarousel>
    </div>

    <div class="mt-8">
      <div>
        <h2 class="text-lg px-3 mb-1 text-primary">List Berita</h2>
      </div>
      <div class="mx-3 grid grid-cols-2 gap-2 relative">
        <NuxtLink
          :to="{
            name: 'berita-slug',
            params: { slug: 'asd' },
          }"
        >
          <div
            class="rounded-lg h-auto overflow-hidden shadow-lg hover:opacity-80 cursor-pointer"
          >
            <nuxt-img
              src="/tahun_baru_islam.jpg"
              class="h-40 w-full object-cover object-center"
              alt=""
              sizes="sm:100vw"
            />
            <div class="mb-10">
              <h3 class="text-sm px-3 pt-2 line-clamp-3">
                Pengertian dan Jadwal ANBK 2022, Yuk cari tahu!
              </h3>
            </div>

            <div class="flex items-end text-xs absolute bottom-0 p-2">
              <span
                class="bg-primary-light p-1 rounded px-2 text-primary-font-light"
                >Sejarah</span
              >
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>

    <div class="invisible mt-10">.</div>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  name: 'Berita',
  components: { VueSlickCarousel },
  data() {
    return {
      settings: {
        dots: false,
        arrows: false,
        centerMode: true,
        centerPadding: '20px',
        focusOnSelect: false,
        infinite: true,
        slidesToShow: 1,
        speed: 200,
      },
    }
  },
}
</script>
