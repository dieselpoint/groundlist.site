<template>
  <div class="main-container">
    <NavBar></NavBar>

    <div class="row hero-area">
      <div class="col-md-6 d-flex">
        <div class="my-auto text-center">
          <h1 class="hero-text">A better way to run a campaign.</h1>
          <div class="hero-subtext">
            Groundlist is software for managing a political campaign or advocacy
            group. It is free for
            <span class="under">Republicans and conservatives</span>.
          </div>

          <div class="hero-subtext">
            Groundlist is available by invitation only.
          </div>

          <!--
          <div>
            < ! - - https://app.groundlist.org/register - - >
            <a
              href="/coming_soon"
              target="_blank"
              class="btn btn-primary hero-button mx-2"
              >Get A Free-Forever Account</a
            >
          </div>
          -->

          <div>
            <a
              href="https://app.groundlist.org/register"
              class="btn btn-primary hero-button mx-2"
              >Request an Invitation</a
            >
          </div>
        </div>
      </div>
      <div class="col-md-6 d-flex">
        <div class="m-auto">
          <img
            class=""
            src="~/assets/images/undraw_candidate_red.svg"
            style="width: 35vw"
          />
        </div>
      </div>
    </div>

    <div class="text-center hero-subtext" style="margin-bottom:3rem">
      <nuxt-link to="/why" class="under why">
        Why Groundlist?
      </nuxt-link>
    </div>

    <!--
    <div class="text-center why">
      <nuxt-link to="/why">Why Groundlist?</nuxt-link>
    </div>
-->

    <div class="row">
      <div class="col-md-3 features">
        <span class="list-head footer-title">Manage</span>
        <ul>
          <li>Volunteers</li>
          <li>Donors</li>
          <li>Voters</li>
          <li>Press</li>
          <li>Others</li>
        </ul>
      </div>
      <div class="col-md-3 features">
        <span class="list-head footer-title">Communicate</span>
        <ul>
          <li>Email</li>
          <li>Mail</li>
          <li>Text</li>
          <li>Phone</li>
          <li>Walk</li>
          <li>Social</li>
        </ul>
      </div>
      <div class="col-md-3 features">
        <span class="list-head footer-title">Analyze</span>
        <ul>
          <li>Maps</li>
          <li>Models</li>
          <li>Statistics</li>
        </ul>
      </div>
      <div class="col-md-3 features">
        <span class="list-head footer-title">Connect</span>
        <ul>
          <li>Facebook</li>
          <li>Twitter</li>
          <li>Wordpress</li>
          <li>Eventbrite</li>
          <li>Mailchimp</li>
          <li>and many more...</li>
        </ul>
      </div>
    </div>

    <Footer></Footer>
  </div>
</template>

<style lang="scss" scoped>
@import "~/assets/scss/_variables.scss";

.under {
  border-bottom: 2px solid $primary;
}

.hero-area {
  margin-top: 5rem;
  margin-bottom: 5rem;
}

.why {
  font-weight: 600;
  color: $body-color;
  text-decoration: none;
}

.why:hover {
  text-decoration: none;
  color: $body-color;
  position: relative;
  top: -1px;
}

.features {
  text-align: center;

  .list-head {
    margin-bottom: 0;
    color: $primary;
    font-weight: 900;
  }

  ul {
    // @extend .navbar-light .navbar-nav .nav-link;
    // this mimics the navbar link style. couldn't find a way to extend it

    color: rgba(0, 0, 0, 0.7);

    font-size: 14px;
    font-weight: 700;
    //line-height: 3rem;
    text-align: center;
    padding: 0;

    list-style-type: none;
    margin: 0;
    padding: 0;
  }
}
</style>

<script>
export default {};
</script>
