<script setup lang="ts">
import logo from "@/assets/logo.png";
import { ref } from "vue";
import { Query } from "appwrite";

const store = useAccountStore();

const data: any = ref(undefined);
const type = ref(undefined);

const update = () => {
  if (process.server) return;
  console.log("updating stops");

  if (type.value === undefined) data.value = undefined;
  else {
    const client = useAppwrite();
    client.databases
      .listDocuments("655831ac4075d3f13cae", "655831bc803f82de39a5", [
        Query.equal("type", type.value),
      ])
      .then((response) => {
        console.log("stops", response);
        data.value = response.documents;
      });
  }
};

const select = (data: any) => {
  type.value = data;
  update();
};

onMounted(() => {
  update();
});
</script>

<template>
  <div
    class="fixed grid place-items-center backdrop-blur-sm top-0 right-0 left-0 z-50 w-full inset-0 h-modal h-full justify-center items-center"
  >
    <div class="relative container m-auto px-6">
      <div class="m-auto min-w-lg">
        <div class="rounded-xl bg-gray-800 shadow-xl">
          <div class="p-8">
            <div class="space-y-4">
              <a href="/route"><img :src="logo" class="w-52" /></a>
              <h2 class="mb-8 text-2xl text-white font-bold" v-if="store.ro">
                Alege modul de <br />
                transport în comun
              </h2>
              <h2 class="mb-8 text-2xl text-white font-bold" v-else>
                Choose the mode of <br />
                public transport
              </h2>
            </div>

            <div class="my-6 grid space-y-4" v-if="data === undefined">
              <div
                class="border rounded-md p-4 w-full mx-auto max-w-2xl text-white"
              >
                <h4 class="text-xl lg:text-2xl font-semibold">
                  {{
                    store.ro
                      ? "Cum te deplasezi prin oraș?"
                      : "How do you get around town?"
                  }}
                </h4>

                <div>
                  <label
                    @click="select('autobuz')"
                    class="flex bg-gray-100 text-gray-700 rounded-md px-3 py-2 my-3 hover:bg-indigo-300 cursor-pointer"
                  >
                    <input type="radio" />
                    <i class="pl-2">{{ store.ro ? "Autobuz" : "Bus" }}</i>
                  </label>

                  <label
                    @click="select('express')"
                    class="flex bg-gray-100 text-gray-700 rounded-md px-3 py-2 my-3 hover:bg-indigo-300 cursor-pointer"
                  >
                    <input type="radio" />
                    <i class="pl-2">{{
                      store.ro ? "Express" : "Express bus"
                    }}</i>
                  </label>

                  <label
                    @click="select('vaporetto')"
                    class="flex bg-gray-100 text-gray-700 rounded-md px-3 py-2 my-3 hover:bg-indigo-300 cursor-pointer"
                  >
                    <input type="radio" />
                    <i class="pl-2">{{
                      store.ro ? "Vaporetto" : "Vaporetto"
                    }}</i>
                  </label>

                  <label
                    @click="select('tramvaie')"
                    class="flex bg-gray-100 text-gray-700 rounded-md px-3 py-2 my-3 hover:bg-indigo-300 cursor-pointer"
                  >
                    <input type="radio" />
                    <i class="pl-2">{{ store.ro ? "Tramvaie" : "Trams" }}</i>
                  </label>

                  <label
                    @click="select('troleibuze')"
                    class="flex bg-gray-100 text-gray-700 rounded-md px-3 py-2 my-3 hover:bg-indigo-300 cursor-pointer"
                  >
                    <input type="radio" />
                    <i class="pl-2">{{
                      store.ro ? "Troleibuze" : "Trolley"
                    }}</i>
                  </label>
                </div>
              </div>
            </div>
            <div class="my-6 grid space-y-4" v-else>
              <div
                class="border rounded-md p-4 w-full mx-auto max-w-2xl text-white"
              >
                <h4 class="text-xl lg:text-2xl font-semibold">
                  <p v-if="store.ro">Trasee {{ type }}</p>
                  <div v-else>
                    <p v-if="type === 'autobuz'">Bus routes</p>
                    <p v-else-if="type === 'express'">
                      Express bus routes
                    </p>
                    <p v-else-if="type === 'vaporetto'">
                      Vaporetto routes
                    </p>
                    <p v-else-if="type === 'tramvaie'">Tram routes</p>
                    <p v-else-if="type === 'troleibuze'">Trolley</p>
                  </div>
                </h4>

                <div>
                  <!--<label
                    class="flex bg-gray-100 text-gray-700 rounded-md px-3 py-2 my-3 hover:bg-indigo-300 cursor-pointer"
                    v-for="stop in stops.data"
                    :key="stop.$id"
                  >
                    <input type="radio" />
                    <i class="pl-2"># {{ stop.name }}</i>
                  </label>-->

                  <select
                    class="w-full py-3 px-4 border border-gray-400 bg-gray-800 mt-3 rounded-lg focus:outline-none focus:border-green-500"
                  >
                    <option value="default">
                      {{ store.ro ? "Selectează" : "Select" }}
                    </option>
                    <option v-for="stop in data" :value="stop.name">
                      {{ stop.name }}
                    </option>
                  </select>
                </div>
              </div>

              <a href="/route" class="font-medium cursor-pointer text-white">
                &lt; go back.</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <themap />

  <navBottom />
</template>
