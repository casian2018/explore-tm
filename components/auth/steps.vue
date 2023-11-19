<script setup>
import logo from "@/assets/logo.png";
const store = useAccountStore();

function answer(key, value) {
  useAccount()
    .updatePrefs({ [key]: value })
    .then(() => {
      //if (key === "isRomanian") ro.value = boolean(value);
      //if(key !== "begin") answer("begin", false);

      store.updateprefs();
      store.tempLoad(true, 1000);
    });
}
</script>

<template>
  <div
    class="absolute grid place-items-center backdrop-blur-sm top-0 right-0 left-0 z-50 w-full inset-0 h-modal h-full justify-center items-center"
  >
    <div class="relative container m-auto px-6">
      <div class="m-auto md:w-7/12 py-6">
        <div class="rounded-xl bg-gray-800 mt-4 mb-24 shadow-xl overflow-y-auto">
          <div class="p-8">
            <div class="space-y-4">
              <img :src="logo" loading="lazy" class="w-52" />
              <div v-if="store.steps !== 7">
                <h2 class="mb-8 text-2xl text-white font-bold" v-if="!store.ro">
                  Complete your profile <br />
                  in order to explore the city.
                </h2>
                <h2 class="mb-8 text-2xl text-white font-bold" v-else>
                  Completează-ți profilul <br />
                  pentru a explora orașul!
                </h2>
              </div>
              <div v-else>
                <h2 class="mb-8 text-2xl text-white font-bold" v-if="store.ro">
                  Profilul a fost <br />
                  completat. Bun venit!
                </h2>
                <h2 class="mb-8 text-2xl text-white font-bold" v-else>
                  The profile was <br />
                  completed. Welcome!
                </h2>
              </div>
            </div>
            <div class="mt-10 grid space-y-4" v-if="!useAccountStore().loading">
              <div
                class="border rounded-md p-4 w-full mx-auto max-w-2xl text-white"
                v-if="store.steps === 0"
              >
                <h4 class="text-xl lg:text-2xl font-semibold">
                  Do you speak Romanian?
                </h4>

                <div>
                  <label
                    @click="answer('isRomanian', 'true')"
                    class="flex bg-gray-100 text-gray-700 rounded-md px-3 py-2 my-3 hover:bg-indigo-300 cursor-pointer"
                  >
                    <input type="radio" />
                    <i class="pl-2">{{ store.ro ? "Da" : "Yes" }}</i>
                  </label>

                  <label
                    @click="answer('isRomanian', 'false')"
                    class="flex bg-gray-100 text-gray-700 rounded-md px-3 py-2 my-3 hover:bg-indigo-300 cursor-pointer"
                  >
                    <input type="radio" />
                    <i class="pl-2">{{ store.ro ? "Nu" : "No" }}</i>
                  </label>
                </div>
              </div>

              <div
                class="border rounded-md p-4 w-full mx-auto max-w-2xl text-white"
                v-if="store.steps === 1"
              >
                <h4 class="text-xl lg:text-2xl font-semibold">
                  {{
                    store.ro
                      ? "Ai mai fost prin Timișoara?"
                      : "Have you ever been in Timișoara?"
                  }}
                </h4>

                <div>
                  <label
                    @click="answer('firstTime', 'true')"
                    class="flex bg-gray-100 text-gray-700 rounded-md px-3 py-2 my-3 hover:bg-indigo-300 cursor-pointer"
                  >
                    <input type="radio" />
                    <i class="pl-2">{{ store.ro ? "Da" : "Yes" }}</i>
                  </label>

                  <label
                    @click="answer('firstTime', 'false')"
                    class="flex bg-gray-100 text-gray-700 rounded-md px-3 py-2 my-3 hover:bg-indigo-300 cursor-pointer"
                  >
                    <input type="radio" />
                    <i class="pl-2">{{ store.ro ? "Nu" : "No" }}</i>
                  </label>
                </div>
              </div>

              <div
                class="border rounded-md p-4 w-full mx-auto max-w-2xl text-white"
                v-if="store.steps === 2"
              >
                <h4 class="text-xl lg:text-2xl font-semibold">
                  {{
                    store.ro
                      ? "Ce te atrage cel mai mult atunci când explorezi un oraș nou?"
                      : "What attracts you most when exploring a new city?"
                  }}
                </h4>

                <div>
                  <label
                    @click="answer('attractions', 'history')"
                    class="flex bg-gray-100 text-gray-700 rounded-md px-3 py-2 my-3 hover:bg-indigo-300 cursor-pointer"
                  >
                    <input type="radio" />
                    <i class="pl-2">{{
                      store.ro
                        ? "Istoria și arhitectura"
                        : "History and architecture"
                    }}</i>
                  </label>

                  <label
                    @click="answer('attractions', 'culture')"
                    class="flex bg-gray-100 text-gray-700 rounded-md px-3 py-2 my-3 hover:bg-indigo-300 cursor-pointer"
                  >
                    <input type="radio" />
                    <i class="pl-2">{{
                      store.ro
                        ? "Cultura locală și arta"
                        : "Local culture and art"
                    }}</i>
                  </label>

                  <label
                    @click="answer('attractions', 'events')"
                    class="flex bg-gray-100 text-gray-700 rounded-md px-3 py-2 my-3 hover:bg-indigo-300 cursor-pointer"
                  >
                    <input type="radio" />
                    <i class="pl-2">{{
                      store.ro
                        ? "Evenimente și activități sociale"
                        : "Social events and activities"
                    }}</i>
                  </label>

                  <label
                    @click="answer('attractions', 'green')"
                    class="flex bg-gray-100 text-gray-700 rounded-md px-3 py-2 my-3 hover:bg-indigo-300 cursor-pointer"
                  >
                    <input type="radio" />
                    <i class="pl-2">{{
                      store.ro
                        ? "Spații verzi și natură"
                        : "Green spaces and nature"
                    }}</i>
                  </label>
                </div>
              </div>

              <div
                class="border rounded-md p-4 w-full mx-auto max-w-2xl text-white"
                v-if="store.steps === 3"
              >
                <h4 class="text-xl lg:text-2xl font-semibold">
                  {{
                    store.ro
                      ? "Preferi să explorezi singur sau cu prietenii?"
                      : "Do you prefer to explore alone or with friends?"
                  }}
                </h4>

                <div>
                  <label
                    @click="answer('single', 'alone')"
                    class="flex bg-gray-100 text-gray-700 rounded-md px-3 py-2 my-3 hover:bg-indigo-300 cursor-pointer"
                  >
                    <input type="radio" />
                    <i class="pl-2">{{ store.ro ? "Singur" : "Alone" }}</i>
                  </label>

                  <label
                    @click="answer('single', 'friends')"
                    class="flex bg-gray-100 text-gray-700 rounded-md px-3 py-2 my-3 hover:bg-indigo-300 cursor-pointer"
                  >
                    <input type="radio" />
                    <i class="pl-2">{{
                      store.ro ? "Cu prietenii" : "With friends"
                    }}</i>
                  </label>

                  <label
                    @click="answer('single', 'family')"
                    class="flex bg-gray-100 text-gray-700 rounded-md px-3 py-2 my-3 hover:bg-indigo-300 cursor-pointer"
                  >
                    <input type="radio" />
                    <i class="pl-2">{{
                      store.ro ? "Cu familia" : "With family"
                    }}</i>
                  </label>
                </div>
              </div>

              <div
                class="border rounded-md p-4 w-full mx-auto max-w-2xl text-white"
                v-if="store.steps === 4"
              >
                <h4 class="text-xl lg:text-2xl font-semibold">
                  {{
                    store.ro
                      ? "Ce tip de activități îți place să faci în timpul liber?"
                      : "What kind of activities do you like to do in your free time?"
                  }}
                </h4>

                <div>
                  <label
                    @click="answer('activities', 'sport')"
                    class="flex bg-gray-100 text-gray-700 rounded-md px-3 py-2 my-3 hover:bg-indigo-300 cursor-pointer"
                  >
                    <input type="radio" />
                    <i class="pl-2">{{
                      store.ro
                        ? "Sport și activități în aer liber"
                        : "Sports and outdoor activities"
                    }}</i>
                  </label>

                  <label
                    @click="answer('activities', 'movies')"
                    class="flex bg-gray-100 text-gray-700 rounded-md px-3 py-2 my-3 hover:bg-indigo-300 cursor-pointer"
                  >
                    <input type="radio" />
                    <i class="pl-2">{{
                      store.ro
                        ? "Vizionarea de filme și seriale"
                        : "Watching movies and series"
                    }}</i>
                  </label>

                  <label
                    @click="answer('activities', 'books')"
                    class="flex bg-gray-100 text-gray-700 rounded-md px-3 py-2 my-3 hover:bg-indigo-300 cursor-pointer"
                  >
                    <input type="radio" />
                    <i class="pl-2">{{
                      store.ro ? "Cititul cărților" : "Reading books"
                    }}</i>
                  </label>

                  <label
                    @click="answer('activities', 'events')"
                    class="flex bg-gray-100 text-gray-700 rounded-md px-3 py-2 my-3 hover:bg-indigo-300 cursor-pointer"
                  >
                    <input type="radio" />
                    <i class="pl-2">{{
                      store.ro
                        ? "Participarea la evenimente culturale"
                        : "Participation in cultural events"
                    }}</i>
                  </label>
                </div>
              </div>

              <div
                class="border rounded-md p-4 w-full mx-auto max-w-2xl text-white"
                v-if="store.steps === 5"
              >
                <h4 class="text-xl lg:text-2xl font-semibold">
                  {{
                    store.ro
                      ? "Care este bugetul tău obișnuit pentru activități de divertisment în oraș?"
                      : "What is your typical budget for entertainment in the city?"
                  }}
                </h4>

                <div>
                  <label
                    @click="answer('budget', 'small')"
                    class="flex bg-gray-100 text-gray-700 rounded-md px-3 py-2 my-3 hover:bg-indigo-300 cursor-pointer"
                  >
                    <input type="radio" />
                    <i class="pl-2">{{
                      store.ro ? "Mic (sub 50 RON)" : "Small (under 10 EUR)"
                    }}</i>
                  </label>

                  <label
                    @click="answer('budget', 'medium')"
                    class="flex bg-gray-100 text-gray-700 rounded-md px-3 py-2 my-3 hover:bg-indigo-300 cursor-pointer"
                  >
                    <input type="radio" />
                    <i class="pl-2">{{
                      store.ro ? "Mediu (50-200 RON)" : "Medium (10-40 EUR)"
                    }}</i>
                  </label>

                  <label
                    @click="answer('budget', 'large')"
                    class="flex bg-gray-100 text-gray-700 rounded-md px-3 py-2 my-3 hover:bg-indigo-300 cursor-pointer"
                  >
                    <input type="radio" />
                    <i class="pl-2">{{
                      store.ro ? "Mare (peste 200 RON)" : "Large (over 40 RON)"
                    }}</i>
                  </label>
                </div>
              </div>

              <div
                class="border rounded-md p-4 w-full mx-auto max-w-2xl text-white"
                v-if="store.steps === 6"
              >
                <h4 class="text-xl lg:text-2xl font-semibold">
                  {{
                    store.ro
                      ? "În ce interval orar preferi să explorezi orașul?"
                      : "What time do you prefer to explore the city?"
                  }}
                </h4>

                <div>
                  <label
                    @click="answer('time', 'early')"
                    class="flex bg-gray-100 text-gray-700 rounded-md px-3 py-2 my-3 hover:bg-indigo-300 cursor-pointer"
                  >
                    <input type="radio" />
                    <i class="pl-2">{{
                      store.ro ? "Dimineața devreme" : "Early in the morning"
                    }}</i>
                  </label>

                  <label
                    @click="answer('time', 'daytime')"
                    class="flex bg-gray-100 text-gray-700 rounded-md px-3 py-2 my-3 hover:bg-indigo-300 cursor-pointer"
                  >
                    <input type="radio" />
                    <i class="pl-2">{{ store.ro ? "Ziua" : "Day" }}</i>
                  </label>

                  <label
                    @click="answer('time', 'evening')"
                    class="flex bg-gray-100 text-gray-700 rounded-md px-3 py-2 my-3 hover:bg-indigo-300 cursor-pointer"
                  >
                    <input type="radio" />
                    <i class="pl-2">{{
                      store.ro ? "Seara" : "In the evening"
                    }}</i>
                  </label>

                  <label
                    @click="answer('time', 'night')"
                    class="flex bg-gray-100 text-gray-700 rounded-md px-3 py-2 my-3 hover:bg-indigo-300 cursor-pointer"
                  >
                    <input type="radio" />
                    <i class="pl-2">{{ store.ro ? "Noaptea" : "The night" }}</i>
                  </label>
                </div>
              </div>

              <div class="grid place-items-center" v-if="store.steps === 7">
                <div class="relative">
                  <div class="absolute -inset-5">
                    <div
                      class="w-full h-full max-w-sm mx-auto lg:mx-0 opacity-30 blur-lg bg-gradient-to-r from-yellow-400 via-pink-500 to-green-600"
                    ></div>
                  </div>
                  <a
                    @click="answer('begin', 'true')"
                    title=""
                    class="relative z-10 inline-flex items-center justify-center w-full px-8 py-3 text-lg font-bold text-white transition-all duration-200 bg-gray-900 border-2 border-transparent sm:w-auto rounded-xl font-pj hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                    role="button"
                  >
                    {{ store.ro ? "Pornește ExploreTM" : "Open ExploreTM" }}
                  </a>
                </div>
              </div>
            </div>

            <div class="mt-10 grid space-y-4" v-else>
              <div class="grid place-items-center"><loading /></div>
            </div>

            <div class="mt-10 space-y-4 py-3 text-gray-400 text-center">
              <p class="text-xs">
                By proceeding, you agree to our
                <a href="/tos/" class="underline">Terms of Use</a>
                and confirm you have read our
                <a href="/tos/" class="underline"
                  >Privacy and Cookie Statement</a
                >.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
