<template>
  <div class="w-100" @mouseleave="isStared = null">
    <!-- 1440px up width:200 amount: 4 -->
    <!-- 1200px  width:220 amount: 3 -->
    <!-- 576px  width:180 amount: 3 -->
    <!-- 375px  width:170 amount: 2 -->
    <split-carousel v-if="carouselDataObj.amount"
      :height="300"
      :item-width="carouselDataObj.width"
      :display-amount="carouselDataObj.amount"
      :arrow-area-width="28">
      <button class="arrow-btn" slot="left-arrow">
        <i class="el-icon-arrow-left"></i>
      </button>
      <split-carousel-item v-for="(item, index) in data" :key="index"
      class="p-0">
       <div class="card-carousel-item" @mouseover="isStared = index">
          <div class="camera">
            <div class="space" :class="{'space-rotate': isStared === index}">
                <div class="card-face p-4" :class="item.classObjCardFace">
                  <p class="card-text-bg h-100 mb-0
                  d-flex align-items-center justify-content-center">
                    <strong>{{item.describes}}</strong>
                  </p>
                </div>
                <div class="card-back p-3">
                  <router-link :to="item.path"
                  class="d-block h-100 card-text-bg text-decoration-none py-3
                  d-flex flex-column align-items-center justify-content-around">
                    <span>{{item.detail}}</span>
                    <br>
                    <span>view more
                      <span><i class="far fa-hand-point-right"></i></span>
                    </span>
                  </router-link>
                </div>
            </div>
          </div>
        </div>
      </split-carousel-item>
      <button class="arrow-btn" slot="right-arrow">
        <i class="el-icon-arrow-right"></i>
      </button>
    </split-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [
        {
          path: 'videos',
          classObjCardFace: {
            'face-bg-videos': true,
          },
          describes: 'Video Collection',
          detail: 'include my project videos & life videos',
        },
        {
          path: 'pictures',
          classObjCardFace: {
            'face-bg-pictures': true,
          },
          describes: 'Pictures Retouching',
          detail: 'my pictures retouching with prople & products',
        },
        {
          path: 'graphic_design',
          classObjCardFace: {
            'face-bg-graphic-design': true,
          },
          describes: 'Graphic Design',
          detail: 'my graphic design job',
        },
        {
          path: 'website_layout',
          classObjCardFace: {
            'face-bg-website-layout': true,
          },
          describes: 'Website Index Design',
          detail: 'website index design work in offcial website',
        },
        {
          path: 'illustration',
          classObjCardFace: {
            'face-bg-illustration': true,
          },
          describes: 'illustration Collection',
          detail: 'own my illustration collection',
        },
      ],
      isStared: null,
      carouselDataObj: {
        width: null,
        amount: null,
      },
    };
  },
  mounted() {
    this.checkScreenSize();
  },
  methods: {
    checkScreenSize() {
      this.screenSize = window.innerWidth;
      if (this.screenSize >= 1440) {
        this.carouselDataObj.width = 200;
        this.carouselDataObj.amount = 4;
      } else if (this.screenSize >= 1200) {
        this.carouselDataObj.width = 220;
        this.carouselDataObj.amount = 3;
      } else if (this.screenSize >= 576) {
        this.carouselDataObj.width = 180;
        this.carouselDataObj.amount = 3;
      } else {
        this.carouselDataObj.width = 170;
        this.carouselDataObj.amount = 2;
      }
    },
  },
};
</script>

<style lang="scss">
.arrow-btn{
  border-width: 0;
  padding: 0;
  width: 26px;
  background-color: transparent;
  &:hover, &:active{
    i{
      font-weight: 600;
      color: #5f6061;
    }
  }
  i{
    color: #605d5d;
  }
}
.card-carousel-item{
  display: inline-block;
  height: 100%;
  width: 100%;
  cursor: pointer;
}
.camera{
    width: 100%;
    height: 100%;
    perspective-origin:center center;
    -moz-perspective-origin:center center;
    -webkit-perspective-origin:center center;
}
.space{
    position:relative;
    width:100%;
    height:100%;
    transform-style: preserve-3d;
    -moz-transform-style: preserve-3d;
    -webkit-transform-style: preserve-3d;
    transform-origin: center center;
    transition: .75s all ease;
}
.space-rotate{
  transform: rotateY(-180deg);
}
.space div{
  position:absolute;
  width:100%;
  height:100%;
  text-align:center;
}
.card-face{
  // background-image: url('../assets/img/item-2.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}
.card-text-bg{
  background-color: rgba(255, 255, 255, 0.5);
  strong{
    color: rgb(57, 56, 56);
    font-size: 20px;
  }
  span{
    color: rgb(57, 56, 56);
  }
}
.face-bg-videos{
  background-image: url('../assets/img/item-1.jpg');
}
.face-bg-pictures{
  background-image: url('../assets/img/item-2.jpg');
}
.face-bg-graphic-design{
  background-image: url('../assets/img/item-3.jpg');
}
.face-bg-website-layout{
  background-image: url('../assets/img/item-4.jpg');
}
.face-bg-illustration{
  background-image: url('../assets/img/item-5.jpg');
}
.card-back{
  background-image: url('../assets/img/test-item.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  transform: translateX(0px) translateY(0px) translateZ(-1px) rotateY(180deg);
}
//

</style>
