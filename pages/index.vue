<template>
  <StoryCard>
    <div class="">
      <p>Let's start the story! Before you go remember to always say hello to the dandelions in the grass. Let's start the story! Before you go remember to always say hello to the dandelions in the grass. </p>
    </div>
    <div class="mt-10">
      <StoryCardButton :link="`/story/page-1`">
        Start
      </StoryCardButton>
    </div>
  </StoryCard>
</template>

<script>
import StoryCard from '@/components/StoryCard'
import StoryCardButton from '../components/StoryCardButton.vue'

export default {
  components: {
    StoryCard,
    StoryCardButton
  }
}
</script>

<style lang="scss" scoped>
</style>