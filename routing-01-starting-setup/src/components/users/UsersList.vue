<template>
  <button @click="handleConfirm">confirm</button>
  <ul>
    <user-item
      v-for="user in users"
      :key="user.id"
      :name="user.fullName"
      :role="user.role"
    ></user-item>
  </ul>
</template>

<script>
import UserItem from './UserItem.vue';

export default {
  components: {
    UserItem,
  },
  inject: ['users'],
  methods: {
    handleConfirm() {
      this.$router.push('/teams');
      // this.$router.back()
      // this.$router.forward()
    },
  },
  beforeRouteEnter() {
    // add logic to execute before eter the route
  },
  beforeRouteLeave(to, from, next) {
    // add logic to execute before rotue leave
    console.log(to, from, next);
    // alert('wanna leave');
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>
