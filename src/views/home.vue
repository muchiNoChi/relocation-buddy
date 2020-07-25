<template>
  <div>
    The Company
    <span>Find the place you were always looking for</span>
    <a href="#office_list" class="button">
      See offices
    </a>
    <a id="office_list"></a>
    <div>Offices list</div>
    <div v-for="office in offices" :key="office.locationName">
        <b-button @click="goToOfficeDetails(office)">{{ office.locationName }}</b-button>
        <div>{{ office.currentWeather }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      offices: [],
    };
  },
  methods: {
    goToOfficeDetails(office) {
      this.$router.push({
        name: 'office-details',
        params: { office, name: office.locationName },
      });
    },

    async getOffices() {
      this.offices = await fetch('/offices/info').then(res => res.json());
    },
  },
  computed: {
    // f() {},
  },
  created() {
    this.getOffices();
  },
};
</script>
