const app = Vue.createApp({
    data() {
        return {
            name: 'Mohamed',
            age: 24,
            imgSrc: 'https://bharchitects.com/wp-content/uploads/2020/03/VUE-Singapore-7-scaled.jpg',
        }
    }, 
    methods: {
        agePlus5() {
            return this.age + 5
        },
        faveNum() {
            return Math.random()
        }
    },
})

app.mount('#assignment')