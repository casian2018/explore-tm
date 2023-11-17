<template>
    <!-- component -->
    <div class="w-10/12 mx-auto max-w-6xl">
      <div
        class="lg:col-start-2 col-span-12 lg:col-span-10 grid grid-cols-6 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 mx-auto"
      >
        <div class="p-4 col-span-6 md:col-span-2">
          <div class="grid grid-cols-5">
            <!-- Your existing tabs content -->
          </div>
        </div>
        <div class="p-4 col-span-6 md:col-span-4">
          <div class="mt-6 flex items-center justify-end gap-x-6">
            <button class="tablink" @click="openCity('PersonalInfo', 'orange')">
              Personal Info
            </button>
            <button class="tablink" @click="openCity('PaymentInfo', 'blue')">
              Payment Info
            </button>
            <button class="tablink" @click="openCity('History', 'red')">
              History
            </button>
            <button class="tablink" @click="openCity('Security', 'green')">
              Security
            </button>
            <button class="" @click="">Log Out</button>
          </div>
        </div>
      </div>
      <div class="flex items-center justify-center aling-midle">
        <!-- Your existing form fields and buttons -->
  
        <!-- Additional: Tabs Content -->
        <div id="History" class="tabcontent hidden">
          <h1>History</h1>
        </div>
  
        <div id="Security" class="tabcontent hidden">
          <h1>Sec</h1>
        </div>
  
        <div id="PaymentInfo" class="tabcontent hidden">
          <h1>Pay Info</h1>
        </div>
  
          <div id="PersonalInfo" class="tabcontent hidden w-1/2">
            <div class="  p-4 col-span-2 sm:col-span-1 md:col-span-1">
                <div class="col-span-1">
                  <label
                    for="first-name"
                    class="block text-sm font-medium leading-6 text-gray-900"
                    >First name 1</label
                  >
                  <div class="mt-2">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autocomplete="given-name"
                      class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div class="col-span-1">
                  <label
                    for="last-name"
                    class="block text-sm font-medium leading-6 text-gray-900"
                    >Last name</label
                  >
                  <div class="mt-2">
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      autocomplete="family-name"
                      class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
            </div>
            <div class="p-4 col-span-2 sm:col-span-1 md:col-span-1 -mt-2">
              <div class="col-span-1">
                <label
                  for="email"
                  class="block text-sm font-medium leading-6 text-gray-900"
                  >Email address</label
                >
                <div class="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autocomplete="email"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
            <div class="p-4 col-span-2 sm:col-span-1 md:col-span-1"></div>
  
            <div class="mt-6 flex items-center justify-end gap-x-6">
              <button
                type="button"
                class="text-sm font-semibold leading-6 text-gray-900"
              >
                Cancel
              </button>
              <button
                type="submit"
                class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
  </template>
  
  <script>
  export default {
    methods: {
      openCity(cityName, color) {
        const tabcontent = document.getElementsByClassName("tabcontent");
        for (let i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.display = "none";
        }
  
        const tablinks = document.getElementsByClassName("tablink");
        for (let i = 0; i < tablinks.length; i++) {
          tablinks[i].style.backgroundColor = "";
        }
  
        document.getElementById(cityName).style.display = "block";
        // This part seems unnecessary
        // this.$refs[cityName].style.backgroundColor = color;
      },
    },
    mounted() {
      this.openCity("History", "red"); // Set the default open tab
    },
  };
  </script>