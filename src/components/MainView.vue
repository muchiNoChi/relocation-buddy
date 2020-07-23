<template>
  <div>
    <b-field label="From">
      <b-datepicker v-model="dateFrom" :first-day-of-week="1" placeholder="Click to select...">
        <button class="button is-primary" @click="dateFrom = new Date()">
          <b-icon icon="calendar-today"></b-icon>
          <span>Today</span>
        </button>

        <button class="button is-danger" @click="dateFrom = null">
          <b-icon icon="close"></b-icon>
          <span>Clear</span>
        </button>
      </b-datepicker>
    </b-field>

    <b-field label="To">
      <b-datepicker v-model="dateTo" :first-day-of-week="1" placeholder="Click to select...">
        <button class="button is-primary" @click="dateTo = new Date()">
          <b-icon icon="calendar-today"></b-icon>
          <span>Today</span>
        </button>

        <button class="button is-danger" @click="dateTo = null">
          <b-icon icon="close"></b-icon>
          <span>Clear</span>
        </button>
      </b-datepicker>
    </b-field>

    <button class="button is-primary" @click="getAmsterdamLocationKey()">
      <span>Get location key for Amsterdam</span>
    </button>

    <button class="button is-primary" @click="getForecast()">
      <span>Get 5 day forecast</span>
    </button>

    <button class="button is-primary" @click="getAmsterdamCurrentWeather()">
      <span>Get current weather conditions for Amsterdam</span>
    </button>

    <button class="button is-primary" @click="getFlightsMunichAmsterdam()">
      <span>Look for the flights from Munich to Amsterdam on selected dates</span>
    </button>

    <div class="columns">
      <div class="column">{{ locationKey }}</div>
      <div class="column">{{ forecast }}</div>
      <div class="column">{{ currentWeather }}</div>
      <div class="column">{{ flights }}</div>
    </div>
  </div>
</template>

<script>
export default {
  // TODO Solve linting issue
  name: 'MainView',
  props: {
    msg: String,
  },
  data() {
    return {
      locationKey: null,
      forecast: {},
      currentWeather: {},
      flights: [],
      dateFrom: null,
      dateTo: null,
    };
  },
  created() {
    console.log('Main view created');
  },
  computed: {},
  methods: {
    // TODO implement
    async getAmsterdamLocationKey() {
      this.locationKey = 1;
    },

    async getForecast() {
      this.forecast = {'a': 'b'};
    },

    async getAmsterdamCurrentWeather() {
      this.currentWeather = {'c': 'd'};
    },

    async getFlightsMunichAmsterdam() {
      this.flights = [{'a': 'b'}, {'c': 'd'}, {'k': 'l'}];
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
</style>
