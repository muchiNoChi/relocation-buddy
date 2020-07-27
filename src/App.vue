<template>
  <div id="app">
    <b-navbar fixed-top class="has-background-dark">
      <template slot="brand">
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <div class="title has-text-light">The Company</div>
        </b-navbar-item>
      </template>
    </b-navbar>
    <router-view />
    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          <strong>Relocation Buddy</strong> by <a href="https://github.com/muchiNoChi">Aliaksandra Abramovich</a>.
        </p>
      </div>
    </footer>
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

  footer {
    background: none;
  }
}
</style>
