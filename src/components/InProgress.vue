<script setup>
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
  <div class='inprog'>
    <h3>{{date(event.end, "month")}} {{date(event.start)}}-{{date(event.end)}}</h3>
    <h1 class="red">{{ event.name }}</h1>
    <h3><span>{{event.track}}</span>, {{event.country}}</h3>
    <div class="sched">
      <h1>Schedule</h1>
      <h3>{{date(event.start)}}</h3>
        <div class='evt'>
          <span class='alglt'>Practice 1:</span>
          <span class='algrt'>{{event.p1utc}}</span>
        </div>
      <div v-if="event.sprint === 'no'">
        <div class='evt'>
          <span class='alglt'>Practice 2:</span>
          <span class='algrt'>{{event.p2utc}}</span>
        </div>
        <h3>{{date(event.end, "day2")}}</h3>
        <div class='evt'>
          <span class='alglt'>Practice 3:</span>
          <span class='algrt'>{{event.p3sprtutc}}</span>
        </div>
        <div class='evt'>
          <span class='alglt'>Qualifying:</span>
          <span class='algrt'>{{event.qutc}}</span>
        </div>
      </div>
      <div v-else>
        <div class='evt'>
          <span class='alglt'>Qualifying:</span>
          <span class='algrt'>{{event.qutc}}</span>
        </div>
        <h3>{{date(event.end, "day2")}}</h3>
        <div class='evt'>
          <span class='alglt'>Practice 2:</span>
          <span class='algrt'>{{event.p2utc}}</span>
        </div>
        <div class='evt'>
          <span class='alglt'>Sprint Race:</span>
          <span class='algrt'>{{event.p3sprtutc}}</span>
        </div>
      </div>
      <h3>{{date(event.end)}}</h3>
      <div class='evt'>
          <span class='alglt'>Race Start:</span>
          <span class='algrt'>{{event.rutc}}</span>
        </div>
    </div>
  </div>
</template>

<style scoped>
.evt {
  font-size: 1rem;
  padding: 1vw;

}
.sched {
  margin-top: 2vh;
}
.alglt {
  font-size: 1rem;
  text-align: left;
  padding: 1vw;
}
.algrt {
  font-size: 1rem;
  text-align: end;
  padding: 1vw;
}

h1 {
  font-size: 1.5rem;
}

h3 {
  font-size: 1rem;
}
</style>
