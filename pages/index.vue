<script setup lang="ts">
import logo from "@/assets/logo.png";
const accountStore = useAccountStore();
</script>

<template>
  <div
    v-if="
      (accountStore.loading &&
        accountStore.steps === 0 &&
        accountStore.connected !== undefined) ||
      accountStore.loadacc
    "
  >
    <div
      class="fixed grid place-items-center backdrop-blur-sm top-0 right-0 left-0 z-50 w-full inset-0 h-modal h-full justify-center items-center"
    >
      <div class="relative container m-auto px-6">
        <div class="m-auto">
          <div class="rounded-xl bg-gray-800 shadow-xl">
            <div class="p-8">
              <div class="space-y-4">
                <a href="/"><img :src="logo" class="w-52" /></a>
                <h2 class="mb-8 text-2xl text-white font-bold">
                  The experience is <br />
                  loading.
                </h2>
              </div>
              <div class="mt-10 grid space-y-4">
                <loading />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <authLogin v-if="accountStore.connected === undefined" />
    <authSteps
      v-else-if="
        accountStore.connected !== undefined && accountStore.steps !== 14
      "
    />
  </div>

  <img
    :src="logo"
    v-if="
      !(
        (accountStore.loading &&
          accountStore.steps === 0 &&
          accountStore.connected !== undefined) ||
        accountStore.loadacc ||
        accountStore.steps !== 14
      )
    "
    class="absolute w-52 z-[70] shadow-lg bg-black bg-opacity-25 rounded-lg px-4 py-2 top-2.5 left-1/2 transform -translate-x-1/2 fixed"
  />

  <themap />

  <navBottom v-if="accountStore.steps === 14" />
</template>

<style scoped>
@import "vue3-openlayers/dist/vue3-openlayers.css";
</style>
