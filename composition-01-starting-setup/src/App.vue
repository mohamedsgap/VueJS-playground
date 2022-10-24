<template>
  <section class="container">
    <h2>{{ user.name }}</h2>
    <h3>{{ user.age }}</h3>
    <button @click="changeAge">change age</button>
  </section>
  <section class="container">
    <h2>{{ person.name }}</h2>
    <h3>{{ person.age }}</h3>
  </section>
  <section class="container">
    <h2 v-if="showGoal">{{ goal }}</h2>
    <p>{{ message }}</p>
    <button @click="toggleGoal">Toggle Goal</button>
  </section>
  <section class="container">
    <input type="text" placeholder="first name" v-model="firstName" />
    <input type="text" placeholder="last name" v-model="lastName" />
    <p>{{ fullName }}</p>
  </section>
  <section class="container">
    <div>
      <h2>Total: {{ 100 }}</h2>
      <h3>Available: {{ avaAmount }}</h3>
    </div>
    <div>
      <input type="number" placeholder="add amount" v-model="amount" />
      <button @click="addAmount">Add Amount</button>
    </div>
  </section>
  <section class="container">
    <div>
      <input type="text" placeholder="play with ref" ref="refValue" />
      <button @click="playWithRef">Set Ref Val</button>
      <span>{{ blaBla }}</span>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive, computed, watch } from 'vue';

const amount = ref(0);
const avaAmount = ref(100);
const firstName = ref('');
const lastName = ref('');
const goal = ref('Master Vue.js ');
const message = ref('');
const showGoal = ref(true);
const user = ref({
  name: 'Mohamed',
  age: 24,
});
const person = reactive({
  name: 'Kt',
  age: '24',
});
const refValue = ref(null);
const blaBla = ref(null);

setTimeout(() => {
  user.value.name = 'Nasser';
  person.age = 25;
}, 3000);
const changeAge = () => {
  user.value.age = 20;
};
const toggleGoal = () => {
  showGoal.value = !showGoal.value;
};

const fullName = computed(() => {
  return firstName.value + ' ' + lastName.value;
});

const addAmount = () => {
  avaAmount.value = avaAmount.value - amount.value;
};

const playWithRef = () => {
  blaBla.value = refValue.value.value;
};
watch(showGoal, (newVal) => {
  if (newVal) {
    message.value = 'Welcome';
  }
  if (!newVal) {
    message.value = 'good bye';
  }
});
watch(avaAmount, (newVal) => {
  if (newVal < 0) {
    alert(' you must not have minus value');
  }
});
// watch([firstVal, secVal], (newVals, oldVals) => {
//  console.log([oldVals[0]], newVals[1])
// });
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

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>
