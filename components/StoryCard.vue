<template>
  <div class="card h-screen h-full flex flex-col items-center m-auto w-30 md:w-[50%] lg:w-[30%] vertical-align:middle md:mt-20 pb-20">
    <slot></slot> 
  </div>
</template>

<script>
export default {
  setup () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.card {
  height: 100vh;
}
</style>