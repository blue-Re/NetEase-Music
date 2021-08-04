<template>
  <div id="swipercom">
    <div class="swiper-container" id="swiperIndex">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item, index) in imgs" :key="index">
          <img :src="item.pic" alt="" />
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
import "swiper/css/swiper.css";
import Swiper from "swiper";

import {getBanner} from '@/api/index'

export default {
  data() {
    return {
      imgs: [
        { pic: require("../assets/img/swiper1.jpg") },
        { pic: require("../assets/img/swiper2.jpg") },
        { pic: require("../assets/img/swiper3.png") },
      ],
    };
  },
  async mounted() {
    let res = await getBanner(1);
    this.imgs = res.data.banners;
    var mySwiper = new Swiper("#swiperIndex", {
      loop: true, // 循环模式选项
      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  },
};
</script>

<style lang="less">
#swipercom {
  width: 7.5rem;
  #swiperIndex.swiper-container {
    width: 7.1rem;
    height: 2.6rem;
    border-radius: 0.1rem;

    .swiper-slide img {
      width: 100%;
    }
    .swiper-pagination-bullet-active {
      background-color: orangered;
    }
  }
}
</style>
