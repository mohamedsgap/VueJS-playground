const app = Vue.createApp({
    data() {
        return {
            taskValue: '',
            tasks: [],
            show: true,
        }
    },
    methods: {
        addTask(value) {
            if (value.length > 0) {
                this.tasks.push(value)
                this.taskValue = ''
            }
        },
        removeTask(idx) {
            this.tasks.splice(idx, 1)
        },
        toggleList() {
            this.show = !this.show
        }
    },
    computed: {
        btnName() {
            return this.show ? 'Hide List' : 'Show List'
        }
    },
})
app.mount('#assignment')