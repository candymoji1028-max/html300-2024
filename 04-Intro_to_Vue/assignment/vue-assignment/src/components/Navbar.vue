<template>
  <!-- Bootstrap Navbar -->
  <nav class="navbar navbar-expand-lg navbar-dark bg-info">
    <div class="container-fluid">

      <!-- Brand -->
      <router-link class="navbar-brand fw-bold text-white" to="/">
        My Site
      </router-link>

      <!-- Mobile Toggle Button -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navMenu"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Collapsible Menu -->
      <div class="collapse navbar-collapse" id="navMenu">
        <ul class="navbar-nav ms-auto">

          <!-- Vue Router Navigation Links -->
          <li class="nav-item">
            <router-link class="nav-link text-white" to="/">Home</router-link>
          </li>

          <li class="nav-item">
            <router-link class="nav-link text-white" to="/images">Photo Gallery</router-link>
          </li>

          <li class="nav-item">
            <router-link class="nav-link text-white" to="/grid">Adventure Map</router-link>
          </li>

          <li class="nav-item">
            <router-link class="nav-link text-white" to="/accordion">Story Moments</router-link>
          </li>

        </ul>
      </div>

    </div>
  </nav>
</template>

<script>
export default {
  name: 'MainNavbar'
}
</script>

<style scoped>
</style>