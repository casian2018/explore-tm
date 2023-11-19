<script setup>
import logo from "@/assets/logo.png";
const store = useAccountStore();
</script>

<template>
  <!--<div
        class="fixed grid place-items-center backdrop-blur-sm top-0 right-0 left-0 z-50 w-full inset-0 h-modal h-full justify-center items-center">
        <div class="relative container m-auto px-6 text-white">
            <div class="m-auto min-w-lg">
                <div class="rounded-xl bg-gray-800 shadow-xl">
                    <div class="container mx-auto p-4 w-1/2 text-center">
                        <h1 class="text-3xl font-bold mb-4" v-if="store.ro">Inchiriaza o bicicleta sau o trotineta</h1>
                        <h1 class="text-3xl font-bold mb-4" v-else>Rent a Bike or Scooter</h1>

                        <div>
                            <div>
                                <label for="vehicleType">Select Vehicle Type:</label>
                                <select v-model="selectedVehicle" @change="loadVehicles" class="text-black">
                                    <option value="bike">Bike</option>
                                    <option value="scooter">Scooter</option>
                                </select>
                            </div>
                            <div>
                            </div>
                        </div>

                    </div>-->

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
                </div>
                </div>
            </div>
        </div>
    </div>-->

  <rentmap />

  <img
    :src="logo"
    class="absolute w-52 z-[70] shadow-lg bg-black bg-opacity-25 rounded-lg px-4 py-2 top-2.5 left-1/2 transform -translate-x-1/2 fixed"
  />

  <navBottom />
</template>
