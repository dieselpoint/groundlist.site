<template>
  <div class="main-container">
    <NavBar></NavBar>
    <div class="secondary">
      <div class="row">
        <div class="col-md-6">
          <nuxt-content :document="page" />
        </div>
        <div v-if="page.image" class="col-md-6 ">
          <img :src="getImage(page.image)" class="d-block w-75" />
          <div class="w-75 text-center">
            <span class="small text-muted">{{ page.image_caption }}</span>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    const slug = params.slug || "index";
    const page = await $content(slug)
      .fetch()
      .catch(err => {
        error({ statusCode: 404, message: "Page not found" });
      });

    return {
      page
    };
  },

  methods: {
    getImage(pic) {
      return require("~/assets/images/" + pic);
    }
  }
};
</script>
