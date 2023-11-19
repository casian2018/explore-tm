<script setup>
import logo from "@/assets/logo.png";

const email = ref("");
const pass = ref("");
const error = ref();

function login(email, pass) {
  const result = useAccount().loginUser(email, pass);
  result.then((data) => {
    if (data.error !== undefined) {
      console.log(data.error);
      if (data.error.toString().includes("blocked"))
        error.value = "The current user has been blocked.";
      else error.value = data.error.message;
    } else {
      console.log(data.data);
      if(!process.server) window.location.reload();
    }
  });
}

function register(email, pass) {
  const result = useAccount().registerUser(email, pass);
  result.then((data) => {
    if (data.error !== undefined) {
      console.log(data.error);
      error.value = data.error.message;
    } else {
      console.log(data.data);
      login(email, pass);
    }
  });
}
</script>

<template>
  <div
    class="absolute grid place-items-center backdrop-blur-sm top-0 right-0 left-0 z-50 w-full inset-0 h-modal h-full justify-center items-center"
  >
    <div class="relative container m-auto px-6">
      <div class="m-auto md:w-7/12">
        <div class="rounded-xl bg-gray-800 mt-4 mb-24 shadow-xl overflow-y-auto">
          <div class="p-8">
            <div class="space-y-4">
              <img :src="logo" class="w-52" />
              <h2 class="mb-8 text-2xl text-white font-bold">
                Log in to explore <br />
                the city of Timișoara.
              </h2>
            </div>
            <div class="mt-10 grid space-y-4">
              <div class="mb-1">
                <label for="email" class="block mb-2 text-sm text-gray-200"
                  >Email Address</label
                >
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="you@company.com"
                  v-model="email"
                  required
                  class="w-full px-3 py-2 placeholder-gray-300 text-gray-200 border border-gray-300 bg-gray-800 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                />
              </div>
              <div class="mb-2">
                <label for="email" class="block mb-2 text-sm text-gray-200"
                  >Password</label
                >
                <input
                  type="password"
                  name="pass"
                  id="pass"
                  v-model="pass"
                  required
                  class="w-full px-3 py-2 placeholder-gray-300 text-gray-200 border border-gray-300 bg-gray-800 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                />
              </div>

              <p
                v-if="error != undefined"
                class="text-red-500 my-6 font-bold text-center max-w-md"
              >
                {{ error }}
              </p>

              <button
                @click="login(email, pass)"
                class="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100"
              >
                <div
                  class="relative flex items-center space-x-4 justify-center"
                >
                  <span
                    class="block w-max font-semibold tracking-wide text-white text-sm transition duration-300 group-hover:text-blue-600 sm:text-base"
                    >Login
                  </span>
                </div>
              </button>

              <button
                @click="register(email, pass)"
                class="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100"
              >
                <div
                  class="relative flex items-center space-x-4 justify-center"
                >
                  <span
                    class="block w-max font-semibold tracking-wide text-white text-sm transition duration-300 group-hover:text-blue-600 sm:text-base"
                    >Register
                  </span>
                </div>
              </button>
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
