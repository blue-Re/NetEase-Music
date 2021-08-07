import axios from 'axios'

let baseUrl = 'http://localhost:3000'
// 获取轮播图的api,type:资源类型,对应以下类型,默认为 0 即PC
// 1: android;2: iphone;3: ipad
export function getBanner(type=0){
  return axios.get(`${baseUrl}/banner?type=${type}`)
}

// 获取推荐歌单,可选参数 : limit: 取出数量 , 默认为 10 
export function getMusicList(limit=10){
  return axios.get(`${baseUrl}/personalized?limit=${limit}`)
}

// 获取歌单详情
export function getPlayListDetail(id){
  return axios.get(`${baseUrl}/playlist/detail?id=${id}`)
}