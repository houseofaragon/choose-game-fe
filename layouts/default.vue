<template>
  <div class="h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm">
    <Header
      :isDarkMode="isDarkMode" :toggleDarkMode="toggleDarkMode" />
    <div class="m-auto">
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
    const theme = localStorage.darkMode
      ? localStorage.darkMode
      : 'false';
    this.isDarkMode = theme
  },
  methods: {
    toggleDarkMode() {
      this.isDarkMode = this.isDarkMode === 'dark' ? 'false' : 'dark'
      localStorage.setItem('darkMode', this.isDarkMode)
    }
  },
  watch: {
    isDarkMode(isDarkMode) {
      console.log(isDarkMode)
      if(isDarkMode === 'dark') {
          document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    }
  },
}

</script>