<template>
  <div class="details container d-flex">
    <div class="left-content col-8">
      <h1 class="title d-flex my-4">{{imageDetail.title}}</h1>
      <div class="gallery-wrapper">
        <div class="image-wrapper" v-for="image in imageDetail.images" v-bind:key="image.id">
          <img class="image" :src="image.link" />
          <div class="description-wrapper">
            <p class="description">{{image.description}}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="right-content col-4 d-flex align-items-center flex-column">
      <div class="votes d-flex">
        <div class="upvote">
          <i class="fa fa-arrow-up"></i>
          <span class="ml-1">{{imageDetail.ups}}</span>
        </div>
        <span class="downvote ml-5">
          <i class="fa fa-arrow-down"></i>
          <span class="ml-1">{{imageDetail.downs}}</span>
        </span>
      </div>
      <div class="score mt-3">
        <span>Score: {{imageDetail.score}}</span>
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
  .title {
    font-size: 20px;
  }

  .image{
    max-width: 100%;
  }

  body{
    background: #141518 !important;
  }

  .details{
    background: var(--darkGray)
  }

  .right-content{
    color: #fff;
    padding-top: 100px;
  }

  .votes i, .votes span, .score {
    font-size: 30px;
  }

</style>
