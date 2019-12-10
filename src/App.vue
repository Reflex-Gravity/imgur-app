<template>
  <div id="app" class="container">
    <Header />
    <div>
      <router-view />
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue';

export default {
  name: 'App',
  components: {
    Header,
  },
};
</script>

<style>

:root {
  --primary: #34373c;
  --darkGray:#2c2f34;
  --darkBlue: #171544;
  --gray: #56585f;
}

#app, body, * {
  font-family: "Montserrat", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body{
  background: #141518 !important;
}

#app {
  text-align: center;
  color: #fff;
  background: var(--primary);
  margin-top: 60px;
}

</style>
