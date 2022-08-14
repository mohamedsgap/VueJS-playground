<template>
  <div>
    <the-header></the-header>
    <badge-list></badge-list>
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info>
  </div>
  <vue-goals #default="slotProps">
          <h2>{{ slotProps.goal }}</h2>
  </vue-goals>
   <vue-goals #default="slotProps">
          <p>{{ slotProps.goal }}</p>
  </vue-goals>
</template>

<script>
// local components
import TheHeader from './components/TheHeader.vue';
import BadgeList from './components/BadgeList.vue';
import UserInfo from './components/UserInfo.vue';
import VueGoals from './components/VueGoals.vue'

export default {
  components: {
    'the-header': TheHeader,
    'user-info': UserInfo,
    'badge-list': BadgeList,
    'vue-goals': VueGoals,
  },
  data() {
    return {
      activeUser: {
        name: 'Mohamed Abdelnasser',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>