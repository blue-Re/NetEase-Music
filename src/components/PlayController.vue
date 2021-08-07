<template>
  <div class="playController">
    <div class="left" @click="show = !show">
      <img :src="playlist[playCurrentIndex].al.picUrl" alt="" />
      <div class="contents">
        <div class="title">{{ playlist[playCurrentIndex].al.name }}</div>
        <div class="tops">横滑可以切换上下首</div>
      </div>
    </div>
    <div class="right">
      <svg v-if="paused" class="icon" aria-hidden="true" @click="play">
        <use xlink:href="#icon-bofang"></use>
      </svg>
      <svg v-else class="icon" aria-hidden="true" @click="play">
        <use xlink:href="#icon-zantingtingzhi"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-gedan"></use>
      </svg>
    </div>
    <PlayMusic
      :play="play"
      :paused="paused"
      @back="show = !show"
      v-show="show"
      :playDetail="playlist[playCurrentIndex]"
    />
    <audio
      ref="audio"
      :src="`https://music.163.com/song/media/outer/url?id=${playlist[playCurrentIndex].id}.mp3`"
    ></audio>
  </div>
</template>

<script>
import { mapState } from "vuex";
import PlayMusic from "@/components/PlayMusic";
export default {
  data() {
    return {
      paused: true,
      show: false,
    };
  },
  components: {
    PlayMusic,
  },
  computed: {
    ...mapState(["playlist", "playCurrentIndex"]),
  },
  methods: {
    play() {
      if (this.$refs.audio.paused) {
        this.$refs.audio.play();
        this.paused = false;
      } else {
        this.$refs.audio.pause();
        this.paused = true;
      }
    },
  },
};
</script>

<style lang="less">
.playController {
  background: #fff;
  width: 7.5rem;
  height: 1.2rem;
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #ccc;

  .left {
    display: flex;
    padding: 0 0.2rem;

    img {
      width: 0.8rem;
      height: 0.8rem;
      border-radius: 0.4rem;
    }

    .content {
      padding: 0 0.2rem;

      .tips {
        font-size: 0.2rem;
        color: #999;
      }
    }
  }

  .right {
    .icon {
      width: 0.4rem;
      height: 0.4rem;
      margin: 0 0.2rem;
    }
  }
}
</style>
