<template>
  <div class="container">
    <div class="block" :class="{ animate: animatedBlock }"></div>
    <button @click="animateBlock">Animate</button>
  </div>
  <div class="container">
    <transition name="para" enter-to-class="className...">
      <p v-if="toggledParagraph">this a test paragraph</p>
    </transition>
    <button @click="toggleParagraph">Toggle Paragrapgh</button>
  </div>
  <base-modal @close="hideDialog" :open="dialogIsVisible">
    <p>This is a test dialog!</p>
    <button @click="hideDialog">Close it!</button>
  </base-modal>
  <div class="container">
    <button @click="showDialog">Show Dialog</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogIsVisible: false,
      animatedBlock: false,
      toggledParagraph: false,
    };
  },
  methods: {
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
    animateBlock() {
      this.animatedBlock = !this.animatedBlock;
    },
    toggleParagraph() {
      this.toggledParagraph = !this.toggledParagraph;
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
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}
.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
  transition: transform 0.3s ease-out;
}
.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}
.animate {
  /* transform: translateX(100px); */
  animation: slide-fade 0.3s ease-out forwards;
}
@keyframes slide-fade {
  0% {
    transform: translateX(0) scale(1);
  }
  25% {
    transform: translateX(33px) scale(1.1);
  }
  50% {
    transform: translateX(66px) scale(1.5);
  }
  100% {
    transform: translateX(100px) scale(1);
  }
}
.v-enter-from {
  /* animation: slide-fade 0.3s ease-out; */
}
.para-enter-active {
  animation: slide-fade 0.3s ease-out;
}
.v-enter-to {
  /*
  opacity: 1;
  transform: translateY(0);
  */
}
.v-leave-from {
  /* opacity: 1;
  transform: translateY(0); */
}
.para-leave-active {
  animation: slide-fade 0.3s ease-in;
}
.v-leave-to {
  /* opacity: 0;
  transform: translateY(-30px); */
}

.modal-enter-active {
  animation: modal 0.3s ease-out;
}

@keyframes modal {
  from {
    opacity: 0;
    transform: translateY(-50px) scale(0.9);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
</style>
