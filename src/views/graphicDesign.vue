<template>
  <div class="container py-3">
    <div class="page-title mb-0 d-md-flex justify-content-between">
      <h2 class="mb-md-0">Graphic Design</h2>
      <div>
        <el-link type="info" :class="{'text-focus': focusCollection === 'article'}"
        @click="switchData('article')">Article Layout</el-link>
        <el-divider direction="vertical"></el-divider>
        <el-link type="info" :class="{'text-focus': focusCollection === 'social'}"
        @click="switchData('social')">Social Media Template</el-link>
        <el-divider direction="vertical"></el-divider>
      </div>
    </div>
    <el-divider class="my-1"></el-divider>
    <div class="row" style="font-size: 0px;">
      <div class="col-6 col-md-4 col-lg-3 col-xxl-2-fix">
        <div v-for="pic in collection[0].images" :key="pic.id" class="position-relative mask-hover">
          <div class="h-100 w-100 position-absolute img-mask"
          @click="showSingle(pic.item)"></div>
          <el-image class="w-100" :src="pic.item" lazy
          :class="{'cus-shadow': focusCollection === 'article'}">
            <div slot="placeholder" class="bg-light-gary w-100
              d-flex align-items-center justify-content-center"
              style="height: 200px; font-size: 20px;">
                <h2 class="text-white"><i class="el-icon-loading"></i></h2>
            </div>
          </el-image>
        </div>
      </div>
      <div class="col-6 col-md-4 col-lg-3 col-xxl-2-fix">
        <div v-for="pic in collection[1].images" :key="pic.id" class="position-relative mask-hover">
          <div class="h-100 w-100 position-absolute img-mask"
          @click="showSingle(pic.item)"></div>
          <el-image class="w-100" :src="pic.item" lazy
          :class="{'cus-shadow': focusCollection === 'article'}">
            <div slot="placeholder" class="bg-light-gary w-100
              d-flex align-items-center justify-content-center"
              style="height: 200px; font-size: 20px;">
                <h2 class="text-white"><i class="el-icon-loading"></i></h2>
            </div>
          </el-image>
        </div>
      </div>
      <div class="col-6 col-md-4 col-lg-3 col-xxl-2-fix">
        <div v-for="pic in collection[2].images" :key="pic.id" class="position-relative mask-hover">
          <div class="h-100 w-100 position-absolute img-mask"
          @click="showSingle(pic.item)"></div>
          <el-image class="w-100" :src="pic.item" lazy
          :class="{'cus-shadow': focusCollection === 'article'}">
            <div slot="placeholder" class="bg-light-gary w-100
            d-flex align-items-center justify-content-center"
            style="height: 200px; font-size: 20px;">
              <h2 class="text-white"><i class="el-icon-loading"></i></h2>
            </div>
          </el-image>
        </div>
      </div>
      <div class="col-6 col-md-4 col-lg-3 col-xxl-2-fix">
        <div v-for="pic in collection[3].images" :key="pic.id" class="position-relative mask-hover">
          <div class="h-100 w-100 position-absolute img-mask"
          @click="showSingle(pic.item)"></div>
          <el-image class="w-100" :src="pic.item" lazy
          :class="{'cus-shadow': focusCollection === 'article'}">
            <div slot="placeholder" class="bg-light-gary w-100
            d-flex align-items-center justify-content-center"
            style="height: 200px; font-size: 20px;">
              <h2 class="text-white"><i class="el-icon-loading"></i></h2>
            </div>
          </el-image>
        </div>
      </div>
      <div class="col-6 col-md-4 col-lg-3 col-xxl-2-fix">
        <div v-for="pic in collection[4].images" :key="pic.id" class="position-relative mask-hover">
          <div class="h-100 w-100 position-absolute img-mask"
          @click="showSingle(pic.item)"></div>
          <el-image class="w-100" :src="pic.item" lazy
          :class="{'cus-shadow': focusCollection === 'article'}">
            <div slot="placeholder" class="bg-light-gary w-100
            d-flex align-items-center justify-content-center"
            style="height: 200px; font-size: 20px;">
              <h2 class="text-white"><i class="el-icon-loading"></i></h2>
            </div>
          </el-image>
        </div>
      </div>
    </div>
    <el-divider></el-divider>
    <vue-easy-lightbox
      :visible="visible"
      :imgs="imgs"
      @hide="handleHide"
    ></vue-easy-lightbox>
  </div>
</template>

<script>
import articleImg from '@/collection/graphic';
import socialImg from '@/collection/social';

export default {
  data() {
    return {
      imgs: '',
      visible: false,
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
      focusCollection: 'article',
    };
  },
  mounted() {
    this.checkScreenSize();
    this.switchData('article');
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
    showSingle(src) {
      this.imgs = src;
      this.show();
    },
    show() {
      this.visible = true;
    },
    handleHide() {
      this.visible = false;
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
      if (stared === 'social') {
        this.dataArr = socialImg;
      } else if (stared === 'article') {
        this.dataArr = articleImg;
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
    cursor: zoom-in;
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
</style>
