<script setup>
defineProps({
  driverData: {
    type: Object,
    required: true
  },
});
</script>

<template>
  <td>{{driverData.number}}</td>
  <td>{{driverData.first_name}} {{driverData.last_name}}</td>
  <td>{{driverData.wdc_points}}</td>
</template>

<style scoped>
.driver {
  display: flex;
  justify-content:justify;
  font-size: 1rem;
  padding: 1vw;

}

h1 {
  font-size: 1.5rem;
}

h3 {
  font-size: 1rem;
  padding: 1vw;
}
</style>
