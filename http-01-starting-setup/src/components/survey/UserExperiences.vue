<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadResults"
          >Load Submitted Experiences</base-button
        >
      </div>
      <p v-if="loading && !error">Loading data...</p>
      <p v-if="results.length === 0 && loading === false">there is No Data</p>
      <p v-if="error">{{ error }}</p>
      <ul>
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';

export default {
  // props: ['results'],
  components: {
    SurveyResult,
  },
  data() {
    return {
      results: [],
      loading: false,
      error: null,
    };
  },
  methods: {
    loadResults() {
      this.loading = true;
      fetch('ENDPOINT URL')
        .then((resp) => {
          if (resp.ok) {
            return resp.json();
          }
        })
        .then((data) => {
          console.log('data', data);
          const result = [];
          for (const id in data) {
            result.push({
              id: id,
              name: data[id].name,
              rating: data[id].rating,
            });
          }
          this.results = result;
          this.loading = false;
        })
        .catch((error) => {
          this.error = 'something went wrong, please try again!';
          console.log('errrrrrrrrrrr', error);
        });
    },
  },
  mounted() {
    this.loadResults();
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
