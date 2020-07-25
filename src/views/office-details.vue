<template>
  <div>
    <!-- TITLE SECTION -->
    <section class="hero office-bg-img">
      <div class="hero-body">
        <div class="container has-text-left">
          <h1 class="title has-text-light">
            <!-- <font-awesome-icon icon="user-secret" /> -->
            {{ office.locationName }}
          </h1>
          <h2 class="subtitle has-text-light">
            Welcome
          </h2>
        </div>
      </div>
    </section>

    <div class="container office">
      <div class="container office columns is-vcentered section
        is-variable
        is-1-mobile
        is-0-tablet
        is-3-desktop
        is-8-widescreen
        is-2-fullhd">
        <!-- WEATHER SECTION -->
        <section class="column weather">
          <article class="tile is-child box">
            <p class="title">Weather Forecast</p>
            <b-button type="is-dark" outlined expanded @click="getWeatherForecast()">
              Show 5 days forecast
            </b-button>
            <div class="container" v-if="weatherForecast.length">{{ weatherForecast }}</div>
          </article>
        </section>
        <!-- FLIGHTS SECTION -->
        <section class="column flights">
          <article class="tile is-child box">
            <p class="title">Flight Options</p>
            <p class="subtitle">Overview flight prices from {{ office.locationName }}</p>
            <div class="content">
              <div class="columns">
                <b-field label="To" class="column">
                  <b-autocomplete
                    :data="flightLocations"
                    placeholder="City"
                    :keep-first="true"
                    field="to"
                    clearable
                    :loading="isFetching"
                    @typing="getFlightLocations"
                    @select="option => selectedCityTo = option">
                    <template slot="empty">No results found</template>
                  </b-autocomplete>
                </b-field>
                <b-field label="Select a date" class="column">
                  <b-datepicker
                    placeholder="Click to select..."
                    v-model="flightDates"
                    range>
                  </b-datepicker>
                </b-field>
              </div>
              <b-button type="is-dark" outlined expanded @click="getFlightOptions()">
                Show options
              </b-button>
              <div class="container" v-if="flightOptions.length">{{ flightOptions }}</div>
            </div>
          </article>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'office-details',
  props: {
    office: {
      type: Object,
      required: true,
      default: () => {},
    },
  },
  data() {
    return {
      loading: false,
      weatherForecast: [],
      selectedCityTo: null,
      flightLocations: [],
      flightOptions: [],
      flightDates: [],
    };
  },
  computed: {
    isFetching() {
      return this.loading;
    },
  },
  methods: {
    getWeatherForecast() {
      this.loading = true;
      this.weatherForecast = [
        {
          date: '2020-07-24T07:00:00+02:00',
          weatherText: 'Mostly cloudy w/ t-storms',
          weatherIcon: 16,
          temperature: 20,
        },
        {
          date: '2020-07-25T07:00:00+02:00',
          weatherText: 'Thunderstorms',
          weatherIcon: 15,
          temperature: 21,
        },
        {
          date: '2020-07-26T07:00:00+02:00',
          weatherText: 'Mostly cloudy w/ showers',
          weatherIcon: 13,
          temperature: 20,
        },
        {
          date: '2020-07-27T07:00:00+02:00',
          weatherText: 'Intermittent clouds',
          weatherIcon: 4,
          temperature: 20,
        },
        {
          date: '2020-07-28T07:00:00+02:00',
          weatherText: 'Mostly cloudy w/ t-storms',
          weatherIcon: 16,
          temperature: 21,
        },
      ];
      this.loading = false;
    },

    getFlightLocations() {
      this.loading = true;
      this.flightLocations = ['DUB', 'KEK', 'VNO'];
      this.loading = false;
    },

    getFlightOptions() {
      this.loading = true;
      this.flightOptions = [
        {
          cityFrom: 'Madrid',
          cityTo: 'Vilnius',
          dTimeUTC: 1599133800,
          aTimeUTC: 1599165900,
          fly_duration: '8h 55m',
          price: 37,
        },
      ];
      this.loading = false;
    },
  },
  created() {},
};
</script>

<style scoped lang="sass">
.weather, .flights
  height: 600px

  .box
    height: 100%

.office-bg-img
  background: url('../assets/office.jpg') center center
  background-size: cover
</style>
