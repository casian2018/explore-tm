<script setup>
import logo from "@/assets/logo.png";

const ro = ref(false);

const index = ref(0);

function check() {
  useAccount()
    .prefs()
    .then((data) => {
      console.log(data);
      if (data.isRomanian === undefined) index.value = 0;
      else {
        ro.value = boolean(data.isRomanian);
        if (data.firstTime === undefined) index.value = 1;
        else if (data.attractions === undefined) index.value = 2;
        else if (data.single === undefined) index.value = 3;
        else if (data.activities === undefined) index.value = 4;
        else if (data.budget === undefined) index.value = 5;
        else if (data.time === undefined) index.value = 6;
        else index.value = 7;
      }
    });
}

check();

function boolean(value) {
  if (typeof value === "string") {
    switch (value.toLowerCase().trim()) {
      case "true":
      case "yes":
      case "1":
        return true;
      case "false":
      case "no":
      case "0":
      case null:
        return false;
      default:
        return Boolean(value);
    }
  } else {
    return Boolean(value);
  }
}

function answer(key, value) {
  useAccount()
    .updatePrefs({ [key]: value })
    .then(() => {
      if (key === "isRomanian") ro.value = boolean(value);
      check();
    });
}
</script>

<template>
  <div
    class="fixed grid place-items-center backdrop-blur-sm top-0 right-0 left-0 z-50 w-full inset-0 h-modal h-full justify-center items-center"
  >
    <div class="relative container m-auto px-6">
      <div class="m-auto md:w-7/12">
        <div class="rounded-xl bg-gray-800 shadow-xl">
          <div class="p-8">
            <div class="space-y-4">
              <img :src="logo" loading="lazy" class="w-52" />
              <h2 class="mb-8 text-2xl text-white font-bold" v-if="!ro">
                Complete your profile <br />
                in order to explore the city.
              </h2>
              <h2 class="mb-8 text-2xl text-white font-bold" v-else>
                Completează-ți profilul <br />
                pentru a explora orașul!
              </h2>
            </div>
            <div class="mt-10 grid space-y-4">
              <div
                class="border rounded-md p-4 w-full mx-auto max-w-2xl text-white"
                v-if="index === 0"
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
                    <i class="pl-2">Yes</i>
                  </label>

                  <label
                    @click="answer('isRomanian', 'false')"
                    class="flex bg-gray-100 text-gray-700 rounded-md px-3 py-2 my-3 hover:bg-indigo-300 cursor-pointer"
                  >
                    <input type="radio" />
                    <i class="pl-2">No</i>
                  </label>
                </div>
              </div>

              <div
                class="border rounded-md p-4 w-full mx-auto max-w-2xl text-white"
                v-if="index === 1"
              >
                <h4 class="text-xl lg:text-2xl font-semibold">
                  {{
                    ro
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
                    <i class="pl-2">Yes</i>
                  </label>

                  <label
                    @click="answer('firstTime', 'false')"
                    class="flex bg-gray-100 text-gray-700 rounded-md px-3 py-2 my-3 hover:bg-indigo-300 cursor-pointer"
                  >
                    <input type="radio" />
                    <i class="pl-2">No</i>
                  </label>
                </div>
              </div>

              <div
                class="border rounded-md p-4 w-full mx-auto max-w-2xl text-white"
                v-if="index === 2"
              >
                <h4 class="text-xl lg:text-2xl font-semibold">
                  {{
                    ro
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
                      ro ? "Istoria și arhitectura" : "History and architecture"
                    }}</i>
                  </label>

                  <label
                    @click="answer('attractions', 'culture')"
                    class="flex bg-gray-100 text-gray-700 rounded-md px-3 py-2 my-3 hover:bg-indigo-300 cursor-pointer"
                  >
                    <input type="radio" />
                    <i class="pl-2">{{
                      ro ? "Cultura locală și arta" : "Local culture and art"
                    }}</i>
                  </label>

                  <label
                    @click="answer('attractions', 'events')"
                    class="flex bg-gray-100 text-gray-700 rounded-md px-3 py-2 my-3 hover:bg-indigo-300 cursor-pointer"
                  >
                    <input type="radio" />
                    <i class="pl-2">{{
                      ro
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
                      ro ? "Spații verzi și natură" : "Green spaces and nature"
                    }}</i>
                  </label>
                </div>
              </div>

              <div
                class="border rounded-md p-4 w-full mx-auto max-w-2xl text-white"
                v-if="index === 3"
              >
                <h4 class="text-xl lg:text-2xl font-semibold">
                  {{
                    ro
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
                    <i class="pl-2">{{ ro ? "Singur" : "Alone" }}</i>
                  </label>

                  <label
                    @click="answer('single', 'friends')"
                    class="flex bg-gray-100 text-gray-700 rounded-md px-3 py-2 my-3 hover:bg-indigo-300 cursor-pointer"
                  >
                    <input type="radio" />
                    <i class="pl-2">{{
                      ro ? "Cu prietenii" : "With friends"
                    }}</i>
                  </label>

                  <label
                    @click="answer('single', 'family')"
                    class="flex bg-gray-100 text-gray-700 rounded-md px-3 py-2 my-3 hover:bg-indigo-300 cursor-pointer"
                  >
                    <input type="radio" />
                    <i class="pl-2">{{ ro ? "Cu familia" : "With family" }}</i>
                  </label>
                </div>
              </div>

              <div
                class="border rounded-md p-4 w-full mx-auto max-w-2xl text-white"
                v-if="index === 4"
              >
                <h4 class="text-xl lg:text-2xl font-semibold">
                  {{
                    ro
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
                      ro
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
                      ro
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
                      ro ? "Cititul cărților" : "Reading books"
                    }}</i>
                  </label>

                  <label
                    @click="answer('activities', 'events')"
                    class="flex bg-gray-100 text-gray-700 rounded-md px-3 py-2 my-3 hover:bg-indigo-300 cursor-pointer"
                  >
                    <input type="radio" />
                    <i class="pl-2">{{
                      ro
                        ? "Participarea la evenimente culturale"
                        : "Participation in cultural events"
                    }}</i>
                  </label>
                </div>
              </div>

              <div
                class="border rounded-md p-4 w-full mx-auto max-w-2xl text-white"
                v-if="index === 5"
              >
                <h4 class="text-xl lg:text-2xl font-semibold">
                  {{
                    ro
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
                      ro ? "Mic (sub 50 RON)" : "Small (under 10 EUR)"
                    }}</i>
                  </label>

                  <label
                    @click="answer('budget', 'medium')"
                    class="flex bg-gray-100 text-gray-700 rounded-md px-3 py-2 my-3 hover:bg-indigo-300 cursor-pointer"
                  >
                    <input type="radio" />
                    <i class="pl-2">{{
                      ro ? "Mediu (50-200 RON)" : "Medium (10-40 EUR)"
                    }}</i>
                  </label>

                  <label
                    @click="answer('budget', 'large')"
                    class="flex bg-gray-100 text-gray-700 rounded-md px-3 py-2 my-3 hover:bg-indigo-300 cursor-pointer"
                  >
                    <input type="radio" />
                    <i class="pl-2">{{
                      ro ? "Mare (peste 200 RON)" : "Large (over 40 RON)"
                    }}</i>
                  </label>
                </div>
              </div>

              <div
                class="border rounded-md p-4 w-full mx-auto max-w-2xl text-white"
                v-if="index === 6"
              >
                <h4 class="text-xl lg:text-2xl font-semibold">
                  {{
                    ro
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
                      ro ? "Dimineața devreme" : "Early in the morning"
                    }}</i>
                  </label>

                  <label
                    @click="answer('time', 'daytime')"
                    class="flex bg-gray-100 text-gray-700 rounded-md px-3 py-2 my-3 hover:bg-indigo-300 cursor-pointer"
                  >
                    <input type="radio" />
                    <i class="pl-2">{{ ro ? "Ziua" : "Day" }}</i>
                  </label>

                  <label
                    @click="answer('time', 'evening')"
                    class="flex bg-gray-100 text-gray-700 rounded-md px-3 py-2 my-3 hover:bg-indigo-300 cursor-pointer"
                  >
                    <input type="radio" />
                    <i class="pl-2">{{ ro ? "Seara" : "In the evening" }}</i>
                  </label>

                  <label
                    @click="answer('time', 'night')"
                    class="flex bg-gray-100 text-gray-700 rounded-md px-3 py-2 my-3 hover:bg-indigo-300 cursor-pointer"
                  >
                    <input type="radio" />
                    <i class="pl-2">{{ ro ? "Noaptea" : "The night" }}</i>
                  </label>
                </div>
              </div>

              <div
                class="border rounded-md p-4 w-full mx-auto max-w-2xl text-white"
                v-if="index === 7"
              >
                <h4 class="text-xl lg:text-2xl font-semibold">
                  {{ ro ? "Momentan atat..." : "At the moment that's all..." }}
                </h4>
              </div>
            </div>
            <div class="mt-10 space-y-4 py-3 text-gray-400 text-center">
              <p class="text-xs">
                By proceeding, you agree to our
                <a href="/tos/" class="underline">Terms of Use</a>
                and confirm you have read our
                <a href="/privacy/" class="underline"
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
