<template>
  <div class="container-xxl index-container">
    <div class="row h-100 justify-content-center no-gutters">
      <div class="d-none d-lg-block col-md-10  col-lg-5"></div>
      <div class="col-12 col-md-10 col-lg-7
      d-flex flex-column justify-content-center align-items-start">
        <div class="mb-5" style="padding: 0 28px;">
          <h2 class="d-inline-block mr-3 mb-0 index-title">
            You only live once, you might as well be amusing.
          </h2>
          <em>—— Coco Chanel</em>
          <h4 class="mt-4 mb-0">GRAPHIC DISIGNER</h4>
          <p>
            <span>illustration</span>
            <el-divider direction="vertical"></el-divider>
            <span>written</span>
            <el-divider direction="vertical"></el-divider>
            <span>films</span>
            <el-divider direction="vertical"></el-divider>
            <span>cooking</span>
            <el-divider direction="vertical"></el-divider>
            <span>baking</span>
          </p>
        </div>
        <CardCarousel />
      </div>
    </div>
  </div>
</template>

<script>
import CardCarousel from '@/components/CardCarousel.vue';

export default {
  components: {
    CardCarousel,
  },
};
</script>

<style lang="scss">
$header-height: 80;
$footer-height: 82;

  .index-container{
    height: calc(100vh - #{$header-height}px - #{$footer-height}px);
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .index-title{
    font-family: serif;
    font-size: 24px;
    @media (min-width: 768px) {
      font-size: 26px;
    }
    @media (min-width: 992px) {
      font-size: 30px;
    }
  }
</style>
