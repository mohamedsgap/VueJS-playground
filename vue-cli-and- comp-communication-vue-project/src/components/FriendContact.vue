<template>
  <li>
    <h2>{{ item.name }} {{ item.isFavorite ? '(Favorite)' : ''}}</h2>
    <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
    <button @click="toggleFavorite">{{ item.isFavorite  ? 'Remove from' : 'Add to' }} Favorites</button>
    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        {{ item.phone }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ item.email }}
      </li>
    </ul>
    <button @click="deleteFriend"> Delete</button>
  </li>
</template>

<script>
export default {
  data() {
    return {
        detailsAreVisible: false,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
      },
    toggleFavorite() {
        this.$emit('toggle-favorite', this.item.id)
    },
    deleteFriend() {
        this.$emit('delete-friend', this.item.id)
    }
  },
    props: {
        item: {
            type: Object,
            required: true,
            default: () => {
              return { name: 'Abc'}
            },
            validator: () => {},
        },
    },
    emits: {
        'toggleFavorite': Function,
        'deleteFriend': Function,
    }
};
</script>