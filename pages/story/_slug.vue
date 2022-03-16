<template>
  <StoryCard>
    <div v-if="error && error.statusCode === 404">
      <p>Oops... 404</p>
      <StoryCardButton :link="`/`">
        Back to home
      </StoryCardButton>
    </div>
    <div v-else-if="page && content">
      <div v-if="content" class="min-h-[200px]" v-html="content"></div>
      <div class="mt-10" v-if="page.options && page.options.length">
        <div class="mb-5 mr-2 flex flex-column justify-center text-left" v-for="option in page.options" :key="option">
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
import {markdownToHtml} from '../../lib/markdownToHtml'

export default {
  props: ['error'],
  data() {
    return {
      slug: this.$route.params.slug,
      content: 'Loading...'
    }
  },
  computed: {
    ...mapState(['pages']),
    page() {
      const pageData = this.pages.find(page => {
        return page.attributes.slug == this.slug
      })

      if (!pageData) return []

      const data = pageData.attributes
      return data
    }
  },
  async created() {
      if(!this.page || !this.page.content) {
        this.content = ''
        return
      } 

      const contentString = await markdownToHtml(this.page.content)
      this.content = contentString
  },
  components: {
    StoryCard,
    StoryCardButton
  }
}
</script>

<style lang="scss" scoped>
</style>