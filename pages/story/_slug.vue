<template>
  <div class="m-10">
    <div v-if="error && error.statusCode === 404">
      <p>Oops... 404</p>
      <NuxtLink :to="`/`">
          <button>Back to home</button>
      </NuxtLink>
    </div>
    <div v-else-if="page && page.content">
      <p>{{page.content}}</p>
      <div class="mt-10" v-if="page.options && page.options.length">
        <div v-for="option in page.options" :key="option">
          <NuxtLink :to="`/story/page-${option.page}`">
            <button>{{option.text}}</button>
          </NuxtLink>
        </div>
      </div>
      <div class="mt-10" v-else>
        <NuxtLink :to="`/story/page-${page.previous}`">
          <button v-if="page.previous > 0">Previous</button>
        </NuxtLink>
        <NuxtLink :to="`/story/page-${page.next ? page.next : 1}`">
          <button>Next</button>
        </NuxtLink>
      </div>
    </div>
    <div class="mt-10" v-else>
      <p>To be continued...</p>
      <NuxtLink :to="`/story/page-${page.previous}`">
        <button v-if="page.previous > 0">Previous</button>
      </NuxtLink>
      <NuxtLink :to="`/story/page-2`">
          <button>Back to beginning</button>
      </NuxtLink>
      <NuxtLink :to="`/`">
          <button>Back to home</button>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex"

export default {
  props: ['error'],
  data() {
    return {
      slug: this.$route.params.slug
    }
  },
  computed: {
    ...mapState(['pages']),
    page() {
      const pageData = this.pages.find(page => {
        return page.attributes.slug == this.slug
      })
      return pageData ? pageData.attributes : []
    }
  }
}
</script>

<style lang="scss" scoped>

</style>