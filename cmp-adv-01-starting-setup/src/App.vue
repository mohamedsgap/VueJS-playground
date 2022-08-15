<template>
  <div>
    <the-header></the-header>
    <button @click="selectComp('active-goals')">active goals</button>
    <button @click="selectComp('manage-goals')">manage goals</button>
    <keep-alive>
      <component :is="selectedComp"></component>
    </keep-alive>
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
import TheHeader from "./components/TheHeader.vue";
import BadgeList from "./components/BadgeList.vue";
import UserInfo from "./components/UserInfo.vue";
import VueGoals from "./components/VueGoals.vue";
import ManageGoals from "./components/ManageGoals.vue";
import ActiveGoals from "./components/ActiveGoals.vue";

export default {
  components: {
    "the-header": TheHeader,
    "user-info": UserInfo,
    "badge-list": BadgeList,
    "vue-goals": VueGoals,
    "manage-goals": ManageGoals,
    "active-goals": ActiveGoals,
  },
  data() {
    return {
      selectedComp: "active-goals",
      activeUser: {
        name: "Mohamed Abdelnasser",
        description: "Site owner and admin",
        role: "admin",
      },
    };
  },
  methods: {
    selectComp(comp) {
      this.selectedComp = comp;
    },
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
