const app = Vue.createApp({
    data() {
        return {
            outputVal: '',
            name: '',
        }
    },
    methods: {
        showAlert() {
            alert('good morning at', Date.now())
        },
        handleInput(e) {
            this.outputVal = e.target.value
        },
        setName(e) {
            this.name = e.target.value
        }
    },
})
app.mount('#assignment')