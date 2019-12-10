<template>
  <router-link :to="`/${details.id}`">
    <div class="image-card d-flex flex-column">
      <div class="image-wrapper">
        <img :src="src"/>
      </div>
      <span class="image-caption text-truncate">
        {{ description }}
      </span>
    </div>
  </router-link>
</template>

<script>

export default {
  name: 'imageCard',
  props: {
    description: String,
    src: String,
    details: Object,
  },
};

</script>

<style scoped>

  .image-card {
    background: #fff;
    float: left;
    height: 200px;
    width: 240px;
    overflow: hidden;
    margin: 10px;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.4);
  }

  .image-wrapper {
    height: 173px;
  }

  .image-card img {
    width: 240px;
  }

  .image-card > .image-caption{
    padding: 10px;
    color: #fff;
    background-color: var(--gray);
    font-size: 14px;
    position: absolute;
    bottom: 0;
    width: 100%;
  }

</style>
