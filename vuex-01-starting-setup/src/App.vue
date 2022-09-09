<template>
  <base-container title="Vuex">
    <h3>{{ finalCounter }}</h3>
    <h3>faveorite counter: {{ normalizeCount }}</h3>
    <button @click="addOne">Add 1</button>
    <change-counter></change-counter>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import { mapGetters } from 'vuex';
export default {
  components: {
    BaseContainer,
    ChangeCounter,
  },
  methods: {
    addOne() {
      // this.$store.commit('increment');
      this.$store.dispatch('increment');
    },
  },
  computed: {
    // countResult() {
    //   return this.$store.getters.finalCounter;
    // },
    ...mapGetters(['finalCounter']),
    normalizeCount() {
      return this.$store.getters.normalizedCounter;
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
