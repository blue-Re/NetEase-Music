<template>
  <div class="playMusic">
    <div class="bg" :style="{ backgroundImage: `url(${playDetail.al.picUrl})` }"></div>
    <div class="playTop">
      <div class="back" @click="$emit('back')">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-xia"></use>
        </svg>
      </div>
      <div class="center">
        <div class="title">
          <marquee behavior="scroll" direction="left">{{ playDetail.al.name }}</marquee>
        </div>
      </div>
      <div class="share">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-fenxiang"></use>
        </svg>
      </div>
    </div>
    <div class="playContent">
      <img src="../assets/img/needle-ip6.png" :class="{active:!paused}" alt="" class="needle" />
      <img src="../assets/img/disc-ip6.png" alt="" class="disc" />
      <img :src="playDetail.al.picUrl" alt="" />
    </div>
    <div class="playLyric"></div>
    <div class="progress"></div>
    <div class="playFooter">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-xunhuan"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-shangyishou"></use>
      </svg>
      <svg v-if="paused" @click="play" class="icon play" aria-hidden="true">
        <use xlink:href="#icon-bofang1"></use>
      </svg>
      <svg v-else class="icon" aria-hidden="true" @click="play">
        <use xlink:href="#icon-zantingtingzhi"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-xiayishou"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-biaodanliebiao-031"></use>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  props: ["playDetail", "paused", "play"],
};
</script>

<style lang="less" scoped>
.playMusic {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: #fff;
  .bg {
    position: absolute;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background-size: auto 100%;
    background-position: center;
    filter: blur(60px);
  }
  .playTop {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 7.5rem;
    height: 1.2rem;
    position: absolute;
    left: 0;
    top: 0;
    color: #fff;
    padding: 0 0.4rem;
    .icon {
      fill: #fff;
      width: 0.4rem;
      height: 0.4rem;
    }
    marquee {
      width: 5rem;
      flex: 1;
    }
  }
  .playContent {
    position: absolute;
    width: 7.5rem;
    height: 7.5rem;
    left: 0;
    top: 1.5rem;
    .needle {
      width: 2.5rem;
      height: auto;
      position: absolute;
      left: 3.5rem;
      transform-origin: 0.3rem 0;
      transform: rotate(-10deg);
      transition: all 1s;
      z-index: 10;
    }
    .needle.active {
      width: 2.5rem;
      height: auto;
      position: absolute;
      left: 3.5rem;
      transform-origin: 0.3rem 0;
      transform: rotate(15deg);
      transition: all 1s;
      z-index: 10;
    }
    .disc {
      width: 5.5rem;
      height: auto;
      position: absolute;
      left: calc(50% - 2.75rem);
      top: 2.5rem;
    }
    .playImg {
      width: 3.4rem;
      height: 3.4rem;
      border-radius: 1.7rem;
      position: absolute;
      left: calc(50% - 1.7rem);
      top: 3.55rem;
    }
  }
  .playFooter {
    width: 7.5rem;
    height: 1.5rem;
    position: absolute;
    left: 0;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.4rem;
    .icon {
      fill: #fff;
      width: 0.5rem;
      height: 0.5rem;
    }
    .play.icon {
      width: 1rem;
      height: 1rem;
    }
  }
  .playLyric {
    position: absolute;
    width: 7.5rem;
    height: 8rem;
    left: 0;
    top: calc(50% - 4rem);
    overflow: scroll;
    text-align: center;
    color: #fff;
    padding: 0.2rem 0;
    .active {
      color: red;
    }
  }
}
</style>
