<template>
    <div class="absolute inset-0 bg-cover bg-center filter blur-md"></div>

    <!-- Overlay content -->
    <section class="absolute text-center z-20 bg-white shadow p-4 sm:p-8 md:p-12 w-full md:w-1/2 lg:w-1/3 backdrop-blur">
      <div class="">
        <h1 class="text-2xl font-bold mb-2">
          Do you want to explore TM?
        </h1>
        <p class="text-gray-700">
          Embark on a visual journey to uncover the captivating beauty of Timisoara with our app. Immerse yourself in the allure of this city as our application guides you through its charming streets, historic landmarks, and cultural gems, providing an immersive and enriching experience of all that Timisoara has to offer. Download our app today and let the exploration begin, making every corner of this city a discovery waiting to be unveiled.
        </p>
      </div>
      <br/>
      <div class="flex mt-4 sm:mt-8">
        <button class="flex-1 bg-green-500 text-white font-semibold px-4 py-2 mr-2 sm:mr-4">
          Download
        </button>
        <button class="flex-1 bg-black text-white font-semibold px-4 py-2 ml-2 sm:ml-4">
          Learn More
        </button>
      </div>
    </section>

    <!-- Your map component goes here -->
    <div id="map" class="hidden md:block w-3/4 h-3/4"></div>
</template>
