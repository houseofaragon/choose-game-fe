<template>
  <StoryCard>
    <div v-if="error && error.statusCode === 404">
      <p>Oops... 404</p>
      <StoryCardButton :link="`/`">
        Back to home
      </StoryCardButton>
    </div>
    <div v-else-if="page && page.content">
      <div class="min-h-[200px]" v-html="page.content"></div>
      <div class="mt-10" v-if="page.options && page.options.length">
        <div class="mb-5 mr-2 flex flex-column justify-end text-right" v-for="option in page.options" :key="option.text">
          <StoryCardButton :link="`/story/page-${option.page}`">
            {{option.text}}
          </StoryCardButton>
        </div>
      </div>
      <div class="mt-10 flex flex-row justify-between" v-else>
          <StoryCardButton :link="`/story/page-${page.previous}`">
            Previous
          </StoryCardButton>
          <StoryCardButton :link="`/story/page-${page.next ? page.next : 1}`">
            Next
          </StoryCardButton>
      </div>
    </div>
    <div class="mt-10 h-20 min-w-[200px]" v-else>
      <div class="min-h-[200px] text-center">
        <p>This story is being written.</p>
        <p>To be continued...</p>
      </div>
      <div class="flex flex-row justify-between">
        <StoryCardButton
          v-if="page.previous > 0"
          :link="`/story/page-${page.previous}`">
              Previous
        </StoryCardButton>
        <StoryCardButton
          :link="`/story/page-2`">
              Restart
        </StoryCardButton>
        <StoryCardButton :link="`/`"> Home </StoryCardButton>
      </div>
    </div>
  </StoryCard>
</template>

<script>
import { mapState } from "vuex"
import StoryCard from '../../components/StoryCard.vue'
import StoryCardButton from '../../components/StoryCardButton.vue'

export default {
  props: ['error'],
  data() {
    return {
      slug: this.$route.params.slug,
    }
  },
  computed: {
    ...mapState(['pages']),
    page() {
      const pageData = this.pages.find(page => {
        return page.slug == this.slug
      })

      if (!pageData) return []

      return pageData
    }
  },
  components: {
    StoryCard,
    StoryCardButton
  }
}
</script>

<style lang="scss" scoped>
</style>