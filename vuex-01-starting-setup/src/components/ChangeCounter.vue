<template>
  <button @click="increase({ value: 2 })">add TWO</button>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  methods: {
    // addTwo() {
    //   this.$store.dispatch('increase', { value: 2 });
    // },
    ...mapActions(['increase']),
  },
};
</script>

<style></style>
