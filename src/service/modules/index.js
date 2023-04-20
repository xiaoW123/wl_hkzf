import hyRequest from '../index'
// 获取轮播图片
export function getHomeSwiperData() {
  return hyRequest.get({
    url: '/home/swiper'
  })
}
// 获取租房小组数据
export function getHomeGroupsData() {
  return hyRequest.get({
    url: '/home/groups',
  })
}
// 获取最新资讯数据
export function getHomeNewsData() {
  return hyRequest.get({
    url: '/home/news'
  })
}
// 获取城市列表
export function getAreaCityData(level = 1) {
  return hyRequest.get({
    url: '/area/city',
    params: {
      level
    }
  })
}

// 获取热门城市数据
export function getAreaHotData() {
  return hyRequest.get({
    url: '/area/hot'
  })
}
