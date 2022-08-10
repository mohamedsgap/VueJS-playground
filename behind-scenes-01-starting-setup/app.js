const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      // this.message = this.currentUserInput;
      this.message = this.$refs.userText.value
    },
  },
  beforeCreate() {
    console.log('beforeCreate')
  },
  created() {
    console.log('created')
  },
  beforeMount() {
        console.log('beforeMount')
  },
  mounted() {
        console.log('mounted')
  },
  beforeUpdate() {
        console.log('beforeUpdate')

  },
  updated() {
        console.log('updated')

  },
  beforeUnmount() {
        console.log('beforeUnmount')

  },
  unmounted() {
        console.log('unmounted')
  },
});

app.mount('#app');

// app.unmount()

const fullName = {
  first: 'Mohamed',
  last: 'Abdou',
}
const handler = {
  set(target, key, value) {
    console.log(target)
    console.log(key)
    console.log(value)
    fullName.last = value
  }
}
console.log(fullName.first + fullName.last)
const proxy = new Proxy(fullName, handler)
proxy.last = 'Abdernasser'
console.log(proxy.first + proxy.last)
