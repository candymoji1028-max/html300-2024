<template>
  <div
    class="p-3 text-center"
    :class="{ 'border border-primary': hasBorder }"
    @click="toggleBorder"
  >
    <!-- Bootstrap class 'img-fluid' keep the image responsive -->
    <img :src="src" :alt="alt" class="img-fluid mb-2" />
    <h5>{{ title }}</h5>
  </div>
</template>


//props with src, alt, title and validation
<script>
import toggleBorder from '../mixins/toggleBorder';

export default {
  name: 'ImageCard',
  mixins: [toggleBorder],
  props: {
    src: { type: String, required: true },
    alt: { type: String, required: true },
    title: { type: String, required: true }
  }
};
</script>

