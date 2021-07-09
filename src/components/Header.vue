<template>
  <header class="header-wrap sticky-top"
  :class="{'bg-white': !index, 'mb-4': !index,}">
    <div class="d-flex justify-content-center justify-content-lg-between position-relative h-100">
      <router-link to="/">
        <img class="h-100" style="width: 143px" src="@/assets/img/logo.png" alt="">
      </router-link>
      <ul class="nav-list" :class="{'nav-list-show': navbarShow}"
      @click="navbarShow = !navbarShow"
      style="font-family: serif;" v-if="!index">
        <li class="nav-item" :class="{'focus-path': path === '/videos'}">
          <router-link to="/videos">Videos</router-link>
        </li>
        <li class="nav-item" :class="{'focus-path': path === '/pictures'}">
          <router-link to="/pictures">Pictures</router-link>
        </li>
        <li class="nav-item" :class="{'focus-path': path === '/graphic_design'}">
          <router-link to="/graphic_design">Graphic Design</router-link>
        </li>
        <li class="nav-item" :class="{'focus-path': path === '/website_layout'}">
          <router-link to="/website_layout">Web Image Design</router-link>
        </li>
        <li class="nav-item" :class="{'focus-path': path === '/about'}">
          <router-link to="/about">About</router-link>
        </li>
      </ul>
      <button class="nav-btn  d-block d-lg-none" v-if="!index"
      @click="navbarShow = !navbarShow" :class="{'navbar-slide': navbarShow}">
      </button>
    </div>
  </header>
</template>

<script>
export default {
  props: ['index', 'path'],
  data() {
    return {
      navbarShow: false,
    };
  },
};
</script>

<style lang="scss">
  .header-wrap{
    height: 80px;
  }
  .nav-list{
    transition: 0.3s all;
    position: absolute;
    top: 100%;
    width: 100%;
    height: 0;
    overflow: hidden;
    &.nav-list-show{
      height: calc(100vh - 80px);
      .nav-item:last-child{
        border-bottom: 1px solid rgba(80, 79, 79, 0.5);
      }
    }
    @media (min-width: 992px) {
      &.nav-list-show{
        border-bottom: none;
        height: auto;
        .nav-item:last-child{
          border-bottom: none;
        }
      }
      width: auto;
      height: auto;
      position: initial;
      display: flex;
      align-items: center;
      margin-right: 2rem;
    }
  }
  .nav-item a{
    background: rgb(255, 255, 255);
    text-align: center;
    display: inline-block;
    width: 100%;
    text-decoration: none;
    color: #837979;
    padding: 1rem;
  }
  .nav-item:hover a{
    color: #000000;
    font-weight: 600;
    background: rgb(236, 236, 236);
    @media (min-width: 992px) {
      background: rgb(255, 255, 255);
    }
  }
  .focus-path a {
    color: #000000;
    font-weight: 600;
    background: rgb(236, 236, 236);
    @media (min-width: 992px) {
      background: rgb(255, 255, 255);
    }
  }
  .nav-btn{
    background: transparent;
    border-width: 0;
    width: 40px;
    height: 40px;
    position: absolute;
    top: 20px;
    right: 20px;
  }
  .nav-btn:before {
    transition: 0.25s all;
    content: '';
    width: 20px;
    height: 18px;
    border-top: 2px solid #837979;
    border-bottom: 2px solid #837979;
    position: absolute;
    top: 11px;
    left: 10px;
  }
  .navbar-slide.nav-btn:before {
    content: '';
    width: 20px;
    height: 0px;
    border-top: 0px solid #837979;
    border-bottom: 2px solid #837979;
    transform: rotate(45deg);
    position: absolute;
    top: 18px;
    left: 10px;
  }
  .nav-btn:after {
    transition: 0.25s all;
    content: '';
    width: 20px;
    height: 20px;
    border-top: 2px solid #837979;
    position: absolute;
    left: 10px;
    top: 19px;
  }
  .navbar-slide.nav-btn:after {
    content: '';
    width: 20px;
    height: 20px;
    border-top: 2px solid #837979;
    transform: rotate(-45deg);
    position: absolute;
    left: 16px;
    top: 15px;
  }
</style>
