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

// 根据城市名称查询该城市信息
export function getAreaInfoData(name = '赣州') {
  return hyRequest.get({
    url: '/area/info',
    params: {
      name
    }
  })
}

// 小区关键词查询
export function getAreaCommunityData() {
  return hyRequest.get({
    url: '/area/community',
    params: {
      name: '北京',
      id: 'AREA|88cff55c-aaa4-e2e0'
    }
  })
}

// 查询房源数据
export function getAreaMapData() {
  return hyRequest.get({
    url: '/area/map',
    params: {
      id: 'AREA|88cff55c-aaa4-e2e0'
    }
  })
}

// 获取子级城市列表
export function getAreaData() {
  return hyRequest.get({
    url: '/area',
    params: {
      id: 'AREA|88cff55c-aaa4-e2e0'
    }
  })
}

// 获取服务查询条件
export function getHouseConditionData(id = 'AREA|88cff55c-aaa4-e2e0') {
  return hyRequest.get({
    url: '/houses/condition',
    params: {
      id
    }
  })
}

// 根据条件查询房屋信息

export function getHouseData(params) {
  return hyRequest.get({
    url: '/houses',
    params
  })
}

// 根据idcode查看房屋具体信息
export function getHouseCodeData(id) {
  return hyRequest.get({
    url: `/houses/${id}`
  })
}
