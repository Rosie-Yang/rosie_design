<template>
  <div class="container py-3">
    <h2 class="page-title mb-0">Category - 1</h2>
    <el-divider class="mt-1 mb-3"></el-divider>
    <div class="row mb-5">
      <div class="col-6 col-md-4 mb-fix" v-for="file in dataArr.data" :key="file.id">
        <div class="video-preview-wrap" @click="playVideo(file.video)"
        :style="{'backgroundImage': `url(${file.item})`}">
          <button class="play-btn"><i class="fas fa-play"></i></button>
        </div>
      </div>
    </div>
    <!-- next -->
    <h2 class="page-title mb-0">Category - 2</h2>
    <el-divider class="mt-1 mb-3"></el-divider>
    <div class="row mb-5">
      <div class="col-6 col-md-4 mb-fix" v-for="file in dataArr.data" :key="file.id">
        <div class="video-preview-wrap" @click="modalShow = true"
        :style="{'backgroundImage': `url(${file.item})`}">
          <button class="play-btn"><i class="fas fa-play"></i></button>
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
import videoData from '@/collection/videos';
import videos from '@/assets/video/test.mp4';

export default {
  components: {
    VideoPlayer,
  },
  data() {
    return {
      modalShow: false,
      dataArr: videoData,
      videoOptions: {
        autoplay: true,
        controls: true,
        muted: true,
        sources: [
          {
            src: videos,
            type: 'video/mp4',
          },
        ],
      },
    };
  },
  mounted() {
  },
  beforeDestroy() {
  },
  methods: {
    playVideo(video) {
      this.videoOptions.sources[0].src = video;
      this.modalShow = true;
    },
  },
};
</script>

<style lang="scss">
.video-preview-wrap{
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  height: 180px;
  @media (min-width: 768px) {
    height: 200px;
  }
  @media (min-width: 1200px) {
    height: 250px;
  }
}
.mb-fix{
  margin-bottom: 20px;
}
.play-btn{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  font-size: 16px;
  color: #ffffff;
  width: 40px;
  height: 40px;
  padding-right: 2px;
  line-height: 1;
  border-radius: 50%;
  border: 2px solid #ffffff;
  background: transparent;
  &:hover, &:active{
    color: #ece9e9;
    border-color: #ece9e9;
  }
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
