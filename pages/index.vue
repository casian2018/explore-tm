<script setup lang="ts">
import markerIcon from "@/assets/marker.png";
import logo from "@/assets/logo.png";
import { ref } from "vue";
import type { View } from "ol";
import type { ObjectEvent } from "ol/Object";

const accountStore = useAccountStore();

const center = ref([21.22888756076315, 45.75280124672338]);
const projection = ref("EPSG:4326");
const zoom = ref(15);
const rotation = ref(0);
const view = ref<View>();
const map = ref(null);
const position = ref([]);

const geoLocChange = (event: ObjectEvent) => {
  console.log("AAAAA", event);
  position.value = event.target.getPosition();
  view.value?.setCenter(event.target?.getPosition());
};
</script>

<template>
  <div v-if="accountStore.loading && accountStore.steps === 0 && accountStore.connected !== undefined">
    <div
      class="fixed grid place-items-center backdrop-blur-sm top-0 right-0 left-0 z-50 w-full inset-0 h-modal h-full justify-center items-center"
    >
      <div class="relative container m-auto px-6">
        <div class="m-auto">
          <div class="rounded-xl bg-gray-800 shadow-xl">
            <div class="p-8">
              <div class="space-y-4">
                <img :src="logo" class="w-52" />
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

  <ol-map
    :loadTilesWhileAnimating="true"
    :loadTilesWhileInteracting="true"
    style="height: 100vh"
    ref="map"
  >
    <ol-view
      ref="view"
      :center="center"
      :rotation="rotation"
      :zoom="zoom"
      :projection="projection"
    />

    <ol-tile-layer>
      <ol-source-osm />
    </ol-tile-layer>

    <ol-geolocation :projection="projection" @change:position="geoLocChange">
      <template>
        <ol-vector-layer :zIndex="2">
          <ol-source-vector>
            <ol-feature ref="positionFeature">
              <ol-geom-point :coordinates="position"></ol-geom-point>
              <ol-style>
                <ol-style-icon :src="markerIcon" :scale="0.1"></ol-style-icon>
              </ol-style>
            </ol-feature>
          </ol-source-vector>
        </ol-vector-layer>
      </template>
    </ol-geolocation>
  </ol-map>

  <navBottom />
</template>

<style scoped>
@import "vue3-openlayers/dist/vue3-openlayers.css";
</style>
