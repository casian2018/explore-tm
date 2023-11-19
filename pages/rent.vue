<script setup>
import logo from "@/assets/logo.png";
const store = useAccountStore();
import inanim from "@/assets/in.mp4";
import outanim from "@/assets/out.mp4";

const status = ref(false);
const load = ref(false);

function open() {
  console.log("open");
  status.value = true;
  load.value = true;
  setTimeout(() => {
    load.value = false;
  }, 11000);
}

function close() {
  console.log("close");
  status.value = false;
  load.value = true;
  setTimeout(() => {
    load.value = false;
  }, 11000);
}
</script>

<template>
  <rentmap v-if="!load" />
  <div v-else class="flex items-center justify-center h-screen">
    <video type="video/mp4" autoplay v-if="status">
      <source :src="inanim" type="video/mp4" />
    </video>
    <video type="video/mp4" v-if="!status">
      <source :src="outanim" type="video/mp4" />
    </video>
  </div>

  <img
    :src="logo"
    class="absolute w-52 z-[70] shadow-lg bg-black bg-opacity-25 rounded-lg px-4 py-2 top-2.5 left-1/2 transform -translate-x-1/2 fixed"
  />

  <div
    class="absolute z-[70] bottom-24 left-1/2 transform -translate-x-1/2 fixed grid place-items-center mt-8"
  >
    <div class="relative">
      <div class="absolute -inset-5">
        <div
          class="w-full h-full max-w-sm mx-auto lg:mx-0 opacity-30 blur-lg bg-gradient-to-r from-yellow-400 via-pink-500 to-green-600"
        ></div>
      </div>
      <a
        title=""
        v-if="load"
        class="relative z-10 inline-flex items-center justify-center w-full px-8 py-3 text-lg font-bold text-white transition-all duration-200 bg-gray-900 border-2 border-transparent sm:w-auto rounded-xl font-pj hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
        role="button"
      >
        <loading />
      </a>
      <a
        @click="open()"
        title=""
        v-else-if="!status"
        class="relative z-10 inline-flex items-center justify-center w-full px-8 py-3 text-lg font-bold text-white transition-all duration-200 bg-gray-900 border-2 border-transparent sm:w-auto rounded-xl font-pj hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
        role="button"
      >
        {{ store.ro ? "Deschide stand" : "Open parking stand" }}
      </a>
      <a
        @click="close()"
        title=""
        v-else-if="status"
        class="relative z-10 inline-flex items-center justify-center w-full px-8 py-3 text-lg font-bold text-white transition-all duration-200 bg-gray-900 border-2 border-transparent sm:w-auto rounded-xl font-pj hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
        role="button"
      >
        {{ store.ro ? "Inchide stand" : "Close parking stand" }}
      </a>
    </div>
  </div>

  <navBottom />
</template>
