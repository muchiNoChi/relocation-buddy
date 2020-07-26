<template>
  <div>
    <div class="title is-1">
      The Company
    </div>
    <i>Find the place you were always looking for.</i>
    <div>
      <a href="#cities_list" class="button is-primary">
        See cities
      </a>
    </div>
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
                <img :src="'../assets/' + city.currentWeather.weatherIcon + '.png'">
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
  </div>
</template>

<script>
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
        params: { name: city.name },
      });
    },

    async getCities() {
      this.cities = await fetch('/cities/info').then(res => res.json());
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

<style scoped lang="scss">
@import "../mystyles";
.city-card {
  cursor: pointer;
  margin: 0 10px;

  &:hover, &:focus {
    .card-image {
      overflow: hidden;

      .main-image {
        overflow: hidden;
        transform: scale(1.2);
        transition: all .5s;
      }
    }
  }
}
</style>
