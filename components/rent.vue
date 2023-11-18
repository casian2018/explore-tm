<template>
    <div class="container mx-auto p-4">
      <h1 class="text-3xl font-bold mb-4">Rent a Bike or Scooter</h1>
  
      <!-- Step 1: Choose Your Ride -->
      <div class="mb-4">
        <label class="mr-4">
          <input type="radio" v-model="selectedVehicle" value="bike" class="mr-2" /> Bike
        </label>
        <label>
          <input type="radio" v-model="selectedVehicle" value="scooter" class="mr-2" /> Scooter
        </label>
      </div>
  
      <!-- Step 2: Location Map -->
      <div class="mb-8">
        
      </div>
  
      <!-- Step 3: Select a Vehicle -->
      <div v-if="selectedVehicle">
        <h2 class="text-2xl font-semibold mb-4">Available {{ selectedVehicle === 'bike' ? 'Bikes' : 'Scooters' }}</h2>
        <ul>
          <li v-for="vehicle in filteredVehicles" :key="vehicle.id" class="mb-2">
            <span class="mr-2">{{ vehicle.name }} - {{ vehicle.status }}</span>
            <!-- Add more details like battery level for scooters, etc. -->
            <button @click="reserveVehicle(vehicle)" class="bg-blue-500 text-white px-4 py-2 rounded">Rent</button>
          </li>
        </ul>
      </div>
  
      <!-- Additional steps for payment, confirmation, etc. -->
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        selectedVehicle: null,
        vehicles: [
          // Sample data for bikes and scooters
          { id: 1, name: 'Bike 1', status: 'Available', type: 'bike' },
          // Add more vehicle details as needed
        ],
      };
    },
    computed: {
      filteredVehicles() {
        // Filter vehicles based on the selected type (bike or scooter)
        return this.vehicles.filter(vehicle => vehicle.type === this.selectedVehicle);
      },
    },
    methods: {
      reserveVehicle(vehicle) {
        // Implement the reservation logic, e.g., show payment modal, update status, etc.
        console.log(`Vehicle ${vehicle.name} reserved!`);
      },
    },
  };
  </script>
  