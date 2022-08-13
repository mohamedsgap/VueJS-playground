<template>
<div>
    <h2>Name: {{ item.name }}</h2>
     <h3> age: {{ item.age }}</h3>
</div>
</template>

<script>
export default {
    props: {
        item: Object
    }
}
</script>