<template>
    <div class="formWrapper">
    <input type="text" v-model="friendName" placeholder="name"/>
    <input type="text" v-model="friendPhone" placeholder="phone number"/>
    <input type="text" v-model="friendemail" placeholder="email"/>
    <button @click="addNewFriend" class="addBtn"> Add Friend</button>
   </div> 
</template>

<script>
export default {
    data() {
        return {
            friendName: '',
            friendPhone: '',
            friendemail: '',
            friendId: null,
            friendIsFavorite: false, 
        }
    },
    methods: {
        addNewFriend() {
            this.$emit('add-new-friend', { id: this.friendId, name: this.friendName, phone: this.friendPhone, email: this.friendemail, isFavorite: this.friendIsFavorite })
        }
    },
    emits: {
        'addNewFriend': Function,
    },
    watch: {
        friendName() {
            this.friendId = this.friendName
        }
    }

}
</script>

<style>
    .formWrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
        margin: 1rem auto;
        border-radius: 10px;
        padding: 1rem;
        text-align: center;
        width: 90%;
        max-width: 40rem;
    }
    input {
        margin: 10px;
        width: 100%;
    }
    .addBtn {
        width: 150px;
        margin: 5px;
    }
</style>