<template>
  <div class="image-card shadow-lg d-flex flex-column">
    <img :src="src"/>
    <span class="image-caption">
      {{ description }}
    </span>
  </div>
</template>

<script>

export default {
  name: 'imageCard',
  props: {
    description: String,
    src: String,
  },
};

</script>

<style>

  .image-card {
    background: #fff;
    height: 250px;
    width: 250px;
  }

  .image-card > img {
    height: 100%;
    width: 100%;
  }

  .image-card > .image-caption{
    padding: 10px;
    color: #fff;
    background-color: var(--primary);
  }

</style>
