import hyRequest from '../index'

export function getHomeSwiperData() {
  return hyRequest.get({
    url: '/home/swiper'
  })
}
