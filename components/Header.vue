<template>
  <nav class="w-full t-0 l-0">
    <div class=" flex flex-wrap justify-between p-10">
      <div class="text-lg">
        <NuxtLink to="/">Cave of Time</NuxtLink>
      </div>
      <div class="flex flex-row justify-end items-top">
        <span class="mr-5"><NuxtLink to="/about">About</NuxtLink></span>
        <span class="mr-5">
          <a href="https://github.com/houseofaragon/choose-game-fe" target="blank">Code</a>
        </span>
        <div>
          <button @click="$props.toggleDarkMode()">
            <span class="text-xl" v-if="isDarkMode === 'true'">☼</span>
            <span v-else>☽</span>
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    isDarkMode: String,
    toggleDarkMode: Function
  },
}
</script>

<style lang="scss" scoped>
.toggle-bg:after {
    content: '';
    @apply absolute top-0.5 left-0.5 bg-white border border-gray-300 rounded-full h-5 w-5 transition shadow-sm;
}

input:checked + .toggle-bg:after {
    transform: translateX(100%);
    @apply border-white;
}

input:checked + .toggle-bg {
    @apply bg-blue-600 border-blue-600;
}
</style>