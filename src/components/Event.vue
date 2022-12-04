<script setup>
import InProgress from "@/components/InProgress.vue";
import Upcoming from "@/components/Upcoming.vue";
defineProps({
  event: {
    type: Object,
    required: true
  },
});

let monthify = (month) => {
  switch(month){
    case "1":
      return "January";
    case "2":
      return "February";
    case "3":
      return "March";
    case "4":
      return "April";
    case "5":
      return "May";
    case "6":
      return "June";
    case "7":
      return "July";
    case "8":
      return "August";
    case "9":
      return "September";
    case "10":
      return "October";
    case "11":
      return "November";
    case "12":
      return "December";
    case "default":
      console.warn(month);
  }

}

let date = (ymd, display) => {
  let imported_date;
  let day;
  let month;
  let verbose_month;
  let year;

  imported_date = ymd.split("-");

  year = imported_date[0]
  month = imported_date[1]
  day = imported_date[2]

  verbose_month = monthify(month);

  if(display === "month"){
    return verbose_month;
  } else if(display === "year"){
    return year
  } else if(display === "day2"){
    day = parseInt(day)
    day--
    return day
  } else {
    return day;
  }
};

</script>

<template>
  <div v-if="event.status === 'complete'" class="event complete">
    <h3>{{date(event.end, "month")}} {{date(event.start)}}-{{date(event.end)}}</h3>
    <h1 class="red">{{ event.name }}</h1>
    <h3><span>{{event.track}}</span>, {{event.country}}</h3>
    <div class="finishers">
      <span id="first">{{event.results[0]}}</span>
      <span id="second">{{event.results[1]}}</span>
      <span id="third">{{event.results[2]}}</span>
    </div>
  </div>
  <div v-else-if="event.status === 'inprogress'" class="event inprogress">
    <InProgress :event=event />
  </div>
  <div v-else-if="event.status === 'upcoming'" class="event upcoming">
    <Upcoming :event=event />
  </div>
  <div v-else-if="event.status === 'noresults'" class="event noresults">
    <h3>{{date(event.end, "month")}} {{date(event.start)}}-{{date(event.end)}}</h3>
    <h1>{{ event.name }}</h1>
    <h3><span>{{event.track}}</span>, {{event.country}}</h3>
  </div>
  <div v-else class="event">
    <h3>{{date(event.end, "month")}} {{date(event.start)}}-{{date(event.end)}}</h3>
    <h1 class="red">{{ event.name }}</h1>
    <h3><span>{{event.track}}</span>, {{event.country}}</h3>
  </div>
</template>

<style scoped>

.event {
  padding: 1vh;
  width: 60vw;
  margin-top: 1vh;
  margin-bottom: 1vh;
  background-color: rgba(108, 108, 108, 0.072);
}

.inprogress {
  background-color: rgba(108, 108, 108, 0.097);
}
.upcoming {
  background-color: rgba(108, 108, 108, 0.097);
}

.complete {
  height: 20vh;
  background-color: rgba(108, 108, 108, 0.011);
}
.noresults {
  background-color: rgba(108, 108, 108, 0.011);
}

.finishers {
  display: flex;
  justify-content: space-around;
  font-size: 1rem;
  margin: 2vh;
}

.finishers #first{
  padding: 0.5vh;
  color: #000000;
  background-color: rgba(255, 224, 49, 0.647);
  border-color: rgba(255, 213, 0, 0.408);
  border-width: 1px;
  text-align: center;
  border-style: outset;
}

.finishers #second{
  padding: 0.5vh;
  background-color: rgba(225, 225, 225, 0.408);
  border-color: rgba(183, 183, 183, 0.408);
  border-width: 1px;
  text-align: center;
  border-style: outset;
}

.finishers #third{
  padding: 0.5vh;
  background-color: rgba(255, 175, 63, 0.408);
  border-color: rgba(209, 178, 22, 0.408);
  border-width: 1px;
  text-align: center;
  border-style: outset;
}

h1 {
  font-weight: 500;
  font-size: 1.6rem;
}

h3 {
  font-size: 1.2rem;
}

.event h1,
.event h3 {
  text-align: left;
}

@media (min-width: 1024px) {
  .event h1,
  .event h3 {
    text-align: left;
  }
  .complete {
    height: 18vh;
  }
  .finishers #first{
    padding: 0.8vh;
  }

  .finishers #second{
    padding: 0.8vh;
  }

  .finishers #third{
    padding: 0.8vh;
  }
}
</style>
