<template>
  <!-- component -->
  <div class="w-10/12 mx-auto max-w-6xl">
    <div
      class="lg:col-start-2 col-span-12 lg:col-span-10 grid grid-cols-6 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 mx-auto">
      <div class="p-4 col-span-6 md:col-span-2">
        <div class="grid grid-cols-5">
          <!-- Your existing tabs content -->
        </div>
      </div>
      <div class="p-4 col-span-6 md:col-span-4">
        <div class="mt-6 -mb-8 flex items-center justify-end gap-x-6">
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
          <button class="" @click=""><svg fill="#000000" height="20px" width="20px" version="1.1" id="Capa_1"
              xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 384.971 384.971"
              xml:space="preserve">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <g>
                  <g id="Sign_Out">
                    <path
                      d="M180.455,360.91H24.061V24.061h156.394c6.641,0,12.03-5.39,12.03-12.03s-5.39-12.03-12.03-12.03H12.03 C5.39,0.001,0,5.39,0,12.031V372.94c0,6.641,5.39,12.03,12.03,12.03h168.424c6.641,0,12.03-5.39,12.03-12.03 C192.485,366.299,187.095,360.91,180.455,360.91z">
                    </path>
                    <path
                      d="M381.481,184.088l-83.009-84.2c-4.704-4.752-12.319-4.74-17.011,0c-4.704,4.74-4.704,12.439,0,17.179l62.558,63.46H96.279 c-6.641,0-12.03,5.438-12.03,12.151c0,6.713,5.39,12.151,12.03,12.151h247.74l-62.558,63.46c-4.704,4.752-4.704,12.439,0,17.179 c4.704,4.752,12.319,4.752,17.011,0l82.997-84.2C386.113,196.588,386.161,188.756,381.481,184.088z">
                    </path>
                  </g>
                </g>
              </g>
            </svg></button>
        </div>
      </div>
    </div>
    <div class="flex items-center justify-center aling-midle">
      <!-- Your existing form fields and buttons -->

      <!-- Additional: Tabs Content -->
      <div id="History" class="tabcontent hidden">
        <div class="flex flex-col justify-center items-center">
          <h1 class="text-2xl font-semibold text-gray-700 text-center mt-4">History</h1>
          <div
            class="relative flex flex-col items-center rounded-[10px] border-[1px] border-gray-200 w-[576px] mx-auto p-4 bg-white bg-clip-border shadow-md shadow-[#F3F3F3] dark:border-[#ffffff33] dark:!bg-navy-800  dark:shadow-none">
            <div
              class="flex h-full w-full items-start justify-between rounded-md border-[1px] border-[transparent] dark:hover:border-white/20 bg-white px-3 py-[20px] transition-all duration-150 hover:border-gray-200 dark:!bg-navy-800 dark:hover:!bg-navy-700">
              <div class="flex items-center gap-3">
                <div class="flex h-16 w-16 items-center justify-center">
                  <img class="h-full w-full rounded-xl"
                    src="https://horizon-tailwind-react-corporate-7s21b54hb-horizon-ui.vercel.app/static/media/Nft1.0fea34cca5aed6cad72b.png"
                    alt="" />
                </div>
                <div class="flex flex-col">
                  <h5 class="text-base font-bold text-navy-700 ">
                    Colorful Heaven
                  </h5>
                  <p class="mt-1 text-sm font-normal text-gray-600">
                    Mark Benjamin
                  </p>
                </div>
              </div>
              <div class="mt-1 flex items-center justify-center text-navy-700 ">
                <div>
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512" height="1em"
                    width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z">
                    </path>
                  </svg>
                </div>
                <div class="ml-1 flex items-center text-sm font-bold text-navy-700 ">
                  <p> </p>
                  0.4<p class="ml-1">ETH</p>
                </div>
                <div class="ml-2 flex items-center text-sm font-normal text-gray-600 ">
                  <p>30s</p>
                  <p class="ml-1">ago</p>
                </div>
              </div>
            </div>
            <div
              class="flex h-full w-full items-start justify-between rounded-md border-[1px] border-[transparent] dark:hover:border-white/20 bg-white px-3 py-[20px] transition-all duration-150 hover:border-gray-200 dark:!bg-navy-800 dark:hover:!bg-navy-700">
              <div class="flex items-center gap-3">
                <div class="flex h-16 w-16 items-center justify-center">
                  <img class="h-full w-full rounded-xl"
                    src="https://horizon-tailwind-react-corporate-7s21b54hb-horizon-ui.vercel.app/static/media/Nft6.9ff5403226e81a6fd390.png"
                    alt="" />
                </div>
                <div class="flex flex-col">
                  <h5 class="text-base font-bold text-navy-700 ">
                    3D Cubes Art
                  </h5>
                  <p class="mt-1 text-sm font-normal text-gray-600">
                    Esthera Jackson
                  </p>
                </div>
              </div>
              <div class="mt-1 flex items-center justify-center text-navy-700 ">
                <div>
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512" height="1em"
                    width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z">
                    </path>
                  </svg>
                </div>
                <div class="ml-1 flex items-center text-sm font-bold text-navy-700 ">
                  <p> </p>
                  0.4<p class="ml-1">ETH</p>
                </div>
                <div class="ml-2 flex items-center text-sm font-normal text-gray-600 ">
                  <p>30s</p>
                  <p class="ml-1">ago</p>
                </div>
              </div>
            </div>
            <div
              class="flex h-full w-full items-start justify-between rounded-md border-[1px] border-[transparent] dark:hover:border-white/20 bg-white px-3 py-[20px] transition-all duration-150 hover:border-gray-200 dark:!bg-navy-800 dark:hover:!bg-navy-700">
              <div class="flex items-center gap-3">
                <div class="flex h-16 w-16 items-center justify-center">
                  <img class="h-full w-full rounded-xl"
                    src="https://horizon-tailwind-react-corporate-7s21b54hb-horizon-ui.vercel.app/static/media/Nft4.5fc37877b25c9fb9a52d.png"
                    alt="" />
                </div>
                <div class="flex flex-col">
                  <h5 class="text-base font-bold text-navy-700 ">
                    Swipe Circles
                  </h5>
                  <p class="mt-1 text-sm font-normal text-gray-600">
                    Peter Will
                  </p>
                </div>
              </div>
              <div class="mt-1 flex items-center justify-center text-navy-700 ">
                <div>
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512" height="1em"
                    width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z">
                    </path>
                  </svg>
                </div>
                <div class="ml-1 flex items-center text-sm font-bold text-navy-700 ">
                  <p> </p>
                  0.4<p class="ml-1">ETH</p>
                </div>
                <div class="ml-2 flex items-center text-sm font-normal text-gray-600 ">
                  <p>4h</p>
                  <p class="ml-1">ago</p>
                </div>
              </div>
            </div>
            <div
              class="flex h-full w-full items-start justify-between rounded-md border-[1px] border-[transparent] dark:hover:border-white/20 bg-white px-3 py-[20px] transition-all duration-150 hover:border-gray-200 dark:!bg-navy-800 dark:hover:!bg-navy-700">
              <div class="flex items-center gap-3">
                <div class="flex h-16 w-16 items-center justify-center">
                  <img class="h-full w-full rounded-xl"
                    src="https://horizon-tailwind-react-corporate-7s21b54hb-horizon-ui.vercel.app/static/media/Nft3.3b3e6a4b3ada7618de6c.png"
                    alt="" />
                </div>
                <div class="flex flex-col">
                  <h5 class="text-base font-bold text-navy-700 ">
                    Swipe Circles
                  </h5>
                  <p class="mt-1 text-sm font-normal text-gray-600">
                    Manny Gates
                  </p>
                </div>
              </div>
              <div class="mt-1 flex items-center justify-center text-navy-700 ">
                <div>
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512" height="1em"
                    width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z">
                    </path>
                  </svg>
                </div>
                <div class="ml-1 flex items-center text-sm font-bold text-navy-700 ">
                  <p> </p>
                  0.4<p class="ml-1">ETH</p>
                </div>
                <div class="ml-2 flex items-center text-sm font-normal text-gray-600 ">
                  <p>30s</p>
                  <p class="ml-1">ago</p>
                </div>
              </div>
            </div>
            <div
              class="flex h-full w-full items-start justify-between rounded-md border-[1px] border-[transparent] dark:hover:border-white/20 bg-white px-3 py-[20px] transition-all duration-150 hover:border-gray-200 dark:!bg-navy-800 dark:hover:!bg-navy-700">
              <div class="flex items-center gap-3">
                <div class="flex h-16 w-16 items-center justify-center">
                  <img class="h-full w-full rounded-xl"
                    src="https://horizon-tailwind-react-corporate-7s21b54hb-horizon-ui.vercel.app/static/media/Nft5.62dbaf7dd91b4180035c.png"
                    alt="" />
                </div>
                <div class="flex flex-col">
                  <h5 class="text-base font-bold text-navy-700 ">
                    Mesh Gradients
                  </h5>
                  <p class="mt-1 text-sm font-normal text-gray-600">
                    Will Smith
                  </p>
                </div>
              </div>
              <div class="mt-1 flex items-center justify-center text-navy-700 ">
                <div>
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512" height="1em"
                    width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z">
                    </path>
                  </svg>
                </div>
                <div class="ml-1 flex items-center text-sm font-bold text-navy-700 ">
                  <p> </p>
                  0.4<p class="ml-1">ETH</p>
                </div>
                <div class="ml-2 flex items-center text-sm font-normal text-gray-600 ">
                  <p>30s</p>
                  <p class="ml-1">ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="Security" class="tabcontent hidden mb-24">
        <div class="mx-[20%] mt-4">
          <h1 class="text-2xl font-bold mb-4 text-center">Security</h1>

          <!-- Terms Section -->
          <section>
            <h2 class="text-2xl font-semibold mb-2">Terms and Conditions</h2>
            <h14 class="font-bold text-xl">1. Acceptance of Terms:</h14>
            <p> - By using the Explore TM mobile application ("the App"), you agree to abide by these Terms and
              Conditions. </p>

            <h14 class="font-bold text-xl">2. User Eligibility:</h14>
            <p> - Users must be at least 18 years old to use the App. If you are under 18, you may only use the App with
              the involvement of a parent or guardian. </p>

            <h14 class="font-bold text-xl">3. Service Description:</h14>
            <p> - Explore TM provides a platform for users to explore the city, rent bikes or scooters, check bus arrival
              times, and navigate efficiently. </p>

            <h14 class="font-bold text-xl">4. Account Information:</h14>
            <p> - Users are responsible for maintaining the confidentiality of their account information. You agree to
              notify Explore TM immediately of any unauthorized use of your account. </p>

            <h14 class="font-bold text-xl">5. Usage Guidelines:</h14>
            <p> - Users must use the App responsibly and adhere to all local traffic laws while navigating the city.
              Reckless or unsafe behavior is strictly prohibited.
            </p>
            <h14 class="font-bold text-xl">6. Rental Services:</h14>
            <p></p> - When renting bikes or scooters, users agree to follow local traffic rules and return the vehicle in
            good condition. Users are responsible for any damages incurred during the rental period.

            <h14 class="font-bold text-xl">7. Bus Arrival Times:</h14>
            <p> - Bus arrival times provided in the App are based on real-time data when available. Explore TM is not
              responsible for inaccuracies or delays caused by unforeseen circumstances.</p>

            <h14 class="font-bold text-xl">8. Data and Privacy:</h14>
            <p> - Explore TM values user privacy. The collection and use of personal information are governed by our
              Privacy Policy.</p>

            <h14 class="font-bold text-xl">9. Intellectual Property:</h14>
            <p>- All content and materials available on the App, including logos, trademarks, and information, are the
              property of Explore TM and protected by intellectual property laws.</p>

            <h14 class="font-bold text-xl">10. Termination:</h14>
            <p> - Explore TM reserves the right to terminate or suspend your account without prior notice for violations
              of these Terms and Conditions.</p>

            <h14 class="font-bold text-xl">11. Disclaimer of Warranty:</h14>
            <p> - The App is provided "as is" without warranties of any kind, either expressed or implied. Explore TM does
              not guarantee the accuracy, reliability, or availability of the App.</p>

            <h14 class="font-bold text-xl">12. Limitation of Liability:</h14>
            <p> - Explore TM is not liable for any direct, indirect, incidental, consequential, or punitive damages
              arising out of your use of the App.</p>

            <h14 class="font-bold text-xl">13. Changes to Terms:</h14>
            <p> - Explore TM may update these Terms and Conditions at any time. Users will be notified of any significant
              changes.</p>

            <h14 class="font-bold text-xl">14. Governing Law:</h14>
            <p>- These Terms and Conditions are governed by and construed in accordance with the laws of your
              jurisdiction.</p>

            <p>By using the Explore TM App, you acknowledge that you have read, understood, and agree to these Terms and
              Conditions.</p>
          </section>

          <!-- Privacy Policy Section -->
          <section class="mt-8">
            <h2 class="text-2xl font-semibold mb-2">Privacy Policy</h2>

            <p class="text-lg">
              <strong class="font-bold text-xl">Information Collection:</strong> - Explore TM collects certain information
              when you use our App, including but not limited to your device information, location, and usage patterns.
            </p>

            <p class="text-lg">
              <strong class="font-bold text-xl">Data Usage:</strong> - We use the collected data for various purposes,
              such as improving our services, providing personalized content, and analyzing user behavior to enhance the
              user experience.
            </p>

            <!-- Include more detailed content for your Privacy Policy -->

            <p class="text-lg">
              By using the Explore TM App, you acknowledge that you have read, understood, and agree to our Privacy
              Policy.
            </p>
          </section>

          <!-- Other Security Information Section -->
          <section class="mt-8">
            <h2 class="text-2xl font-semibold mb-2">Other Security Information</h2>
            <p class="text-lg">
              Additional security-related content can be added here. This might include information about account
              security, data encryption, etc.
            </p>
          </section>

          <!-- Feel free to add more sections as needed -->
        </div>

      </div>

      <div id="PaymentInfo" class="tabcontent hidden">
        <h1 class="text-2xl font-semibold text-gray-700 text-center mt-4">Payment Info</h1>
        <div class="">
          <div class="my-3">
            <input type="text"
              class="block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
              placeholder="Card holder" maxlength="22" x-model="cardholder" />
          </div>
          <div class="my-3">
            <input type="text"
              class="block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
              placeholder="Card number" x-model="cardNumber" x-on:keydown="format()" x-on:keyup="isValid()"
              maxlength="19" />
          </div>
          <div class="my-3 flex flex-col">
            <div class="mb-2">
              <label for="" class="text-gray-700">Expired</label>
            </div>
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-2">
              <select name="" id=""
                class="form-select appearance-none block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
                x-model="expired.month">
                <option value="" selected disabled>MM</option>
                <option value="01">01</option>
                <option value="02">02</option>
                <option value="03">03</option>
                <option value="04">04</option>
                <option value="05">05</option>
                <option value="06">06</option>
                <option value="07">07</option>
                <option value="08">08</option>
                <option value="09">09</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
              </select>
              <select name="" id=""
                class="form-select appearance-none block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
                x-model="expired.year">
                <option value="" selected disabled>YY</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
                <option value="2026">2026</option>
              </select>
              <input type="text"
                class="block w-full col-span-2 px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
                placeholder="Security code" maxlength="3" x-model="securityCode" x-on:focus="card = 'back'"
                x-on:blur="card = 'front'" />
            </div>
          </div>
          <div class="mt-6 flex items-center justify-end gap-x-6">
            <button type="button" class="text-sm font-semibold leading-6 text-gray-900">
              Cancel
            </button>
            <button type="submit"
              class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div id="PersonalInfo" class="tabcontent hidden">
    <h1 class="text-2xl font-semibold text-gray-700 text-center mt-4">Personal Info</h1>
    <form class="p-4 col-span-2 sm:col-span-1 md:col-span-1 mx-[30%]">
      <div class="col-span-1">
        <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">First name 1</label>
        <div class="mt-2">
          <input type="text" name="first-name" id="first-name" autocomplete="given-name" maxlength="40"
            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </div>
      </div>
      <div class="col-span-1">
        <label for="last-name" class="block text-sm font-medium leading-6 text-gray-900">Last name</label>
        <div class="mt-2">
          <input type="text" name="last-name" id="last-name" autocomplete="family-name"
            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </div>
      </div>
      <div class="col-span-1">
        <div class="col-span-1">
          <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
          <div class="mt-2">
            <input id="email" name="email" type="email" autocomplete="email"
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>
      </div>
      <div class="col-span-1">
        <div class="col-span-1">
          <label for="phone" class="block text-sm font-medium leading-6 text-gray-900">Phone Number</label>
          <div class="mt-2">
            <input id="phone" name="phone" type="phone" autocomplete="phone"
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>
      </div>
      <div class="col-span-1">
        <div class="col-span-1">
          <label for="CI" class="block text-sm font-medium leading-6 text-gray-900">Numerical Personal Number</label>
          <div class="mt-2">
            <input id="CI" name="CI" type="number" autocomplete=""
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>
      </div>
      <div class="col-span-1">
        <div class="col-span-1">
          <label for="STPT Card Number" class="block text-sm font-medium leading-6 text-gray-900">STPT Card Number</label>
          <div class="mt-2">
            <input id="number" name="STPT Card Number" type="phone" autocomplete=""
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>
      </div>
      <div class="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" class="text-sm font-semibold leading-6 text-gray-900">
          Cancel
        </button>
        <button type="submit"
          class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          Save
        </button>
      </div>
    </form>

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
