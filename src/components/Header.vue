<template>
  <nav id="nav" class="header fixed-top">
    <div class="left-nav">
      <router-link to="/">
        <img src="@/assets/Logo.svg"/>
      </router-link>
    </div>
    <div class="right-nav row">
      <form class="row" id="sortForm">
        <Select
          :options="windowOptions"
          onChange="updateWindow"
          defaultValue="day"
          name="window"
        />
        <Select
          :options="sectionOptions"
          onChange="updateSection"
          defaultValue="hot"
          name="section"
        />
      </form>
      <!-- <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link> -->
    </div>
  </nav>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import Select from '@/components/Select.vue';
import * as Fetcher from '../fetcher/api';

export default {
  name: 'Header',
  components: {
    Select,
  },
  data() {
    return {
      windowOptions: [
        { value: 'day', name: 'Today' },
        { value: 'week', name: 'This week' },
        { value: 'month', name: 'This month' },
        { value: 'year', name: 'This year' },
        { value: 'all', name: 'All time' },
      ],
      sectionOptions: [
        { value: 'hot', name: 'Hottest' },
        { value: 'top', name: 'Top Scoring' },
        { value: 'user', name: 'User Submitted' },
      ],
      windowSelected: 'day',
      sectionSelected: 'hot',
    };
  },
  created() {
    this.$on('updateWindow', (selection) => {
      this.windowSelected = selection;
      // Hit API for
      const formData = new FormData(document.getElementById('sortForm'));
      const win = formData.get('window') !== null ? formData.get('window') : 'day';
      const section = formData.get('section') !== null ? formData.get('section') : 'hot';
      Fetcher.fetchImages(section, 'viral', win, 'true');
    });
    this.$on('updateSection', (selection) => {
      this.sectionSelected = selection;
      const formData = new FormData(document.getElementById('sortForm'));
      const win = formData.get('window') !== null ? formData.get('window') : 'day';
      const section = formData.get('section') !== null ? formData.get('section') : 'hot';
      // Hit API for
      Fetcher.fetchImages(section, 'viral', win, 'true');
    });
  },
};
</script>

<style>

#nav {
  padding: 10px 30px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--darkBlue);
  color: #fff;
}

#nav a {
  font-weight: bold;
  color: #fff;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

</style>
