<template>
  <nav>
    <div class="flex flex-wrap justify-between bg-white dark:bg-slate-900 p-10">
      <div>
        <NuxtLink to="/">Home</NuxtLink>
      </div>
      <div class="flex flex-row justify-end">
        <NuxtLink to="/about">About</NuxtLink>
        <NuxtLink to="/">Code</NuxtLink>
        <div class="form-check form-switch" @change="$props.toggleDarkMode()">
          <label for="toggle-example" class="flex items-center cursor-pointer relative mb-4">
            <input
              type="checkbox"
              id="toggle-example"
              class="sr-only"
              :checked="isDarkMode === 'true'"
            >
            <div class="toggle-bg bg-gray-200 border-2 border-gray-200 h-6 w-11 rounded-full"></div>
            <span class="ml-3 text-sm font-medium">Dark Mode</span>
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