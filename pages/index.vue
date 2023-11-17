<script setup lang="ts">
import markerIcon from "@/assets/marker.png";
import { ref } from "vue";
import type { View } from "ol";
import type { ObjectEvent } from "ol/Object";

const center = ref([21.22888756076315, 45.75280124672338]);
const projection = ref("EPSG:4326");
const zoom = ref(18);
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
</template>

<style scoped>
@import "vue3-openlayers/dist/vue3-openlayers.css";
</style>
