<template>
  <dialog open>
    <slot></slot>
  </dialog>
</template>

<script>
export default {};
</script>

<style scoped>
dialog {
  margin: 0px;
  position: fixed;
  top: 20vh;
  left: 30%;
  width: 40%;
  background-color: wheat;
  padding: 1rem;
}
</style>
