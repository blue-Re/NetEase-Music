import { createStore } from 'vuex'

export default createStore({
  state: {
    playlist: [{
      name: "彩券",
      id: 1486513704,
      al: {
        id: 96680121,
        name: "彩券",
        pic: 109951165386012140,
        picUrl: "http://p3.music.126.net/NP1Zg57UUbHNzAhw7n-LeA==/109951165386012146.jpg",
        pic_str: "109951165386012146"
      }
    }],
    playCurrentIndex: 0
  },
  mutations: {
    setPlaylist(state, value) {
      state.playlist = value
    },
    // 设置播放的索引值
    setPlayIndex(state,value){
      state.playCurrentIndex = value
    }
  },
  actions: {

  },
  modules: {
  }
})
