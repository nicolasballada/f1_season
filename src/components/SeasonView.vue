<script setup>
import Chart from 'chart.js/auto';

const races = [
  {race: "Bahrain", "code": "BAH"},
  {race: "Saudi Arabia", "code": "SAU"},
  {race: "Australia", "code": "AUS"},
  {race: "Azerbaijan", "code": "BAK"},
  {race: "Miami", "code": "MIA"},
  {race: "Imola", "code": "IMO"},
  {race: "Monaco", "code": "MON"}
  ];
const lec = [
    { race: "BAH", order: 25 },
    { race: "SAU", order: 43 },
    { race: "AUS", order: 48 },
    { race: "BAK", order: 55 },
    { race: "MIA", order: 64 },
    { race: "IMO", order: 72 },
    { race: "MON", order: 78 },
  ];
const sai = [
    { race: "BAH", order: 13 },
    { race: "SAU", order: 24 },
    { race: "AUS", order: 25 },
    { race: "BAK", order: 45 },
    { race: "MIA", order: 55 },
    { race: "IMO", order: 74 },
    { race: "MON", order: 74 },
  ];
const ver = [
    { race: "BAH", order: 16 },
    { race: "SAU", order: 34 },
    { race: "AUS", order: 55 },
    { race: "BAK", order: 56 },
    { race: "MIA", order: 58 },
    { race: "IMO", order: 69 },
    { race: "MON", order: 79 },
  ];
const per = [
    { race: "BAH", order: 4 },
    { race: "SAU", order: 16 },
    { race: "AUS", order: 27 },
    { race: "BAK", order: 50 },
    { race: "MIA", order: 70 },
    { race: "IMO", order: 76 },
    { race: "MON", order: 90 },
  ];


let initChart = () => {
  let ctx = document.getElementById('chart');

  let myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: races.map(row => row.race),
      datasets: [
        {
        label: 'Verstappen',
        borderColor: '#0e2e99',
        backgroundColor: '#0e2e99',
        data: ver.map(row => row.order),
      },
      {
        label: 'Leclerc',
        borderColor: '#ff0000',
        backgroundColor: '#ff0000',
        data: lec.map(row => row.order),
      },
      {
        label: 'Sainz',
        borderColor: '#8a0000',
        backgroundColor: '#8a0000',
        data: sai.map(row => row.order),
      },
      {
        label: 'Perez',
        borderColor: '#001a6e',
        backgroundColor: '#001a6e',
        data: per.map(row => row.order),
      }],
    },
  });
}
window.addEventListener('DOMContentLoaded', (event) => {
  initChart();
});
</script>

<template>
  <canvas id='chart' width="900" height="400"></canvas>
</template>

<style scoped>

</style>
