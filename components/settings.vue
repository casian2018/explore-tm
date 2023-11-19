<script setup>
import { ref } from 'vue';
const store = useAccountStore();

const selectedTab = ref("Personal")
const changeTab = (tab) => {
  selectedTab.value = tab;
}

const ci = ref("")
const stpt = ref("");

onMounted(() => {
  useAccount().prefs().then((prefs) => {
    if (prefs === undefined) return;
    if (prefs.ci !== undefined) ci.value = prefs.ci;
    if (prefs.stpt !== undefined) stpt.value = prefs.stpt;
  })
})


function save() {
  useAccount().updatePrefs({ ["ci"]: ci.value }).then(() => {
    useAccount().updatePrefs({ ["stpt"]: stpt.value }).then(() => {
      store.updateprefs();
    })
  })
}

const promise = useAccount().currentUser().updatePassword('');

promise.then(function (response) {
    console.log(response); // Success
}, function (error) {
    console.log(error); // Failure
});

// const selectedTab = ref('History'); // Initialize with the default tab

// const openCity = function (cityName, color) {
// const tabcontent = document.getElementsByClassName("tabcontent");
// for (let i = 0; i < tabcontent.length; i++) {
// tabcontent[i].style.display = "none";
// }

// const tablinks = document.getElementsByClassName("tablink");
// for (let i = 0; i < tablinks.length; i++) {
// tablinks[i].style.backgroundColor = "";
// }

// document.getElementById(cityName).style.display = "block";
// selectedTab.value = cityName;
// };

// const setTabBackgroundColor = (cityName, color) => {
//   const button = document.getElementById(cityName);
//   if (button) {
//     button.style.backgroundColor = color;
//   }
// };

