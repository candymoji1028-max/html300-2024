<template>
  <div class="p-3 border rounded bg-light">
    <!-- Slot allows any content to be inserted into the box -->
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'GridBox'
};
</script>
