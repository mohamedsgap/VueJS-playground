const app = Vue.createApp({
    data() {
        return {
            firstInput: 0,
            secondInput: 0,
            final: ''
        }
    },

    methods: {
        addFive(val) {
        this.firstInput += val
    },
     addOne(val) {
        this.secondInput += val
    }
    },
    computed: {
        result() {
            return this.firstInput + this.secondInput
        }
    },
    watch: {
        result() {
            const sum = this.firstInput + this.secondInput
            setTimeout(() => {
            this.firstInput = 0;
            this.secondInput = 0;
            }, 5000)
            if (sum > 37) {
                this.final = 'too much'
            } else {
                this.final = 'not yet'
            }
        }
        
    },
})
app.mount('#assignment')