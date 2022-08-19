<template>
  <ul>
    <li :class="{ active: modelValue === 'poor' }">
      <button type="button" @click="activate('poor')">Poor</button>
    </li>
    <li :class="{ active: modelValue === 'avg' }">
      <button type="button" @click="activate('avg')">Average</button>
    </li>
    <li :class="{ active: modelValue === 'great' }">
      <button type="button" @click="activate('great')">Great</button>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    modelValue: String,
  },
  emits: ['update:modelValue'],
  methods: {
    activate(opt) {
      this.$emit('update:modelValue', opt);
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0.5rem 0px;
  padding: 0px;
  display: flex;
}
li {
  margin: 0 1rem;
  border: 1px solid #ccc;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.active {
  border-color: chocolate;
}
.active button {
  color: chocolate;
}
button {
  cursor: pointer;
  font: inherit;
  border: none;
  background: transparent;
}
</style>
