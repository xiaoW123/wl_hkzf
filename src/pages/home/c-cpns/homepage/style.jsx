import styled from 'styled-components'
export const HomePageWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 1000px;
  overflow-x: auto;
  background-color: #f6f5f6;

  /* 头部轮播 */
  .header_swiper {
    top: 0;
    left: 0;
    width: 100vw;
    height: 212px;
    z-index: 99;
    .swiper_item {
      width: 100%;
    }
    .adm-swiper-indicator {
      margin: 0 auto;
    }
  }
  /* 主体-整租-合租-地图找房-去出租 */
  .main_zhdq {
    display: flex;
    align-items: center;
    width: 100vw;
    height: 93px;
    padding-top: 30px;
    padding-bottom: 20px;
    background-color: #fff;
    z-index: 9999;
    .zhdq_item {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      > img {
        width: 48px;
        height: 48px;
      }
      > p {
        margin-top: 10px;
      }
    }
  }
  /* 租房小组 */
  .main_house {
    width: 100vw;
    height: 180px;
    padding: 0 10px;
    .house_title {
      box-sizing: border-box;
      height: 17px;
      padding: 15px 0;
      > h5 {
        float: left;
        font-size: 15px;
        margin: 0;
      }
      > span {
        float: right;
        font-size: 14px;
        color: #787d82;
      }
    }
    .house_item {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      height: 190px;
      margin-top: 15px;
      .item {
        display: flex;
        box-sizing: border-box;
        flex: 1;
        height: 85px;
        margin-bottom: 10px;
        align-items: center;
        background-color: #fff;

        > div:first-child {
          padding-left: 10px;
          > h5 {
            width: 70px;
            font-size: 14px;
            margin-bottom: 8px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          > p {
            width: 60px;
            font-size: 12px;
            color: #999;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }
        > div:last-child {
          width: 55px;
          height: 55px;
          margin-left: 15px;
          > img {
            width: 100%;
          }
        }
      }
      div:nth-child(1) {
        margin-right: 10px;
      }
      div:nth-child(3) {
        margin-right: 10px;
      }
    }
  }
  /* 最新资讯 */
  .main_news {
    width: 100vw;
    height: 413px;
    margin-top: 55px;
    padding: 0 10px;
    background-color: #fff;
    .news_top {
      font-size: 15px;
      margin: 10px 0 5px 10px;
      padding: 10px 0;
    }
    .new_item:last-child {
      border: none;
    }
    .new_item {
      display: flex;
      width: 94%;
      height: 120px;
      padding: 15px 0;
      margin-left: 10px;
      border-bottom: 1px solid #e5e5e5;
      .item_img {
        width: 120px;
        height: 90px;
        > img {
          width: 100%;
        }
      }

      .item_text {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 197px;
        padding-left: 12px;
        > h5 {
          font-size: 14px;
        }
        > span {
          font-size: 12px;
          color: #9c9fa1;
          div:first-child {
            float: left;
          }
          div:last-child {
            float: right;
          }
        }
      }
    }
  }
  .adm-page-indicator-dot {
    width: 8px;
    height: 8px;
    border-radius: 8px;
  }
`
