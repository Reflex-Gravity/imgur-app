<template>
  <div class="home d-flex flex-wrap">
    <ImageCard
      src="https://i.imgur.com/kggG4pV.jpg"
      description="Never forget"
    />
    <ImageCard
      src="https://i.imgur.com/8PCofUQ.png"
      description="Never forget"
    />
    <ImageCard
      src="https://i.imgur.com/kggG4pV.jpg"
      description="Never forget"
    />
    <ImageCard
      src="https://i.imgur.com/kggG4pV.jpg"
      description="Never forget"
    />
    <ImageCard
      src="https://i.imgur.com/8PCofUQ.png"
      description="Never forget"
    />
    <ImageCard
      src="https://i.imgur.com/kggG4pV.jpg"
      description="Never forget"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import ImageCard from '@/components/ImageCard.vue';

export default {
  name: 'home',
  components: {
    ImageCard,
  },
};
</script>
