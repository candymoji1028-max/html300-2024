<template>
  <div class="container mt-4">

    <!-- Page Header -->
    <h1 class="fw-bold">Boba & Moji's Photo Adventures</h1>
    <p class="fs-5">A collection of moments from their colorful world.</p>

    <!-- Image Grid -->
    <!-- Loop through the photos array and create one card per photo -->
    <div class="row g-4 mt-4">
      <div
        class="col-md-3 d-flex"
        v-for="(photo, index) in photos"
        :key="index"
      >
        <!-- Bind image source and alt text from each photo object -->
        <div class="card shadow-sm flex-fill">
          <img
            :src="photo.src"
            class="card-img-top gallery-img"
            :alt="photo.alt"
          />
          <!-- Display title and description from the photo object -->
          <div class="card-body">
            <h2 class="card-title fs-5">{{ photo.title }}</h2>
            <p class="card-text">{{ photo.description }}</p>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'ImagesPage',
  data() {
    return {
      photos: [
        {
          src: require('../assets/images/1-boba-moji.png'),
          alt: 'Boba and Moji',
          title: 'Boba & Moji at Home',
          description:
            'Boba and Moji begin their day in front of their cozy little house, ready to explore the world together.'
        },
        {
          src: require('../assets/images/2-boba-moji-butterfly.png'),
          alt: 'Boba is walking with Moji and Butterfly',
          title: 'Butterfly Encounter',
          description:
            'While walking through the garden, a friendly butterfly joins Boba and Moji, fluttering gently above them.'
        },
        {
          src: require('../assets/images/3-boba-moji-fish.png'),
          alt: 'Boba and Moji are looking at the fish',
          title: 'Watching the Fish',
          description:
            'Near the river, Boba and Moji pause to admire the colorful fish swimming peacefully beneath the water\'s surface.'
        },
        {
          src: require('../assets/images/4-boba-moji-bunny.png'),
          alt: 'Boba and Moji with a bunny',
          title: 'Forest Bunny Friend',
          description:
            'Deep in the meadow, Boba and Moji meet a curious little bunny who hops over to greet them.'
        }
      ]
    }
  }
}
</script>

<style scoped>
.gallery-img {
  object-fit: cover;
}
</style>



    