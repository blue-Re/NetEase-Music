import { createStore } from 'vuex'

import { getLyric } from '@/api/index'
import { phoneLogin, userDetail } from '../api'
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
    playCurrentIndex: 0,
    lyric: '',
    currentTime: 0,
    intervalId: 0,
    user: {
      isLogin: false,
      account:{},
      userDetail:{}
    }
  },
  mutations: {
    setPlaylist(state, value) {
      state.playlist = value
    },
    pushPlaylist(state, value) {
      state.playlist.push(value)
    },
    // 设置播放的索引值
    setPlayIndex(state, value) {
      state.playCurrentIndex = value
    },
    // 修改state的歌词
    setLyric(state, value) {
      state.lyric = value
    },
    // 修改state的时间
    setCurrentTime(state, value) {
      state.currentTime = value
    },
    // setUser
    setUser(state, value) {
      state.user = value
    }
  },
  actions: {
    // 异步获取歌词
    async reqLyric({ commit, state }, payload) {
      let result = await getLyric(payload.id)
      commit('setLyric', result.data.lrc.lyric)
      // console.log(result);
    },
    // 手机号登录
    async phoneLogin({ commit, state }, payload) {
      let result = await phoneLogin(payload.phone, payload.password)
      console.log(result);
      if (result.data.code == 200) {
        state.user.isLogin = true
        state.user.account = result.data.account

        let userDetail =  await userDetail(result.data.account.id)
        state.user.userDetail = userDetail.data
        localStorage.userData = JSON.stringify(state.user)
        commit('setUser', state.user)
      }
      return result
    }
  },
  getters: {
    lyricList(state) {
      let arr = state.lyric.split(/\n/igs).map((item, i, arr) => {
        let min = parseInt(item.slice(1, 3));
        let sec = parseInt(item.slice(4, 6));
        let mill = parseInt(item.slice(7, 10));

        return {
          min, sec, mill,
          lyric: item.slice(12, item.length),
          content: item,
          time: mill + sec * 1000 + min * 60 * 1000
        }
      })
      arr.forEach((item, i) => {
        if (i == 0) {
          item.pre = 0
        } else {
          item.pre = arr[i - 1].time
        }
      })
      return arr
    }
  },
  modules: {
  }
})
