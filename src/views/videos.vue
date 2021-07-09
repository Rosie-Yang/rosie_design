<template>
  <div class="container py-3">
    <div class="page-title mb-0 d-md-flex justify-content-between">
      <h2 class="mb-md-0">Videos Collection</h2>
      <div>
        <el-link type="info" :class="{'text-focus': focusCollection === 'model'}"
        @click="switchData('model')">Model</el-link>
        <el-divider direction="vertical"></el-divider>
        <el-link type="info" :class="{'text-focus': focusCollection === 'products'}"
        @click="switchData('products')">Products</el-link>
        <el-divider direction="vertical"></el-divider>
      </div>
    </div>
    <el-divider class="my-1"></el-divider>
    <div class="row justify-content-center" style="font-size: 0px;">
      <div class="col-6 col-md-4 col-lg-3 col-xxl-2-fix">
        <div v-for="file in collection[0].images" :key="file.id" @click="playVideo(file.video)"
        class="position-relative mask-hover">
          <div class="h-100 w-100 position-absolute img-mask"></div>
          <button class="play-btn"><i class="fas fa-play"></i></button>
          <el-image :src="file.item" :lazy="true"></el-image>
        </div>
      </div>
      <div class="col-6 col-md-4 col-lg-3 col-xxl-2-fix">
        <div v-for="file in collection[1].images" :key="file.id" @click="playVideo(file.video)"
        class="position-relative mask-hover">
          <div class="h-100 w-100 position-absolute img-mask"></div>
          <button class="play-btn"><i class="fas fa-play"></i></button>
          <el-image :src="file.item" :lazy="true"></el-image>
        </div>
      </div>
      <div class="col-6 col-md-4 col-lg-3 col-xxl-2-fix">
        <div v-for="file in collection[2].images" :key="file.id" @click="playVideo(file.video)"
        class="position-relative mask-hover">
          <div class="h-100 w-100 position-absolute img-mask"></div>
          <button class="play-btn"><i class="fas fa-play"></i></button>
          <el-image :src="file.item" :lazy="true"></el-image>
        </div>
      </div>
      <div class="col-6 col-md-4 col-lg-3 col-xxl-2-fix">
        <div v-for="file in collection[3].images" :key="file.id" @click="playVideo(file.video)"
        class="position-relative mask-hover">
          <div class="h-100 w-100 position-absolute img-mask"></div>
          <button class="play-btn"><i class="fas fa-play"></i></button>
          <el-image :src="file.item" :lazy="true"></el-image>
        </div>
      </div>
      <div class="col-6 col-md-4 col-lg-3 col-xxl-2-fix">
        <div v-for="file in collection[4].images" :key="file.id" @click="playVideo(file.video)"
        class="position-relative mask-hover">
          <div class="h-100 w-100 position-absolute img-mask"></div>
          <button class="play-btn"><i class="fas fa-play"></i></button>
          <el-image :src="file.item" :lazy="true"></el-image>
        </div>
      </div>
    </div>
    <el-divider></el-divider>
    <div class="cus-modal-wrap p-3" v-if="modalShow" @click.self="modalShow = false">
      <div class="modal-content">
        <!-- <div class="text-right">
          <button class="modal-hide-btn" @click="modalShow = false">
            <i class="el-icon-close"></i>
          </button>
        </div> -->
        <VideoPlayer :options="videoOptions"/>
      </div>
    </div>
  </div>
</template>

<script>
import VideoPlayer from '@/components/VideoPlayer.vue';

import modelTake from '@/collection/videos-model';
import productTake from '@/collection/videos-products';

export default {
  components: {
    VideoPlayer,
  },
  data() {
    return {
      modalShow: false,
      videoOptions: {
        autoplay: true,
        controls: true,
        muted: false,
        sources: [
          {
            src: null,
            type: 'video/mp4',
          },
        ],
      },
      screenSize: 0,
      dataArr: null,
      arrUnit: 4,
      collection: [
        {
          images: [],
        },
        {
          images: [],
        },
        {
          images: [],
        },
        {
          images: [],
        },
        {
          images: [],
        },
      ],
      focusCollection: 'model',
    };
  },
  mounted() {
    this.checkScreenSize();
    this.switchData('model');
    window.addEventListener('resize', this.checkScreenSize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.checkScreenSize);
  },
  watch: {
    arrUnit() {
      this.setImages();
    },
  },
  methods: {
    playVideo(video) {
      this.videoOptions.sources[0].src = video;
      this.modalShow = true;
    },
    checkScreenSize() {
      this.screenSize = window.innerWidth;
      if (this.screenSize >= 1441) {
        this.arrUnit = 5;
      } else if (this.screenSize >= 992) {
        this.arrUnit = 4;
      } else if (this.screenSize >= 768) {
        this.arrUnit = 3;
      } else {
        this.arrUnit = 2;
      }
    },
    switchData(stared) {
      this.focusCollection = stared;
      if (stared === 'model') {
        this.dataArr = modelTake;
      } else if (stared === 'products') {
        this.dataArr = productTake;
      }
      this.setImages();
    },
    setImages() {
      const separateNum = Math.floor(this.dataArr.data.length / this.arrUnit);
      this.collection.forEach((item, index) => {
        if (index < this.arrUnit) {
          this.collection[index].images = this.dataArr.data
            .slice(separateNum * index, separateNum * (index + 1));
        } else if (index >= this.arrUnit) {
          this.collection[index].images = [];
        }
      });

      if (this.dataArr.data.length % this.arrUnit !== 0) {
        const lastArr = this.dataArr.data.slice((this.dataArr.data.length % this.arrUnit) * -1);
        lastArr.forEach((item, index) => {
          this.collection[index].images.push(item);
        });
      }
    },
  },
};
</script>

<style scoped>
@media (min-width: 1441px) {
  .col-xxl-2-fix{
    flex: 0 0 20%;
    max-width: 20%;
  }
}
  img{
    width: 100%;
  }
  .img-mask{
    display: none;
    z-index: 1000;
    cursor: pointer;
    background-color: rgb(0, 0, 0, 0.5);
  }
  .mask-hover{
    margin: 20px 0;
  }
  .mask-hover:hover .img-mask{
    display: block;
  }
  .text-focus, .text-focus:active, .text-focus:hover{
    color: #313030;
    text-decoration: underline;
  }
  .play-btn{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  font-size: 32px;
  color: #ffffff;
  line-height: 1;
  border-width: 0;
  background: transparent;
  z-index: 1010;
}
.cus-modal-wrap{
  z-index: 1450;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.75);
}
.modal-content{
  padding: 3px;
  z-index: 1500;
  position: fixed;
  width: 80%;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  background: rgba(161, 160, 160, 0.8);
}
.modal-hide-btn{
  border-width: 0;
  color: #ffffff;
  font-size: 25px;
  background: transparent;
}
</style>
