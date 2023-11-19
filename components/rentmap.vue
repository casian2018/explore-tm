<script setup>
import { ref } from "vue";
const map = ref();
const location = ref({
  latitude: 45.75280124672338,
  longitude: 21.22888756076315,
  accuracy: 89,
});
const center = computed(() => [
  location.value.latitude,
  location.value.longitude,
]);

const trolt = ref([]);
const stands = ref([]);

const store = useAccountStore();

const { data: trotm } = await useFetch(
  "/etwow/json.php?auth=R4g6@iPn[,TyUN&location=timisoara"
);

const { data: parks } = await useFetch("/trotm/lista_stand.php");

onMounted(() => {
  if (process.server) return;
  trolt.value = JSON.parse(trotm.value);
  console.log(trolt.value);
  stands.value = JSON.parse(parks.value);
  console.log(stands.value);
});

setInterval(() => {
  if (process.server) return;
  if (!("geolocation" in navigator)) {
    console.log("Geo not available");
    return;
  }

  navigator.geolocation.getCurrentPosition(
    (pos) => {
      location.value = pos.coords;
      useAccountStore().setloc(pos.coords);
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

      <LMarker v-for="t in trolt" :key="t.scooter_id" :lat-lng="[t.lat, t.lng]">
        <LIcon
          icon-url="https://cdn-icons-png.flaticon.com/512/1023/1023346.png "
          :icon-size="[32, 32]"
        />
        <LPopup>
          <div class="text-black text-center">
            <p>
              {{
                store.ro
                  ? "Trotineta #" + t.scooter_id
                  : "Scooter #" + t.scooter_id
              }}
            </p>
            <p>
              {{
                store.ro
                  ? "Baterie: " + t.battery_lvl + "%"
                  : "Battery: " + t.battery_lvl + "%"
              }}
            </p>
            <p>{{ "Status: " + t.status }}</p>
          </div>
        </LPopup>
      </LMarker>

      <LMarker v-for="t in stands" :key="t.id_stand" :lat-lng="[t.lat, t.lng]">
        <LIcon
          icon-url="https://cdn-icons-png.flaticon.com/512/3124/3124420.png"
          :icon-size="[32, 32]"
        />
        <LPopup>
          <div class="text-black text-center">
            <p>
              {{ store.ro ? "Stand " + t.adresa : "Parking stand " + t.adresa }}
            </p>
          </div>
        </LPopup>
      </LMarker>
    </LMap>
  </div>
</template>
