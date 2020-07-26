<template>
  <div id="app">
    <b-navbar fixed-top class="has-background-primary">
      <template slot="brand">
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <div class="title has-text-light">The Company</div>
        </b-navbar-item>
      </template>
      <template slot="start">
      </template>

      <template slot="end">
        <b-navbar-item tag="div">
          <button class="button is-primary"
            @click="showCallInfo = !showCallInfo">
              Join us
          </button>
        </b-navbar-item>
      </template>
    </b-navbar>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      showCallInfo: true,
    };
  },
};
</script>

<style lang="scss">
@import "./mystyles";

#app {
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
