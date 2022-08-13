<template>
  <div>
    <input type="text" v-model="name" placeholder="Name"/>
    <input type="text" v-model="age" placeholder="Age"/>
    <button @click="submitData"> Submit</button>
  </div>
</template>

<script>
export default {
    data() {
        return {
            name: '',
            age: '',
        }
    },
    methods: {
        submitData() {
            this.$emit('add-item', {name: this.name, age: this.age})
        }
    },
    emits: ['add-item'],
}
</script>
