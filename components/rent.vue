<template>
  <div class="container mx-auto py-4 text-center">
    <h1 class="text-3xl font-bold mb-4">Rent a Bike or Scooter</h1>

    <!-- Step 1: Choose Your Ride -->
    <div class="mb-4">
      <button @click="showBike" :class="{ 'bg-blue-500': activeButton === 'bike' }" class="mr-2 py-2 px-4 rounded focus:outline-none">Bike</button>
      <button @click="showScooter" :class="{ 'bg-blue-500': activeButton === 'scooter' }" class="mr-2 py-2 px-4 rounded focus:outline-none">Scooter</button>
    </div>

    <!-- Step 2: Location Map -->
    <div v-show="activeButton === 'bike'" class="bike mb-8">
      <!-- Bike content goes here -->
      Bike content
    </div>

    <div v-show="activeButton === 'scooter'" class="scooter mb-8">
      <!-- Scooter content goes here -->
      Scooter content
    </div>
  </div>
</template>

<script>

import { ref } from "vue";
const store = useAccountStore();
export default {
  data() {
    return {
      activeButton: 'bike',
    };
  },
  methods: {
    showBike() {
      this.activeButton = 'bike';
    },
    showScooter() {
      this.activeButton = 'scooter';
    },
  },
};
</script>

<style>
/* Add your custom styles here */
</style>
