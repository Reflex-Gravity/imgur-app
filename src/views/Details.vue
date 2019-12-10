<template>
  <div class="details container d-flex">
    <div class="left-content col-8">
      <h1 class="title">{{imageDetail.title}}</h1>
      <div class="gallery-wrapper">
        <div class="image-wrapper" v-for="image in imageDetail.images" v-bind:key="image.id">
          <img class="image" :src="image.link" />
          <div class="description-wrapper">
            <p class="description">{{image.description}}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="right-content d-flex col-4">
      <div class="votes">
        <div class="upvote">
          <span class="upvote-icon"></span>
          <span>{{imageDetail.ups}}</span>
        </div>
        <span class="downvote">
          <span class="upvote-icon"></span>
          <span>{{imageDetail.downs}}</span>
        </span>
      </div>
      <div class="score">
        <span> Score {{imageDetail.score}}</span>
      </div>
    </div>
  </div>
</template>

<script>

import * as Fetcher from '../fetcher/api';
import store from '../store';
import * as Actions from '../store/actions';

export default {
  name: 'details',
  data() {
    return {
      ...this.mapState({
        imageDetail: 'imageDetail',
      }),
    };
  },
  mounted() {
    const storeData = store.getState();
    const currentImageId = this.$route.params.imageId;

    if (storeData !== null && storeData.images) {
      if (storeData.images.find(_image => _image.id === currentImageId)) {
        store.dispatch(
          Actions.setImageDetails(storeData.images.find(_image => _image.id === currentImageId)),
        );
      } else {
        Fetcher.fetchImageDetails(this.$route.params.imageId);
      }
    } else {
      Fetcher.fetchImageDetails(this.$route.params.imageId);
    }
  },
};

</script>

<style scoped>

  .image{
    max-width: 100%;
  }

  body{
    background: var(--primary)
  }

  .left-content{
    background: var(--gray)
  }

  .upvote-icon{
    background-image: url("/img/icons/arrow_down.png")
  }

  .right-content{
    color: #fff;
  }

</style>
