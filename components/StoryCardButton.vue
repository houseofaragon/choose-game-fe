<template>
  <div class="text-left py-1 px-2 border-1 border border-black dark:border-white hover:bg-slate-100 text-md dark:hover:bg-slate-500">
    <NuxtLink :to="$props.link">
      <button class="text-s text-left">
        <slot></slot>
      </button>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  props: {
    link: String
  },
  setup () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
</style>