<template>
  <nav id="nav" class="header">
    <div class="left-nav">
      <img src="@/assets/Logo.svg"/>
    </div>
    <div class="right-nav row">
      <Select
        :options="windowOptions"
        onChange="updateWindow"
        defaultValue="day"
      />
      <Select
        :options="sectionOptions"
        onChange="updateWindow"
        defaultValue="hot"
      />
      <!-- <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link> -->
    </div>
  </nav>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import Select from '@/components/Select.vue';

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
    });
    this.$on('updateSection', (selection) => {
      this.sectionSelected = selection;
      // Hit API for
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
  background: var(--primary);
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
