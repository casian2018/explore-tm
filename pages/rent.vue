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
    <div class="relative container m-auto px-6 text-white">
      <div class="m-auto min-w-lg">
        <div class="rounded-xl bg-gray-800 shadow-xl">
            <div class="container mx-auto p-4 w-1/2 text-center">
      <h1 class="text-3xl font-bold mb-4" v-if="store.ro">Inchiriaza o bicicleta sau o trotineta</h1>
      <h1 class="text-3xl font-bold mb-4" v-else>Rent a Bike or Scooter</h1>
  
      <div class="mb-4 text-start" v-if="store.ro">
        <label class="text-gray-200">
          <input type="radio" v-model="selectedVehicle" value="bike" class="mr-2" /> Bicicleta
        </label>
        <br/>
        <label class="text-gray-200">
          <input type="radio" v-model="selectedVehicle" value="scooter" class="mr-2" /> Trotineta
        </label>
      </div>

      <!-- Step 1: Choose Your Ride -->
      <div class="mb-4 text-start" v-else>
        <label class="text-gray-200">
          <input type="radio" v-model="selectedVehicle" value="bike" class="mr-2" /> Bike
        </label>
        <br/>
        <label class="text-gray-200">
          <input type="radio" v-model="selectedVehicle" value="scooter" class="mr-2" /> Scooter
        </label>
      </div>

  
      <!-- Step 2: Location Map -->
      <div class="mb-8">
        
      </div>
  
      <!-- Step 3: Select a Vehicle -->
      <div v-if="selectedVehicle">
        <h2 class="text-2xl font-semibold mb-4">Available {{ selectedVehicle === 'bike' ? 'Bikes' : 'Scooters' }}</h2>
        <ul>
          <li v-for="vehicle in filteredVehicles" :key="vehicle.id" class="mb-2">
            <span class="mr-2">{{ vehicle.name }} - {{ vehicle.status }}</span>
            <!-- Add more details like battery level for scooters, etc. -->
            <button @click="reserveVehicle(vehicle)" class="bg-blue-500 text-white px-4 py-2 rounded">Rent</button>
          </li>
        </ul>
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

  <themap />

  <navBottom />
</template>
