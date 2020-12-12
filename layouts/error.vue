<template>
  <div class="main-container" style="height: 100vh">
    <Navbar></Navbar>

    <div class="d-flex flex-column align-items-center my-auto">
      <h1 v-if="error.statusCode === 404">404</h1>
      <h1 v-else>
        An error occurred: {{ error.statusCode }} - {{ error.message }}
      </h1>

      <!--
      <div class="big404">404</div>
      -->

      <div class="hero-subtext subtext404">
        This error was almost certainly caused by a Democrat.
      </div>

      <div class="small">
        If they loved America this sort of thing would never happen.
      </div>

      <a href="/" class="btn btn-primary hero-button text-nowrap button404"
        >Go Back and Make America Great Again</a
      >
    </div>

    <!-- <Footer></Footer> -->
  </div>
</template>

<style lang="scss">
.big404 {
  font-size: 64px;
  margin-top: 10vh;
  margin-bottom: 5vh;
}
.subtext404 {
  margin-bottom: 12px;
}
.button404 {
  margin-bottom: 4rem;
  margin-top: 4rem;
}
</style>

<script>
export default {
  props: ["error"]
};
</script>
