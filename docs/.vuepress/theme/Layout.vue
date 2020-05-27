<template>
  <div class="main-container">
    <Navbar></Navbar>

    <div v-if="$page.frontmatter.home">
      <div class="hero-wrapper">
        <h1 class="hero-text">A better way to run a political campaign.</h1>
        <div class="hero-subtext">
          Built for conservatives, Groundlist is a system for managing and
          communicating with groups of people. The core system is free.
        </div>

        <div>
          <a
            href="https://app.groundlist.org/#/register"
            target="_blank"
            class="btn btn-primary hero-button mx-2"
          >Get Started</a>
          <a
            href="https://app.groundlist.org"
            target="_blank"
            class="btn btn-outline-primary hero-button mx-2"
          >Sign In</a>
        </div>
      </div>
      <img class="hero-image mb-5" src="/images/undraw_candidate_red.svg" />
    </div>

    <div v-else class="secondary">
      <div class="row">
        <div class="col">
          <Content></Content>
        </div>
        <div v-if="$page.frontmatter.image" class="col d-flex justify-content-center">
          <img :src="$page.frontmatter.image" class="secondary-image" />
        </div>
      </div>
    </div>

    <Footer></Footer>
  </div>
</template>
<style lang="scss">
@import "../styles/groundlist.scss";
</style>

<script>
export default {};
</script>
