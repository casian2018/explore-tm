<script setup lang="ts">
const store = useAccountStore();
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
      this.$refs[cityName].style.backgroundColor = color; // Set the background color
    },
  },
  mounted() {
    this.openCity("History", "red"); // Set the default open tab
  },
};

</script>

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

          <a class="" href="/logout"><svg fill="#000000" height="20px" width="20px" version="1.1" id="Capa_1"
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
            </svg></a>
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
            <h2 class="text-2xl font-semibold mb-2" v-if="store.ro">Termeni și condiții</h2>
            <h2 class="text-2xl font-semibold mb-2" v-else>Terms and Conditions</h2>

            <h14 class="font-bold text-xl" v-if="store.ro">1. Acceptarea Termenilor:</h14>
            <h14 class="font-bold text-xl" v-else>1. Acceptance of Terms:</h14>
            <p v-if="store.ro"> - Prin utilizarea aplicației mobile Explore TM ("aplicația"), sunteți de acord să
              respectați acești Termeni și
              Condiții. </p>
            <p v-else> - By using the Explore TM mobile application ("the App"), you agree to abide by these Terms and
              Conditions. </p>

            <h14 class="font-bold text-xl" v-if="store.ro">2. Eligibilitatea utilizatorului:</h14>
            <h14 class="font-bold text-xl" v-else>2. User Eligibility:</h14>
            <p v-if="store.ro"> - Utilizatorii trebuie să aibă cel puțin 18 ani pentru a utiliza aplicația. Dacă aveți sub
              18 ani, puteți utiliza aplicația numai cu
              implicarea unui părinte sau tutore. </p>
            <p v-else> - Users must be at least 18 years old to use the App. If you are under 18, you may only use the App
              with
              the involvement of a parent or guardian. </p>

            <h14 class="font-bold text-xl" v-if="store.ro">3. Descrierea serviciului:</h14>
            <h14 class="font-bold text-xl" v-else>3. Service Description:</h14>
            <p v-if="store.ro"> - Explore TM oferă utilizatorilor o platformă pentru a explora orașul, a închiria
              biciclete sau scutere, a verifica sosirea autobuzului
              ori și navigați eficient. </p>
            <p v-else> - Explore TM provides a platform for users to explore the city, rent bikes or scooters, check bus
              arrival
              times, and navigate efficiently. </p>

            <h14 class="font-bold text-xl" v-if="store.ro">4. Informații despre cont:</h14>
            <h14 class="font-bold text-xl" v-else>4. Account Information:</h14>
            <p v-if="store.ro"> - Utilizatorii sunt responsabili pentru păstrarea confidențialității informațiilor
              contului lor. Sunteți de acord
              notifică imediat Explore TM cu privire la orice utilizare neautorizată a contului tău. </p>
            <p v-else> - Users are responsible for maintaining the confidentiality of their account information. You agree
              to
              notify Explore TM immediately of any unauthorized use of your account. </p>

            <h14 class="font-bold text-xl" v-if="store.ro">5. Instrucțiuni de utilizare:</h14>
            <h14 class="font-bold text-xl" v-else>5. Usage Guidelines:</h14>
            <p v-if="store.ro"> - Utilizatorii trebuie să utilizeze aplicația în mod responsabil și să respecte toate
              legile locale de circulație în timp ce navighează în oraș.
              Comportamentul imprudent sau nesigur este strict interzis.
            </p>
            <p v-else> - Users must use the App responsibly and adhere to all local traffic laws while navigating the
              city.
              Reckless or unsafe behavior is strictly prohibited.
            </p>

            <h14 class="font-bold text-xl" v-if="store.ro">6. Servicii de închiriere:</h14>
            <h14 class="font-bold text-xl" v-else>6. Rental Services:</h14>
            <p v-if="store.ro"> - Când închiriază biciclete sau scutere, utilizatorii sunt de acord să respecte regulile
              de circulație locale și să returneze vehiculul în
              conditie buna. Utilizatorii sunt responsabili pentru orice daune suferite în timpul perioadei de închiriere.
            </p>
            <p v-else> - When renting bikes or scooters, users agree to follow local traffic rules and return the vehicle
              in
              good condition. Users are responsible for any damages incurred during the rental period.</p>

            <h14 class="font-bold text-xl" v-if="store.ro">7. Ora de sosire autobuz:</h14>
            <h14 class="font-bold text-xl" v-else>7. Bus Arrival Times:</h14>
            <p v-if="store.ro"> - Orele de sosire a autobuzului furnizate în aplicație se bazează pe date în timp real,
              atunci când sunt disponibile. Explore TM nu este
              responsabil pentru inexactități sau întârzieri cauzate de circumstanțe neprevăzute.</p>
            <p v-else> - Bus arrival times provided in the App are based on real-time data when available. Explore TM is
              not
              responsible for inaccuracies or delays caused by unforeseen circumstances.</p>

            <h14 class="font-bold text-xl" v-if="store.ro">8. Date și confidențialitate:</h14>
            <h14 class="font-bold text-xl" v-else>8. Data and Privacy:</h14>
            <p v-if="store.ro"> - Explore TM apreciază confidențialitatea utilizatorilor. Colectarea și utilizarea
              informațiilor cu caracter personal sunt guvernate de noastre
              Politica de confidențialitate.</p>
            <p v-else> - Explore TM values user privacy. The collection and use of personal information are governed by
              our
              Privacy Policy.</p>

            <h14 class="font-bold text-xl" v-if="store.ro">9. Proprietatea intelectuală:</h14>
            <h14 class="font-bold text-xl" v-else>9. Intellectual Property:</h14>
            <p v-if="store.ro">- Tot conținutul și materialele disponibile în aplicație, inclusiv logo-urile, mărcile
              comerciale și informațiile, sunt
              proprietatea Explore TM și protejată de legile privind proprietatea intelectuală.</p>
            <p v-else>- All content and materials available on the App, including logos, trademarks, and information, are
              the
              property of Explore TM and protected by intellectual property laws.</p>

            <h14 class="font-bold text-xl" v-if="store.ro">10. Încetare:</h14>
            <h14 class="font-bold text-xl" v-else>10. Termination:</h14>
            <p v-if="store.ro"> - Explore TM își rezervă dreptul de a închide sau suspenda contul fără notificare
              prealabilă pentru încălcări
              din acești Termeni și condiții.</p>
            <p v-else> - Explore TM reserves the right to terminate or suspend your account without prior notice for
              violations
              of these Terms and Conditions.</p>

            <h14 class="font-bold text-xl" v-if="store.ro">11. Exonerare de garanție:</h14>
            <h14 class="font-bold text-xl" v-else>11. Disclaimer of Warranty:</h14>
            <p v-if="store.ro"> - Aplicația este furnizată „ca atare”, fără garanții de niciun fel, fie exprese, fie
              implicite. Explore TM face
              nu garantează acuratețea, fiabilitatea sau disponibilitatea aplicației.</p>
            <p v-else> - The App is provided "as is" without warranties of any kind, either expressed or implied. Explore
              TM does
              not guarantee the accuracy, reliability, or availability of the App.</p>


            <h14 class="font-bold text-xl" v-if="store.ro">12. Limitarea răspunderii:</h14>
            <h14 class="font-bold text-xl" v-else>12. Limitation of Liability:</h14>
            <p v-if="store.ro"> - Explore TM nu este responsabil pentru nicio daune directe, indirecte, incidentale,
              consecutive sau punitive
              care rezultă din utilizarea de către dvs. a aplicației.</p>
            <p v-else> - Explore TM is not liable for any direct, indirect, incidental, consequential, or punitive damages
              arising out of your use of the App.</p>

            <h14 class="font-bold text-xl" v-if="store.ro">13. Modificări ale Termenilor:</h14>
            <h14 class="font-bold text-xl" v-else>13. Changes to Terms:</h14>
            <p v-if="store.ro"> - Explore TM poate actualiza acești Termeni și Condiții în orice moment. Utilizatorii vor
              fi informați cu privire la orice semnificație
              modificări.</p>
            <p v-else> - Explore TM may update these Terms and Conditions at any time. Users will be notified of any
              significant
              changes.</p>

            <h14 class="font-bold text-xl" v-if="store.ro">14. Legea aplicabilă:</h14>
            <h14 class="font-bold text-xl" v-else>14. Governing Law:</h14>
            <p v-if="store.ro">- Acești Termeni și Condiții sunt guvernați și interpretați în conformitate cu legile dvs
              jurisdicție.</p>
            <p v-else>- These Terms and Conditions are governed by and construed in accordance with the laws of your
              jurisdiction.</p>
            <p v-if="store.ro">Folosind aplicația Explore TM, confirmați că ați citit, înțeles și sunteți de acord cu
              acești Termeni și
              Condiții.</p>
            <p v-else>By using the Explore TM App, you acknowledge that you have read, understood, and agree to these
              Terms and
              Conditions.</p>
          </section>

          <!-- Privacy Policy Section -->
          <section class="mt-8">
            <h2 class="text-2xl font-semibold mb-2" v-if="store.ro">Politica de confidențialitate</h2>

            <h2 class="text-2xl font-semibold mb-2">Privacy Policy</h2>

            <p class="text-lg" v-if="store.ro">
              <strong class="font-bold text-xl">Colectarea de informații:</strong> - Explore TM colectează anumite
              informații
              atunci când utilizați aplicația noastră, inclusiv, dar fără a se limita la informațiile dispozitivului dvs.,
              locația și modelele de utilizare.
            </p>
            <p class="text-lg" v-else>
              <strong class="font-bold text-xl">Information Collection:</strong> - Explore TM collects certain information
              when you use our App, including but not limited to your device information, location, and usage patterns.
            </p>
            <p class="text-lg" v-if="store.ro">
              <strong class="font-bold text-xl">Utilizarea datelor:</strong> - Utilizăm datele colectate în diverse
              scopuri,
              cum ar fi îmbunătățirea serviciilor noastre, furnizarea de conținut personalizat și analizarea
              comportamentului utilizatorilor pentru a îmbunătăți
              experiența utilizatorului.
            </p>
            <p class="text-lg" v-else>
              <strong class="font-bold text-xl">Data Usage:</strong> - We use the collected data for various purposes,
              such as improving our services, providing personalized content, and analyzing user behavior to enhance the
              user experience.
            </p>
            <p class="text-lg" v-if="store.ro">
              Prin utilizarea aplicației Explore TM, confirmați că ați citit, înțeles și sunteți de acord cu
              confidențialitatea noastră
              Politică.
            </p>
            <p class="text-lg" v-else>
              <strong class="font-bold text-xl">Data Usage:</strong> - We use the collected data for various purposes,
              such as improving our services, providing personalized content, and analyzing user behavior to enhance the
              user experience.
            </p>
          </section>

          <!-- Other Security Information Section -->
          <section class="mt-8">
            <h2 class="text-2xl font-semibold mb-2" v-if="store.ro">Alte informații de securitate</h2>
            <h2 class="text-2xl font-semibold mb-2" v-else>Other Security Information</h2>
            <p class="text-lg" v-if="store.ro">
              Conținut suplimentar legat de securitate poate fi adăugat aici. Aceasta poate include informații despre cont
              securitate, criptare a datelor etc.
            </p>
            <p class="text-lg" v-else>
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
              <label for="" class="text-gray-700" v-if="store.ro">Expirat</label>
              <label for="" class="text-gray-700" v-else>Expired</label>
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

  <div id="PersonalInfo" class="tabcontent">
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

</div></template>

