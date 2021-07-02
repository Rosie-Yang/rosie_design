<template>
  <ul class="contact-list">
    <li>
      <a class="text-decoration-none contact-link-fix contact-link-border"
      href="#">104</a>
    </li>
    <li>
      <a class="contact-link" href="mailto:s7988660@gmail.com">
        <i class="fas fa-envelope-square"></i>
      </a>
    </li>
    <li>
      <a class="contact-link" href="#">
        <i class="fab fa-instagram-square"></i>
      </a>
    </li>
    <li>
      <a class="contact-link" href="#">
        <i class="fab fa-line"></i>
      </a>
    </li>
  </ul>
</template>

<script>
export default {

};
</script>

<style lang="scss">
  .contact-list{
    z-index: 1200;
    list-style: none;
    padding-left: 20px;
    position: fixed;
    left: 0;
    bottom: 50%;
    transform: translateY(50%);

    @media (max-width: 1024px) {
      position: absolute;
      bottom: 25px;
      left: 50%;
      transform: translateX(-50%);
      width: 200px;
      display: flex;
      justify-content: space-around;
      padding-left: 0;
    }
    li{
      font-size: 24px;
      margin-bottom: 20px;
      line-height: 1;
    }
  }
  .contact-link{
    color: rgb(131, 121, 121);
    &:hover, &:active{
      color: #000000;
    }
  }
  .contact-link-border{
    border: 1px solid rgb(131, 121, 121);
    &:hover, &:active{
      border-color: #000000;
    }
  }
  .contact-link-fix{
    vertical-align: middle;
    padding: 2px 0;
    font-size: 12px;
    border-radius: 3px;
    color: #ffffff;
    background-color: rgb(131, 121, 121);
    &:hover, &:active{
      background-color: #000000;
      color: #ffffff;
    }
  }
</style>
