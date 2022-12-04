<script setup>
  import Event from "@/components/Event.vue";
  import events from "@/assets/events.json";
</script>

<template>
  <div class='events'>
    <div v-for="event in events" :key="event.name">
      <Event :event=event></Event>
    </div>
  </div>
</template>

<style lang="scss">
.events {
  margin-left: 2vw;
  margin-top: 2vh;
  font-size: 4rem;
}
</style>
