<template>
  <div id="app">
    <Navbar />
    <router-view />

    <!-- Adding Footer to all pages -->
    <footer class="text-center py-4 mt-5 bg-light">
      <p class="mb-0">&copy; 2026 Boba & Moji's Adventure</p>
    </footer>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>
</style>
