const app = Vue.createApp({
    data() {
        return {
            courseGoal: "I'm learning vue now",
            courseGoal2: "Gonna master VUE isA",
            happy: "donet worry be happy",
            htmlll: "<p> Mohamed leans Vue.js which is awesome</p>",
            vueLink: 'https://vuejs.org',
        };
    }, 
    methods: {
        outputGoal() {
            const randomNum = Math.random()
            return randomNum < 0.5 ? this.outputGoal : this.happy
        },
        renderhtml() {
            return this.htmlll
        }
    },
});
app.mount('#user-goal')
