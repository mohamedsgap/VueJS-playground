const app = Vue.createApp({
  data() {
    return {
      goals: [],
      gosl: '',
      testObj: { name: 'Mo', age: 24},
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.goal)
      this.goal = ''
    },
    removeItem(goal) {
      this.goals = this.goals.filter(g => g !== goal)
    }
  }
});

app.mount('#user-goals');
