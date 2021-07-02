<template>
  <div class="position-relative" :class="{'bg-wrap': isIndex}">
    <Header :index="isIndex" :path="routePath"/>
    <ContactList />
    <router-view></router-view>
    <el-backtop :bottom="100">
      <div
        style="{
          height: 100%;
          width: 100%;
          border-radius: 50%;
          background-color: rgb(255, 255, 255);
          box-shadow: 0 0 6px rgba(0,0,0, .12);
          text-align: center;
          line-height: 40px;
          color: rgb(130, 129, 129);
        }"
      >
        <span><i class="fas fa-arrow-up"></i></span>
      </div>
    </el-backtop>
    <footer class="p-3 footer-wrap" :class="{'text-center': !isIndex}">
      <em class="mb-2">
        Design by Rosie Yang, development by Hsueh-Han Chen.
      </em>
    </footer>
  </div>
</template>

<script>
import ContactList from '@/components/ContactList.vue';
import Header from '@/components/Header.vue';

export default {
  components: {
    ContactList,
    Header,
  },
  data() {
    return {
      showContactList: true,
      isIndex: true,
      routePath: '',
    };
  },
  watch: {
    $route(to) {
      this.routePath = this.$route.path;
      if (to.path !== '/') {
        this.showContactList = false;
        this.isIndex = false;
      } else {
        this.showContactList = true;
        this.isIndex = true;
      }
    },
  },
  mounted() {
    this.routePath = this.$route.path;
    if (this.$route.path !== '/') {
      this.showContactList = false;
      this.isIndex = false;
    } else {
      this.showContactList = true;
      this.isIndex = true;
    }
  },
};
</script>

<style lang="scss">
  .footer-wrap{
    font-size: 12px;
    text-align: center;
    @media (min-width: 992px) {
      text-align: left;
    }
  }
  .bg-wrap{
    @media (min-width: 992px) {
      background-image: url('../assets/img/test.jpg');
      background-position: center left;
      background-size: contain;
      background-repeat: no-repeat;
    }
  }
</style>
