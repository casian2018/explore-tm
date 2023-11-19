<script setup>
import logo from "@/assets/logo.png";
import { Query } from "appwrite";
const store = useAccountStore();
const { chat } = useChatgpt();
const load = ref(false);
const places = ref([]);
//const maximum = ref(5);

const details = ref("");

function parse(data) {
  try {
    places.value = JSON.parse(data).places;
    if (places.value === undefined) throw "error";
    console.log(places.value);
  } catch (e) {
    console.log(e);
    places.value = [];
    generate();
  }
}

// function view(){

//   let route = "https://www.google.com/maps/dir/"+ store.loc.latitude + "," + store.loc.longitude + "/";
//   places.value.forEach(element => {
//     route += element.name + "/"
//   });

//   window.open(route, '_blank').focus();

// }

function generate() {
  if (load.value) return;
  places.value = [];
  const client = useAppwrite();
  load.value = true;
  client.databases
    .listDocuments("655831ac4075d3f13cae", "655865878f6ee4aa1aeb", [
      Query.limit(500),
    ])
    .then((response) => {
      const prefs = store.prefs;

      for (let i = response.documents.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [response.documents[i], response.documents[j]] = [
          response.documents[j],
          response.documents[i],
        ];
      }

      let newArray = response.documents.slice(0, 50);

      let locations = "";
      newArray.forEach((element) => {
        locations += "[" + element.name + "@" + element.tags + "],";
      });

      console.log("gen", locations);
      const text =
        "The output should be ONLY the selected places in the JSON array with 'name' and 'gps' for each one, the json array is called '{'places'}' in the output, with no other messages/comments. THE ONLY OUTPUT IS THE JSON. Please consider the conditions: " +
        details.value +
        "." +
        "Have you ever been to Timișoara? " +
        prefs.firstTime +
        " What attracts you most when exploring a new city? " +
        prefs.attractions +
        " Do you prefer to explore alone or with friends? " +
        prefs.single +
        " What kind of activities do you enjoy in your free time? " +
        prefs.activities +
        " What is your typical budget for entertainment in the city? " +
        prefs.budget +
        " What time of day do you prefer to explore the city? " +
        prefs.time +
        ". Please 10 locations. Now, I will provide you with a list of places from Timișoara. select the places with the most close coordinates, depending on the time allocated and other conditions lower the maximum, conditions and names, please respect the maximum locations number, exclude places with 'Ghiseu*, TmVelo*, Statie*' in their name, and add them to the places of the output in the json array. The available locations are: " +
        locations;

      (async () => {
        const response = await chat(text);
        console.log(response);
        load.value = false;
        parse(response);
      })();
    });
}
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
              <a href="/explore"><img :src="logo" class="w-52" /></a>
              <div v-if="places.length === 0">
                <h2 class="mb-8 text-2xl text-white font-bold" v-if="store.ro">
                  Generează sugestii de <br /> transport
                </h2>
                <h2 class="mb-8 text-2xl text-white font-bold" v-else>
                  Generate transport <br /> suggestions
                </h2>
              </div>
            </div>

            <div v-if="places.length === 0">
              <div class="flex flex-col my-4 text-white">
                <textarea
                  name="input"
                  id="input"
                  rows="8"
                  maxlength="256"
                  required=""
                  v-model="details"
                  :readonly="load"
                  :placeholder="
                    store.ro
                      ? 'Descrie aici modelului de AI ce ai vrea să faci astăzi, pe unde ai vrea să umbli și cați bani ai vrea să strici! -- optional'
                      : 'Describe here to the AI model what you would like to do today, where you would like to walk and how much money you would like to waste! -- optional'
                  "
                  class="rounded-lg p-4 bg-black/5 border-2 border-solid border-black/10 font-mono font-medium text-sm"
                ></textarea>
              </div>

              <!--<select
                class="w-full py-3 px-4 mb-4 border bg-gray-800 text-white border-gray-400 rounded-lg focus:outline-none focus:border-green-500"
                v-model="maximum"
              >
                <option value="1">
                  {{ store.ro ? "Maxim" : "Maximum" }} 1
                  {{ store.ro ? "locatii" : "locations" }}
                </option>
                <option value="3">
                  {{ store.ro ? "Maxim" : "Maximum" }} 3
                  {{ store.ro ? "locatii" : "locations" }}
                </option>
                <option value="5">
                  {{ store.ro ? "Maxim" : "Maximum" }} 5
                  {{ store.ro ? "locatii" : "locations" }}
                </option>
                <option value="7">
                  {{ store.ro ? "Maxim" : "Maximum" }} 7
                  {{ store.ro ? "locatii" : "locations" }}
                </option>
              </select>-->

              <div class="grid place-items-center">
                <div class="relative">
                  <div class="absolute -inset-2.5">
                    <div
                      class="w-full h-full max-w-sm mx-auto lg:mx-0 opacity-30 blur-lg bg-gradient-to-r from-yellow-400 via-pink-500 to-green-600"
                    ></div>
                  </div>
                  <a
                    @click="generate()"
                    title=""
                    class="relative z-10 inline-flex items-center justify-center w-full px-8 py-3 text-lg font-bold text-white transition-all duration-200 bg-gray-900 border-2 border-transparent sm:w-auto rounded-xl font-pj hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                    role="button"
                  >
                    <loading v-if="load" />
                    <span v-else>{{
                      store.ro ? "Generează traseu" : "Generate route"
                    }}</span>
                  </a>
                </div>
              </div>
            </div>
            <div v-else>
              <div>
                <ul class="mt-8 space-y-3 font-medium">
                  <li
                    class="flex items-start lg:col-span-1"
                    v-for="place in places"
                    :key="place.name"
                  >
                    <div class="flex-shrink-0">
                      <svg
                        class="w-5 h-5 text-indigo-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <p class="ml-3 leading-5 text-gray-200">
                      <a
                        :href="
                          `https://www.google.com/maps/dir/` +
                          store.loc.latitude +
                          ',' +
                          store.loc.longitude +
                          '/' +
                          place.name
                        "
                        target="_blank"
                        >{{ place.name }}</a
                      >
                    </p>
                  </li>
                </ul>
              </div>

              <div class="grid place-items-center mt-8">
                <div class="relative">
                  <div class="absolute -inset-2.5">
                    <div
                      class="w-full h-full max-w-sm mx-auto lg:mx-0 opacity-30 blur-lg bg-gradient-to-r from-yellow-400 via-pink-500 to-green-600"
                    ></div>
                  </div>
                  <a
                    @click="generate()"
                    title=""
                    class="relative z-10 inline-flex items-center justify-center w-full px-8 py-3 text-lg font-bold text-white transition-all duration-200 bg-gray-900 border-2 border-transparent sm:w-auto rounded-xl font-pj hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                    role="button"
                  >
                    {{ store.ro ? "Regenerează" : "Regenerate" }}
                  </a>
                </div>
              </div>
            </div>

            <!--<div class="my-6 grid space-y-4" v-if="data === undefined">
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

                  
                </div>
              </div>
            </div>-->
          </div>
        </div>
      </div>
    </div>
  </div>

  <themap />

  <navBottom />
</template>
