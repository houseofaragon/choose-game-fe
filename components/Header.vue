<template>
  <nav>
    <div class="flex flex-wrap justify-between p-10">
      <div class="text-x-lg">
        <NuxtLink to="/">Cave of Time</NuxtLink>
      </div>
      <div class="flex flex-row justify-end">
        <span class="mr-5"><NuxtLink to="/about">About</NuxtLink></span>
        <span class="mr-5"><NuxtLink to="/">Code</NuxtLink></span>

        <span class="text-sm font-medium">☀</span>
        <div class="form-check form-switch" @change="$props.toggleDarkMode()">
          <label for="dark-mode-toggle" class="flex flex-row cursor-pointer relative">
            <input
              type="checkbox"
              id="dark-mode-toggle"
              class="sr-only"
              :checked="isDarkMode === 'true'"
            >
            <div class="toggle-bg bg-gray-200 border-2 border-gray-200 h-6 w-11 rounded-full"></div>
            <span class="text-sm font-medium">☽</span>
          </label>
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