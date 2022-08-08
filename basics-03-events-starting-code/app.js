const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      inputVal: '',
      confirmedVal: '',
      name: '',
      clubName: ''
    };
  },
  watch: {
    name() {
      this.counter += 100
    }
  },
  computed: {
    fullName() {
     return  this.name === '' ? '' : `${this.name} Abdou`
    }
  },
  methods: {
    increase(n) {
       this.counter+= n
    },
    decrease(n) {
      this.counter-=n
    },
    handleInput(e) {
      console.log(e)
      this.inputVal = e.target.value
    },
    cleanInput() {
      this.inputVal = ''
    },
    submitForm(e) {      
      alert('u submitted the form')
    },
    confirmInput() {
      this.confirmedVal = this.inputVal
    },
    clearName() {
      this.name = ''
    }
  },
});

app.mount('#events');
