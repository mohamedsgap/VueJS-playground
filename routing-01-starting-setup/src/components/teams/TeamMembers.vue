<template>
  <section>
    <h2>{{ teamName }}</h2>
    <ul>
      <user-item
        v-for="member in members"
        :key="member.id"
        :name="member.fullName"
        :role="member.role"
      ></user-item>
    </ul>
    <router-link to="/teams/t2">Go to Team2</router-link>
  </section>
</template>

<script>
import UserItem from '../users/UserItem.vue';

export default {
  components: {
    UserItem,
  },
  inject: ['users', 'teams'],
  props: ['teamId'],
  created() {
    this.loadTeamMember(this.teamId);
  },
  methods: {
    loadTeamMember(teamId) {
      const selectedTeam = this.teams.find((t) => t.id === teamId);
      // if (!selectedTeam) return;
      const members = selectedTeam.members;
      const selectedMembers = members.map((member) =>
        this.users.find((u) => u.id === member)
      );
      /*
    const selectedMembers = [];
    for (const member of members) {
      const selectedUser = this.users.find((user) => user.id === member);
      selectedMembers.push(selectedUser);
    }
    */
      this.members = selectedMembers;
      this.teamName = selectedTeam.name;
    },
  },
  watch: {
    teamId(newId) {
      this.loadTeamMember(newId);
    },
  },
  data() {
    return {
      teamName: '',
      members: [],
    };
  },
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
