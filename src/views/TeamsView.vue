<script setup>
  import TeamCard from "@/components/TeamCard.vue";
  import teams from "@/assets/teams.json";
</script>

<template>
  <div class='teams'>
    <table class="table">
    <thead>
      <tr>
        <th scope="col">Code</th>
        <th scope="col">Name</th>
        <th scope="col">Engine</th>
        <th scope="col">Points</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="team in teams" :key="team.code">
        <TeamCard :teamData=team></TeamCard>
      </tr>
    </tbody>
  </table>
  </div>
</template>

<style lang="scss">
.teams {
  margin-left: 2vw;
  margin-top: 2vh;
  font-size: 4rem;
}

table {
  font-size: 1rem;
}
</style>
