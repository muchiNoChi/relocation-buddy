<template>
  <div>
    <!-- HERO SECTION -->
    <section class="hero is-dark is-fullheight">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            The Company
          </h1>
          <h2 class="subtitle">
            Find the place you were always looking for.
          </h2>
          <a href="#cities_list" class="button is-dark">
            See cities
          </a>
        </div>
      </div>
    </section>
    <!-- CITIES LIST SECTION -->
    <section>
      <a id="cities_list"></a>
      <div class="title">Where we are</div>
      <div class="container columns is-fluid is-desktop">
        <div class="column card city-card"
          v-for="city in cities"
          :key="city.name"
          @click="goToCityDetails(city)">
          <div class="card-image">
            <figure class="main-image image is-4by3">
              <img :src="'../assets/' + city.locationName + '.jpg'">
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <figure class="image is-48x48">
                  <img :src="'https://developer.accuweather.com/sites/default/files/' + (city.currentWeather.weatherIcon || 0).toString().padStart(2, '0') + '-s.png'">
                </figure>
              </div>
              <div class="media-content">
                <p class="title is-4">{{ city.locationName }}</p>
                <div class="level">
                  <span class="level-left">{{ city.currentWeather.weatherText }}</span>
                  <span class="tag is-light mr-2">{{ city.currentWeather.temperature }}°C</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// TODO move to service together with REST calls
async function fetchData(url, ...params) {
  return fetch(url, params).then(res => res.json());
}

export default {
  name: 'home',
  data() {
    return {
      cities: [],
    };
  },
  methods: {
    goToCityDetails(city) {
      this.$router.push({
        name: 'city-details',
        params: { name: city.locationName },
      });
    },

    async getCities() {
      this.cities = await fetchData('/cities/info');
    },
  },
  computed: {
    // f() {},
  },
  created() {
    this.getCities();
  },
};
</script>

<style lang="scss">
#cities_list {
  height: 30px;
}

.city-card {
  cursor: pointer;
  margin: 0 10px;

  &:hover, &:focus {
    .card-image {
      overflow: hidden;

      .main-image {
        transform: scale(1.2);
        transition: all .5s;
      }
    }
  }
}
</style>
