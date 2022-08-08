const app = Vue.createApp({
    data() {
        return {
            boxASelected: false,
            boxBSelected: false,
            boxCSelected: false,
        }
    },
    methods: {
        boxSelected(box) {
            if (box === 'a') {
                this.boxASelected = !this.boxASelected;
            }
            else if (box === 'b') {
                this.boxBSelected = !this.boxBSelected;
            }
             else if (box === 'c') {
                this.boxCSelected = !this.boxCSelected;
            }
        }
    },

})
app.mount('#styling')