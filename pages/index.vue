<template>
  <StoryCard>
    <div class="">
      <h1>CAVE OF TIME </h1>
      <p>You are hiking in Snake Canyon when you find yourself lost in the strange, dimly lit Cave of Time. Gradually you can make out two passageways. One curves downward to the right; the other leads upward to the left.</p>
      <p>What happens next in the story? It all depends on the choices you make.</p>
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
h1 {
  font-size: 70px;
}
</style>