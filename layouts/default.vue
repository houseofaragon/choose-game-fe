<template>
  <div class="h-screen bg-slate-50 dark:bg-[#141414] text-slate-900 dark:text-white text-md">
    <Header
      :isDarkMode="isDarkMode" :toggleDarkMode="toggleDarkMode" />
    <div class="m-auto px-10">
      <Grid />
      <Nuxt />
    </div>
  </div>
</template>

<script>
import Header from '~/components/Header'

export default {
  components: {
    Header
  },
  data() {
    return {
      isDarkMode: 'false',
    }
  },
  mounted() {
    const supportDarkMode =
      window.matchMedia('(prefers-color-scheme: dark)').matches === true;

    const theme = supportDarkMode
      ? 'true'
      : localStorage.darkMode
        ? localStorage.darkMode
        : 'false'

    this.isDarkMode = theme
  },
  methods: {
    toggleDarkMode() {
      this.isDarkMode = this.isDarkMode === 'true' ? 'false' : 'true'
      localStorage.setItem('darkMode', this.isDarkMode)
    }
  },
  watch: {
    isDarkMode(isDarkMode) {
      if(isDarkMode === 'true') {
          document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    }
  },
}

</script>