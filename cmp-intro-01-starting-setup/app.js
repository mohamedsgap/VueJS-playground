const app = Vue.createApp({
    data() {
        return {
            friends: [{ id: 5365, name: 'Jack Harries', phone: '0123456789', email: 'jace@local.com' },
            { id: 8956, name: 'Lily Blair', phone: '0987654321', email: 'lily@local.com' }
            ],
            show: false,
        }
    },
    methods: {
        toggleDetails() {
            this.show = !this.show
        }
    },
    computed:{
        btnTitle() {
            return this.show ? 'Hide details' : 'Show details'
        }
    },
})
app.component('friend-contact', {
    template: `
        <li v-for="friend in friends" :key="friend.id">
          <h2>{{ friend.name }}</h2>
          <button @click="toggleDetails(friend.id)">{{ btnTitle(friend.id) }}</button>
          <ul v-if="show && currentId === friend.id">
            <li><strong>Phone:</strong>{{ friend.phone }}</li>
            <li><strong>Email:</strong> {{ friend.email }}</li>
          </ul>
        </li>
    `,
    data() {
        return {
            currentId: null,
            show: false,
            friends: [{ id: 5365, name: 'Jack Harries', phone: '0123456789', email: 'jace@local.com' },
            { id: 8956, name: 'Lily Blair', phone: '0987654321', email: 'lily@local.com' }
            ],
        }
    },
    methods: {
        toggleDetails(val) {
            this.show = !this.show
            this.currentId = val
        },
        btnTitle(val) {
            const showChangeText = this.show && this.currentId === val
            return showChangeText ? 'Hide details' : 'Show details'
        }

    },
})
app.mount('#app')