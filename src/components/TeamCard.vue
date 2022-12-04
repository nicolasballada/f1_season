<script setup>
defineProps({
  teamData: {
    type: Object,
    required: true
  },
});
</script>

<template>
  <td>{{teamData.code }}</td>
  <td>{{teamData.marketing_name}}</td>
  <td>{{teamData.engine}}</td>
  <td>{{teamData.points}}</td>
</template>

<style scoped>
.team {
  display: inline;
  font-size: 1rem;
  padding: 1vw;
}

.team span {
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
