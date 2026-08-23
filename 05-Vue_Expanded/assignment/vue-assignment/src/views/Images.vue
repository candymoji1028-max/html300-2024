<template>
  <div class="container mt-4">
    <!-- Header component with named slot-->
    <Header>
      <template #title>Boba & Moji's Photo Adventures</template>
    </Header>

    <p class="fs-5">These images represent early concept art for the series.</p>

    <!-- Image Grid -->
    <!-- Loop through the photos array and create one card per photo -->
    <div class="row g-4 mt-4">
      <div
        class="col-md-3 d-flex"
        v-for="(photo, index) in photos"
        :key="index"
      >
        <!-- ImageCard component receives src, alt, and title as props -->
        <ImageCard
          :src="photo.src"
          :alt="photo.alt"
          :title="photo.title"
        />
      </div>
    </div>

  </div>
</template>

<script>
import Header from '../components/Header.vue';
import ImageCard from '../components/ImageCard.vue';

export default {
  name: 'ImagesPage',

  components: {
    Header,
    ImageCard
  },

  data() {
    return {

      photos: [
        {
          src: require('../assets/images/1-boba-moji.png'),
          alt: 'Boba and Moji',
          title: 'Boba & Moji at Home',
        },
        {
          src: require('../assets/images/2-boba-moji-butterfly.png'),
          alt: 'Boba is walking with Moji and Butterfly',
          title: 'Butterfly Encounter',
        },
        {
          src: require('../assets/images/3-boba-moji-fish.png'),
          alt: 'Boba and Moji are looking at the fish',
          title: 'Watching the Fish',
        },
        {
          src: require('../assets/images/4-boba-moji-bunny.png'),
          alt: 'Boba and Moji with a bunny',
          title: 'Forest Bunny Friend',
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



    