<template>
  <h2>Manage Goals</h2>
  <input type="text" ref="goal" />
  <button @click="setGoal">Set goal</button>
  <teleport to="body">
    <error-alert v-if="inputIsInvalid">
      <h2>input is invalid</h2>
      <p>please enter a any characters...</p>
      <button @click="handleDialog">Okay</button>
    </error-alert>
  </teleport>
</template>

<script>
import ErrorAlert from "./ErrorAlert.vue";
export default {
  components: { ErrorAlert },
  data() {
    return {
      inputIsInvalid: false,
    };
  },
  methods: {
    setGoal() {
      const enteredValue = this.$refs.goal.value;
      if (enteredValue == "") {
        this.inputIsInvalid = true;
        // alert('should not empty')
      }
    },
    handleDialog() {
      this.inputIsInvalid = false;
    },
  },
};
</script>