// const mounted = () => {
//   openCity(selectedTab.value, "red"); // Set the default open tab
// };

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
          <button class="tablink" @click="changeTab('Personal')">
            Personal Info
          </button>
          <button class="tablink" @click="changeTab('Security')">
            TOS and Privacy
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
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>

  <div class="flex items-center justify-center aling-middle">
    <div id="Security" v-if="selectedTab === 'Security'" class="mb-24">
      <div class="mx-[20%] mt-4">
        <h1 class="text-2xl font-bold mb-4 text-center">Security</h1>

        <!-- Terms Section -->
        <section>
          <h2 class="text-2xl font-semibold mb-2" v-if="store.ro">Termeni și condiții</h2>
          <h2 class="text-2xl font-semibold mb-2" v-else>Terms and Conditions</h2>

          <h14 class="font-bold text-xl" v-if="store.ro">1. Acceptarea Termenilor:</h14>
          <h14 class="font-bold text-xl" v-else>1. Acceptance of Terms:</h14>
          <p v-if="store.ro"> Prin utilizarea aplicației mobile Explore TM ("aplicația"), sunteți de acord să
            respectați acești Termeni și
            Condiții. </p>
          <p v-else> By using the Explore TM mobile application ("the App"), you agree to abide by these Terms and
            Conditions. </p>

          <h14 class="font-bold text-xl" v-if="store.ro">2. Eligibilitatea utilizatorului:</h14>
          <h14 class="font-bold text-xl" v-else>2. User Eligibility:</h14>
          <p v-if="store.ro"> Utilizatorii trebuie să aibă cel puțin 18 ani pentru a utiliza aplicația. Dacă aveți sub
            18 ani, puteți utiliza aplicația numai cu
            implicarea unui părinte sau tutore. </p>
          <p v-else> Users must be at least 18 years old to use the App. If you are under 18, you may only use the App
            with
            the involvement of a parent or guardian. </p>

          <h14 class="font-bold text-xl" v-if="store.ro">3. Descrierea serviciului:</h14>
          <h14 class="font-bold text-xl" v-else>3. Service Description:</h14>
          <p v-if="store.ro"> Explore TM oferă utilizatorilor o platformă pentru a explora orașul, a închiria
            biciclete sau scutere, a verifica sosirea autobuzului
            ori și navigați eficient. </p>
          <p v-else> Explore TM provides a platform for users to explore the city, rent bikes or scooters, check bus
            arrival
            times, and navigate efficiently. </p>

          <h14 class="font-bold text-xl" v-if="store.ro">4. Informații despre cont:</h14>
          <h14 class="font-bold text-xl" v-else>4. Account Information:</h14>
          <p v-if="store.ro"> Utilizatorii sunt responsabili pentru păstrarea confidențialității informațiilor
            contului lor. Sunteți de acord
            notifică imediat Explore TM cu privire la orice utilizare neautorizată a contului tău. </p>
          <p v-else> Users are responsible for maintaining the confidentiality of their account information. You agree
            to
            notify Explore TM immediately of any unauthorized use of your account. </p>

          <h14 class="font-bold text-xl" v-if="store.ro">5. Instrucțiuni de utilizare:</h14>
          <h14 class="font-bold text-xl" v-else>5. Usage Guidelines:</h14>
          <p v-if="store.ro"> Utilizatorii trebuie să utilizeze aplicația în mod responsabil și să respecte toate
            legile locale de circulație în timp ce navighează în oraș.
            Comportamentul imprudent sau nesigur este strict interzis.
          </p>
          <p v-else> Users must use the App responsibly and adhere to all local traffic laws while navigating the
            city.
            Reckless or unsafe behavior is strictly prohibited.
          </p>

          <h14 class="font-bold text-xl" v-if="store.ro">6. Servicii de închiriere:</h14>
          <h14 class="font-bold text-xl" v-else>6. Rental Services:</h14>
          <p v-if="store.ro"> Când închiriază biciclete sau scutere, utilizatorii sunt de acord să respecte regulile
            de circulație locale și să returneze vehiculul în
            conditie buna. Utilizatorii sunt responsabili pentru orice daune suferite în timpul perioadei de închiriere.
          </p>
          <p v-else> When renting bikes or scooters, users agree to follow local traffic rules and return the vehicle
            in
            good condition. Users are responsible for any damages incurred during the rental period.</p>

          <h14 class="font-bold text-xl" v-if="store.ro">7. Ora de sosire autobuz:</h14>
          <h14 class="font-bold text-xl" v-else>7. Bus Arrival Times:</h14>
          <p v-if="store.ro"> Orele de sosire a autobuzului furnizate în aplicație se bazează pe date în timp real,
            atunci când sunt disponibile. Explore TM nu este
            responsabil pentru inexactități sau întârzieri cauzate de circumstanțe neprevăzute.</p>
          <p v-else> Bus arrival times provided in the App are based on real-time data when available. Explore TM is
            not
            responsible for inaccuracies or delays caused by unforeseen circumstances.</p>

          <h14 class="font-bold text-xl" v-if="store.ro">8. Date și confidențialitate:</h14>
          <h14 class="font-bold text-xl" v-else>8. Data and Privacy:</h14>
          <p v-if="store.ro"> Explore TM apreciază confidențialitatea utilizatorilor. Colectarea și utilizarea
            informațiilor cu caracter personal sunt guvernate de noastre
            Politica de confidențialitate.</p>
          <p v-else> Explore TM values user privacy. The collection and use of personal information are governed by
            our
            Privacy Policy.</p>

          <h14 class="font-bold text-xl" v-if="store.ro">9. Proprietatea intelectuală:</h14>
          <h14 class="font-bold text-xl" v-else>9. Intellectual Property:</h14>
          <p v-if="store.ro"> Tot conținutul și materialele disponibile în aplicație, inclusiv logo-urile, mărcile
            comerciale și informațiile, sunt
            proprietatea Explore TM și protejată de legile privind proprietatea intelectuală.</p>
          <p v-else> All content and materials available on the App, including logos, trademarks, and information, are
            the
            property of Explore TM and protected by intellectual property laws.</p>

          <h14 class="font-bold text-xl" v-if="store.ro">10. Încetare:</h14>
          <h14 class="font-bold text-xl" v-else>10. Termination:</h14>
          <p v-if="store.ro"> Explore TM își rezervă dreptul de a închide sau suspenda contul fără notificare
            prealabilă pentru încălcări
            din acești Termeni și condiții.</p>
          <p v-else> Explore TM reserves the right to terminate or suspend your account without prior notice for
            violations
            of these Terms and Conditions.</p>

          <h14 class="font-bold text-xl" v-if="store.ro">11. Exonerare de garanție:</h14>
          <h14 class="font-bold text-xl" v-else>11. Disclaimer of Warranty:</h14>
          <p v-if="store.ro"> Aplicația este furnizată „ca atare”, fără garanții de niciun fel, fie exprese, fie
            implicite. Explore TM face
            nu garantează acuratețea, fiabilitatea sau disponibilitatea aplicației.</p>
          <p v-else> The App is provided "as is" without warranties of any kind, either expressed or implied. Explore
            TM does
            not guarantee the accuracy, reliability, or availability of the App.</p>


          <h14 class="font-bold text-xl" v-if="store.ro">12. Limitarea răspunderii:</h14>
          <h14 class="font-bold text-xl" v-else>12. Limitation of Liability:</h14>
          <p v-if="store.ro"> Explore TM nu este responsabil pentru nicio daune directe, indirecte, incidentale,
            consecutive sau punitive
            care rezultă din utilizarea de către dvs. a aplicației.</p>
          <p v-else> Explore TM is not liable for any direct, indirect, incidental, consequential, or punitive damages
            arising out of your use of the App.</p>

          <h14 class="font-bold text-xl" v-if="store.ro">13. Modificări ale Termenilor:</h14>
          <h14 class="font-bold text-xl" v-else>13. Changes to Terms:</h14>
          <p v-if="store.ro"> Explore TM poate actualiza acești Termeni și Condiții în orice moment. Utilizatorii vor
            fi informați cu privire la orice semnificație
            modificări.</p>
          <p v-else> Explore TM may update these Terms and Conditions at any time. Users will be notified of any
            significant
            changes.</p>

          <h14 class="font-bold text-xl" v-if="store.ro">14. Legea aplicabilă:</h14>
          <h14 class="font-bold text-xl" v-else>14. Governing Law:</h14>
          <p v-if="store.ro"> Acești Termeni și Condiții sunt guvernați și interpretați în conformitate cu legile dvs
            jurisdicție.</p>
          <p v-else> These Terms and Conditions are governed by and construed in accordance with the laws of your
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
            <strong class="font-bold text-xl">Colectarea de informații:</strong>  Explore TM colectează anumite
            informații
            atunci când utilizați aplicația noastră, inclusiv, dar fără a se limita la informațiile dispozitivului dvs.,
            locația și modelele de utilizare.
          </p>
          <p class="text-lg" v-else>
            <strong class="font-bold text-xl">Information Collection:</strong>  Explore TM collects certain information
            when you use our App, including but not limited to your device information, location, and usage patterns.
          </p>
          <p class="text-lg" v-if="store.ro">
            <strong class="font-bold text-xl">Utilizarea datelor:</strong>  Utilizăm datele colectate în diverse
            scopuri,
            cum ar fi îmbunătățirea serviciilor noastre, furnizarea de conținut personalizat și analizarea
            comportamentului utilizatorilor pentru a îmbunătăți
            experiența utilizatorului.
          </p>
          <p class="text-lg" v-else>
            <strong class="font-bold text-xl">Data Usage:</strong>  We use the collected data for various purposes,
            such as improving our services, providing personalized content, and analyzing user behavior to enhance the
            user experience.
          </p>
          <p class="text-lg" v-if="store.ro">
            Prin utilizarea aplicației Explore TM, confirmați că ați citit, înțeles și sunteți de acord cu
            confidențialitatea noastră
            Politică.
          </p>
          <p class="text-lg" v-else>
            <strong class="font-bold text-xl">Data Usage:</strong>  We use the collected data for various purposes,
            such as improving our services, providing personalized content, and analyzing user behavior to enhance the
            user experience.
          </p>
        </section>
      </div>
    </div>
  </div>

  <div id="PersonalInfo" v-if="selectedTab === 'Personal'">
    <h1 class="text-2xl font-semibold text-gray-700 text-center mt-4">Personal Info</h1>
    <div class="p-4 col-span-2 sm:col-span-1 md:col-span-1 mx-[30%]">
      <div class="col-span-1">
        <label for="name" class="block text-sm font-medium leading-6 text-gray-900">Last name</label>
        <div class="mt-2">
          <input type="text" name="name" id="name" autocomplete="name"
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
            <input id="CI" name="CI" type="number" autocomplete="" v-model="ci"
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>
      </div>
      <div class="col-span-1">
        <div class="col-span-1">
          <label for="STPT Card Number" class="block text-sm font-medium leading-6 text-gray-900">STPT Card Number</label>
          <div class="mt-2">
            <input id="number" name="STPT Card Number" type="phone" autocomplete="" v-model="stpt"
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>
      </div>
      <div class="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" class="text-sm font-semibold leading-6 text-gray-900">
          Cancel
        </button>
        <button @click="save"
          class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          Save
        </button>
      </div>
    </div>

  </div>
</template>

