<script setup>
import logo from "@/assets/logo.png";
import { Query } from "appwrite";
const store = useAccountStore();

const details = ref("");

function generate() {
  const client = useAppwrite();
  client.databases
    .listDocuments("655831ac4075d3f13cae", "655865878f6ee4aa1aeb", [
      Query.limit(100),
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

      let newArray = response.documents.slice(0, 25);

      let locations = "";
      newArray.forEach((element) => {
        locations += "[" + element.name + "@" + element.gps + "],";
      });

      console.log("gen", newArray, locations);
      const text =
        "I will give you some questions and answers so you will be able to create a pshichologic profile of the user, after that i will give you 5 green spaces from timisoara, 5 turistic points, 5 restaurants, 5 shops and i want you to create a itinierar using those. your output should be in the format of json, only json is accepted with no other message or comments, dirrectly the json. Do you speak romanian? " +
        store.ro +
        " Have you ever been in Timișoara? " +
        prefs.firstTime +
        " What attracts you most when exploring a new city? " +
        prefs.attractions +
        " Do you prefer to explore alone or with friends? " +
        prefs.single +
        " What kind of activities do you like to do in your free time? " +
        prefs.activities +
        " What is your typical budget for entertainment in the city? " +
        prefs.budget +
        " What time do you prefer to explore the city? " +
        prefs.time +
        ". The user conditions '" +
        details.value +
        "'. Next I'll give you 25 places from the city, you need to select 5 of those, please return in the json output the name of the place and the coords. Please exclude all the places that contain in the name Ghiseu. Please give the ouput in the json dirrectly, just the selected places in a array [] called 'places'. The places are: " +
        locations;

      getprompt(text).then((data) => {
        console.log(data);
      });
    });
}

async function getprompt(prompt) {
  const response = await useFetch("http://6558310948395767eb14.s.codeko.ro/", {
    method: "POST",
    cors: "no-cors",
    body: JSON.stringify({ prompt }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const json = await response.json();

  if (!json.ok || json.error) {
    alert(json.error);
  }

  return json.completion;
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
              <h2 class="mb-8 text-2xl text-white font-bold" v-if="store.ro">
                Crează o rută custom!
              </h2>
              <h2 class="mb-8 text-2xl text-white font-bold" v-else>
                Create a custom route!
              </h2>
            </div>

            <div class="flex flex-col my-4 text-white">
              <textarea
                name="input"
                id="input"
                rows="8"
                maxlength="256"
                required=""
                v-model="details"
                :placeholder="
                  store.ro
                    ? 'Descrie aici modelului de AI ce ai vrea să faci astăzi, pe unde ai vrea să umbli și cați bani ai vrea să strici! -- optional'
                    : 'Describe here to the AI model what you would like to do today, where you would like to walk and how much money you would like to waste! -- optional'
                "
                class="rounded-lg p-4 bg-black/5 border-2 border-solid border-black/10 font-mono font-medium text-sm"
              ></textarea>
            </div>

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
                  {{ store.ro ? "Generează traseu" : "Generate route" }}
                </a>
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
