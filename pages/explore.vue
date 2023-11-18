<script setup>
import logo from "@/assets/logo.png";
const store = useAccountStore();
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
                Crează o rută personalizată!
              </h2>
              <h2 class="mb-8 text-2xl text-white font-bold" v-else>
                Create a custom route!
              </h2>
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
