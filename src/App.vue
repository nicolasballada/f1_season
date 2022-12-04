<script setup>
import { RouterLink, RouterView } from "vue-router";
import F1Logo from "./assets/f1_logo.svg?component";
</script>

<template>
  <div class='container-fluid'>
    <div class='row'>
      <div class='header-img'>
        <RouterLink to="/">
          <F1Logo alt="Formula 1 logo" class="logo"/>
        </RouterLink>
        </div>
      <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/events">Events</RouterLink>
          <RouterLink to="/drivers">Drivers</RouterLink>
          <RouterLink to="/teams">Teams</RouterLink>
      </nav>
    </div>
    <div class='row'>
      <div class='wrapper'>
        <RouterView />
      </div>
    </div>
  </div>
</template>

<style scoped>

.header-img {
  max-height: 50vh;
  margin-top: 5vh;
  width: 100px;
}

.wrapper {
    margin: 1vh;
  }

nav {
  display: block;
  font-size: 1rem;
  text-align: center;
  margin-top: 5vh;
  margin-bottom: 1vh;
  max-height: 1vh;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  .header {
    margin: 1vh;
    padding-left: 5vw;
    padding-right: 5vw;
    justify-content: space-between;
    width: 100%;
  }

  .header-message {
    margin: 1vh;
    padding: 1vh;
    width: auto;
  }

  .header-img {
    margin: 1vh;
    padding: 1vh;
    width: 100px;
  }

  .wrapper {
    margin: 1vh;
    padding: 1vh;
    min-height: 60vh;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1.2rem;
    margin: 1vh 1vw;
    padding: 1vh 1vw;
  }
}
</style>
