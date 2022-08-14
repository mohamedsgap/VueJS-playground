<template>
  <li v-for="goal in goals" :key="goal">
    <slot :goal="goal"></slot>
  </li>
</template>

<script>
export default {
    data() {
        return {
        goals: ['learn Vue', 'master vue']
    }
}
}
</script>

<style>

</style>