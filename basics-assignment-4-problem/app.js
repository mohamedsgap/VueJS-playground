const app = Vue.createApp({
    data() {
        return {
            className: '',
            switchPara: false,
            bgColor: ''
        }
    },
    methods: {
        toggle() {
            this.switchPara = !this.switchPara
        }
    },
})
app.mount('#assignment')
