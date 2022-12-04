<script setup>
  import DriverCard from "@/components/DriverCard.vue";
  import drivers from "@/assets/drivers.json";
</script>

<template>
  <div class='drivers'>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Points</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="driver in drivers" :key="driver.number">
          <DriverCard :driverData=driver></DriverCard>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="scss">
.drivers {
  margin-left: 2vw;
  margin-top: 2vh;
  font-size: 4rem;
}

table {
  font-size: 1rem;
}
</style>
