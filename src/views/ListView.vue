<template>
  <ListViewTop :playlist="state.playlist" />
  <PlayList :playlist="state.playlist" />
</template>

<script>
import { getPlayListDetail } from "@/api/index";
import { reactive } from "@vue/reactivity";
import { useRoute } from "vue-router";
import { onMounted } from "@vue/runtime-core";

import ListViewTop from "../components/ListViewTop.vue";
import PlayList from "../components/PlayList.vue";
import store from '../store/index'
export default {
  setup() {
    const route = useRoute();
    let state = reactive({
      list: [],
      playlist: {
        creator: {},
        tracks: [],
      },
    });
    // console.log(route);
    onMounted(async () => {
      let id = route.query.id;
      let result = await getPlayListDetail(id);
      state.playlist = result.data.playlist;
      console.log(result.data);
      store.commit("setPlaylist", state.playlist.tracks);
    });
    return {
      state,
    };
  },
  components: {
    ListViewTop,
    PlayList,
  },
};
</script>

<style></style>
