<template>
  <div>
    <!-- TITLE SECTION -->
    <section id="city-title-section" class="hero">
      <div class="hero-body">
        <div class="container has-text-left">
          <h1 class="title has-text-light">
            <!-- <font-awesome-icon icon="user-secret" /> -->
            {{ city.locationName }}
          </h1>
          <h2 class="subtitle has-text-light">
            Welcome
          </h2>
        </div>
      </div>
    </section>

    <div class="container city">
      <div class="container city columns is-vcentered section
        is-variable
        is-1-mobile
        is-0-tablet
        is-3-desktop
        is-8-widescreen
        is-2-fullhd">
        <!-- WEATHER SECTION -->
        <section class="column weather">
          <article class="tile is-child box is-light">
            <p class="title">Weather Forecast</p>
            <p class="subtitle">Review weather forecast for {{ city.locationName }}</p>
            <b-button type="is-dark" outlined expanded @click="getWeatherForecast()">
              Show 5 days forecast
            </b-button>
            <div v-if="weatherForecast.length">
              <div class="data-container">
                <div
                  class="tile is-parent"
                  v-for="day in weatherForecast"
                  :key="day.date">
                  <div class="tile is-child box">
                    <div class="level columns is-mobile">
                      <div class="level-left column has-text-left">
                        <strong>{{ day.date }}</strong>
                        <div>{{ day.weatherText }}</div>
                        <!-- <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time> -->
                      </div>
                      <div class="level-right level">
                        <span class="tag is-light">{{ day.temperature }}°C</span>
                        <p class="image is-64x64 level-right">
                          <img :src="'../assets/' + day.weatherIcon + '.png'" />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </section>
        <!-- FLIGHTS SECTION -->
        <section class="column flights">
          <article class="tile is-child box is-light">
            <p class="title">Flight Options</p>
            <p class="subtitle">Overview flight prices from {{ city.locationName }}</p>
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
              <div class="data-container">
                <!-- <div class="container" v-if="flightOptions.length"> -->
                  <div
                    class="tile is-parent"
                    v-for="flight in flightOptions"
                    :key="flight.id">
                    <div class="tile is-child box">
                      <div class="level">
                        <div class="level-left column has-text-left">
                          <strong>{{ flight.cityFrom }} -> {{ flight.cityTo }}</strong>
                          <div>Departure: {{ flight.dTimeUTC }},</div>
                          <div>Arrival: {{ flight.aTimeUTC }}</div>
                          <i>({{ flight.fly_duration }})</i>
                          <!-- <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time> -->
                        </div>
                        <div class="level-right level">
                          <strong>{{ flight.price }} EUR</strong>
                        </div>
                      </div>
                    </div>
                  </div>
                <!-- </div> -->
              </div>
            </div>
          </article>
        </section>
      </div>
    </div>
    <b-loading :active.sync="loading"></b-loading>
  </div>
</template>

<script>
// TODO move to service together with REST calls
async function fetchData(url, ...params) {
  return fetch(url, params).then(res => res.json());
}

export default {
  name: 'city-details',
  props: {
    name: {
      type: String,
      required: true,
      default: () => '',
    },
  },
  data() {
    return {
      loading: false,
      areOptionsFetching: false,
      city: {},
      weatherForecast: [],
      selectedCityTo: null,
      flightLocations: [],
      flightOptions: [],
      flightDates: [],
    };
  },
  computed: {
    isFetching() {
      return this.areOptionsFetching;
    },
  },
  methods: {
    async getCityInfo() {
      this.loading = true;
      // TODO move all REST calls to services
      this.city = await fetchData(`/cities/info/${this.name}`);
      const citySection = document.getElementById('city-title-section');
      citySection.style.background = `url("../assets/${this.name}.jpg")`;
      this.loading = false;
    },

    async getWeatherForecast() {
      this.loading = true;
      this.weatherForecast = await fetchData(`/weather/forecast/${this.city.locationKey}`);
      this.loading = false;
    },

    async getFlightLocations(term) {
      this.areOptionsFetching = true;
      // encode URI component if troubles with space chars
      this.flightLocations = await fetchData(`/flights/locations?term=${term}`);
      this.areOptionsFetching = false;
    },

    async getFlightOptions() {
      this.loading = true;
      this.flightOptions = await fetchData('/flights/info');
      this.loading = false;
    },
  },
  created() {
    this.getCityInfo();
  },
};
</script>

<style scoped lang="scss">
#city-title-section {
  background-size: cover !important;
}
</style>
