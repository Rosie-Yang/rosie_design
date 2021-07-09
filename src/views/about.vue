<template>
  <div class="container py-3">
    <div class="row justify-content-center mb-4">
      <div class="col-12 col-md-5 order-1 order-md-0 d-flex flex-column">
        <img class="w-100 mb-3 order-1 order-md-0" src="@/assets/img/about_page/about-2.jpg" alt="">
        <div class="border border-dark px-3 text-center about-text-position w-100
        order-0 order-md-1 mb-3 mb-md-0">
          <div>
            <img class="w-25" src="@/assets/img/logo.png" alt="">
          </div>
          <el-divider class="my-1"></el-divider>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Perspiciatis fuga optio delectus similique quas, totam maiores eaque? Sint,
            mollitia cupiditate?
          </p>
        </div>
      </div>
      <div class="col-12 col-md-5 order-0 order-md-1 mb-3 mb-md-0">
        <h2 class="page-title"> &mdash; About.</h2>
        <div class="user-img-bg"></div>
      </div>
    </div>
    <div class="row no-gutters justify-content-center">
      <div class="col-12 col-md-5 exp-list-bg py-3">
        <h2 class="page-title text-center">Experience &mdash;</h2>
        <div class="px-5 py-4">
          <img class="w-100" src="@/assets/img/about_page/about-3.jpg" alt="">
        </div>
      </div>
      <div class="col-12 col-md-5 exp-list-bg">
        <div class="py-3 py-md-5 px-5 px-md-3 h-100">
          <h3 class="mb-0">Lorem, ipsum.</h3>
          <ul class="exp-list">
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet consectetur.</li>
            <li>Lorem ipsum dolor sit amet consectetur.</li>
          </ul>
          <h3 class="mb-0">Lorem, ipsum dolor.</h3>
          <ul class="exp-list">
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet consectetur.</li>
            <li>Lorem ipsum dolor sit amet consectetur.</li>
          </ul>
          <h3 class="mb-0">Lorem, ipsum dolor.</h3>
          <ul class="exp-list">
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet consectetur.</li>
          </ul>
        </div>
      </div>
    </div>
    <el-divider></el-divider>
  </div>
</template>

<script>

export default {
  data() {
    return {
    };
  },
  mounted() {
  },
  beforeDestroy() {
  },
  methods: {
  },
};
</script>

<style lang="scss">
.user-img-bg{
  height: calc(100% - 32px);
  min-height: 370px;
  background-image: url('../assets/img/about_page/about-1.jpg');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}
.exp-list-bg{
  background: rgba(243, 227, 204, 0.3);
}
.exp-list{
  padding-left: 1.25rem;
  list-style-type: disc;
  margin-bottom: 1rem;
}
</style>
