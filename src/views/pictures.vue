<template>
  <div class="container py-3">
    <h2 class="page-title mb-0">Retouching</h2>
    <el-divider class="my-1"></el-divider>
    <div class="row" style="font-size: 0px;">
      <div class="col-6 col-md-4 col-lg-3">
        <div v-for="pic in collection[0].images" :key="pic.id" class="position-relative mask-hover">
          <div class="h-100 w-100 position-absolute img-mask"
          @click="showSingle(pic.item)"></div>
          <el-image :src="pic.item" class="w-100" lazy>
            <div slot="placeholder" class="bg-light-gary w-100
            d-flex align-items-center justify-content-center"
            style="height: 200px; font-size: 20px;">
              <h2 class="text-white"><i class="el-icon-loading"></i></h2>
            </div>
          </el-image>
        </div>
      </div>
      <div class="col-6 col-md-4 col-lg-3">
        <div v-for="pic in collection[1].images" :key="pic.id" class="position-relative mask-hover">
          <div class="h-100 w-100 position-absolute img-mask"
          @click="showSingle(pic.item)"></div>
          <el-image :src="pic.item" class="w-100" lazy>
            <div slot="placeholder" class="bg-light-gary w-100
            d-flex align-items-center justify-content-center"
            style="height: 200px; font-size: 20px;">
              <h2 class="text-white"><i class="el-icon-loading"></i></h2>
            </div>
          </el-image>
        </div>
      </div>
      <div class="col-6 col-md-4 col-lg-3">
        <div v-for="pic in collection[2].images" :key="pic.id" class="position-relative mask-hover">
          <div class="h-100 w-100 position-absolute img-mask"
          @click="showSingle(pic.item)"></div>
          <el-image :src="pic.item" class="w-100" lazy>
            <div slot="placeholder" class="bg-light-gary w-100
            d-flex align-items-center justify-content-center"
            style="height: 200px; font-size: 20px;">
              <h2 class="text-white"><i class="el-icon-loading"></i></h2>
            </div>
          </el-image>
        </div>
      </div>
      <div class="col-6 col-md-4 col-lg-3">
        <div v-for="pic in collection[3].images" :key="pic.id" class="position-relative mask-hover">
          <div class="h-100 w-100 position-absolute img-mask"
          @click="showSingle(pic.item)"></div>
          <el-image :src="pic.item" class="w-100" lazy>
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
import dataImg from '@/collection/retouching';

export default {
  data() {
    return {
      imgs: '',
      visible: false,
      screenSize: 0,
      dataArr: dataImg,
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
      ],
    };
  },
  mounted() {
    this.checkScreenSize();
    this.setImages();
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
      if (this.screenSize >= 992) {
        this.arrUnit = 4;
      } else if (this.screenSize >= 768) {
        this.arrUnit = 3;
      } else {
        this.arrUnit = 2;
      }
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
  img{
    width: 100%;
  }
  /* .el-image{
    padding: 10px 0;
  } */
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
</style>
