<template>
  <div class="home">
    <TopNav/>
    <Swiper/>
    <IconList/>
    <MusicList/>
  </div>
</template>

<script>
// @ is an alias to /src
import TopNav from "@/components/TopNav.vue";
import Swiper from "@/components/Swiper.vue";
import IconList from "@/components/IconList.vue";
import MusicList from "@/components/MusicList.vue";

export default {
  name: "Home",
  components: {
    TopNav,
    Swiper,
    IconList,MusicList
  },
};
</script>
