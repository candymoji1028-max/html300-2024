<template>
  <div class="container mt-4">

    <!-- Jumbotron -->
    <div class="p-5 mb-4 bg-light rounded-3 mt-4">
      <div class="container-fluid py-5">
        <h1 class="display-5 fw-bold">Welcome to Boba & Moji's Adventure</h1>
        <p class="fs-4">A tiny world full of big surprises.</p>

        <!-- Tooltip button -->
        <button
          class="btn btn-primary mt-3"
          data-bs-toggle="tooltip"
          title="YouTube channel coming soon!"
        >
          Watch on Youtube
        </button>
      </div>
    </div>

    <!-- Story Section -->
    <div class="container">
      <h2 class="fw-bold">Story</h2>

      <p>
        Boba and Moji love exploring new places — from quiet forests to sunny meadows. Every morning begins with a spark of curiosity as they peek outside their cozy home, wondering what new surprises the day will bring. Whether it's a fluttering butterfly, a friendly bunny, or a shimmering river, the world around them is full of tiny wonders waiting to be discovered. Their adventures remind us that even the smallest moments can hold the biggest joy.
      </p>

      <p>
        As they wander through their colorful world, Boba and Moji learn something new each day. They meet new friends, find hidden paths, and share laughter along the way. Moji's playful energy keeps the journey lively, while Boba's gentle nature brings calm to every adventure.
        Together, they show that exploring with someone you care about makes every place feel magical. Follow along as they continue their journey, discovering beauty in every corner of their little universe.
      </p>
    </div>

    <!-- v-if v-else statement -->
    <!-- change text color based on showMessage -->
    <div class="mt-4">
      <p 
        v-if="showMessage"
        class="fw-bold message-green"
      >
        Thanks for visiting! See you next adventure!
      </p>

      <p 
        v-else 
        class="message-purple"
      >
        Click the button to reveal a message.
      </p>

      <button class="btn btn-info" @click="showMessage = !showMessage">
        Message
      </button>
    </div>

  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      showMessage: false
    }
  }
}
</script>

<style scoped>
.message-green {
  color: green;
}
.message-purple {
  color: purple;
}
</style>



    