<script setup lang="ts">
import { ref } from "vue";
import { Query } from "appwrite";
const map = ref();
const location = ref({
  latitude: 45.75280124672338,
  longitude: 21.22888756076315,
  accuracy: 89,
});
const center: any = computed(() => [
  location.value.latitude,
  location.value.longitude,
]);

const store = useAccountStore();
const points = ref<any>(undefined);

const client = useAppwrite();
client.databases
  .listDocuments("655831ac4075d3f13cae", "655865878f6ee4aa1aeb", [
    Query.limit(500),
  ])
  .then((response) => {
    console.log("points", response);
    points.value = response.documents;
  });

setInterval(() => {
  if (process.server) return;
  if (!("geolocation" in navigator)) {
    console.log("Geo not available");
    return;
  }

  // get position
  navigator.geolocation.getCurrentPosition(
    (pos) => {
      //console.log(pos);
      location.value = pos.coords;
      useAccountStore().setloc(pos.coords);
      //center.value = [pos.coords.latitude, pos.coords.longitude];
    },
    (err) => {
      console.log(err.message);
    }
  );
}, 250);
</script>

<template>
  <div class="fixed m-0 z-10 min-h-screen h-full w-full">
    <LMap ref="map" :zoom="15" :minZoom="8" :center="center" class="z-10">
      <LTileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&amp;copy; <a href="https://www.codeko.ro/">Codeko</a> Team'
        layer-type="base"
        name="OpenStreetMap"
      />

      <template v-if="location">
        <l-circle-marker :lat-lng="center" :fillOpacity="1" :radius="0.25" />
        <l-circle-marker :lat-lng="center" :radius="35" :stroke="true" />
      </template>

      <LMarker v-for="p in points" :key="p.name" :lat-lng="JSON.parse(p.gps)">
        <LIcon :icon-url="p.marker" :icon-size="[32, 32]" />
        <LPopup>
          <div class="text-black text-center" v-if="store.loc">
            <a
              :href="
                `https://www.google.com/maps/dir/` +
                store.loc.latitude +
                ',' +
                store.loc.longitude +
                '/' +
                p.name
              "
              target="_blank"
              >{{ p.name }}</a
            >
            <p>{{ p.description }}</p>
          </div>
        </LPopup>
      </LMarker>
    </LMap>
  </div>
</template>
