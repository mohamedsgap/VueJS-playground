<template>
  <active-user @add-item="addItem"></active-user>
  <ul v-if="list.length > 0">
    <user-data v-for="item in list" :key="item.name" :item="item"></user-data>
  </ul>
</template>

<script>
export default {
    data() {
        return {
            list: []
        }
    },
    methods: {
        addItem(item) {
            this.list.push(item)
        }
    },
    
}
</script>