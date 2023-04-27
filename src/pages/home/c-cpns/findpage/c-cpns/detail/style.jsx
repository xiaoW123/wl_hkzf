import styled from 'styled-components'
export const DetailWrapper = styled.div`
  position: relative;
  background-color: #f6f5f6;
  .component {
    position: absolute;
    right: 30px;
    top: 15px;
    font-size: 14px;
    z-index: 999;
    color: #fff;
  }
  .city_change {
    position: absolute !important;
    color: #fff;
  }
  .adm-swiper-slide {
    width: 100vw;
    height: 252px;
    .swiper_img {
      width: 100%;
      height: 100%;
    }
  }
  .adm-page-indicator-dot {
    width: 8px;
    height: 8px;
    border-radius: 8px;
  }
  .info {
    width: 100vw;
    height: 244px;
    padding: 15px;
    background-color: #fff;
    margin-bottom: 20px;
    > h3 {
      margin-bottom: 10px;
    }
    .price {
      width: 100%;
      height: 83px;
      margin: 15px 0;
      padding: 15px 0;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      border-top: solid 1px #cecece;
      border-bottom: solid 1px #cecece;
      div {
        flex: 33.33%;
        text-align: center;
      }
      div:nth-child(-n + 3) {
        color: #fa5741;
        font-size: 18px;
        font-weight: bolde;
      }
      div:nth-child(1) span {
        color: #fa5741;
        font-size: 14px;
        font-weight: bolde;
      }
    }
    .wz_info {
      width: 100%;
      height: 52px;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      div {
        width: 50%;
        color: #999;
        font-size: 13px;
        > span {
          color: #333;
          font-size: 14px;
        }
      }
    }
  }
  .dt_info {
    background-color: #fff;
    div:first-child {
      width: 100vw;
      height: 44px;
      padding-left: 12px;
      line-height: 44px;
      font-size: 14px;
    }
    div:last-child {
      width: 100vw;
      height: 144px;
      padding: 0;
    }
  }
  .fwpt {
    margin-bottom: 20px;
    background-color: #fff;
    > div:first-child {
      width: 100vw;
      height: 44px;
      padding-left: 12px;
      line-height: 44px;
      font-size: 14px;
      font-weight: bolder;
      border-bottom: solid 1px #cecece;
    }
    div:last-child {
      display: flex;
      width: 100vw;
      padding-left: 12px;
      line-height: 44px;
      font-size: 14px;
      > div {
        width: 70px;
        height: 50px;
        text-align: center;
        line-height: 50px;
      }
    }
  }
  .fwgk {
    margin-bottom: 20px;
    background-color: #fff;
    > div:first-child {
      width: 100vw;
      height: 44px;
      padding-left: 12px;
      line-height: 44px;
      font-size: 14px;
      font-weight: bolder;
      border-bottom: solid 1px #cecece;
    }
    > div:nth-child(2) {
      display: flex;
      margin-top: 20px;
      width: 100vw;
      height: 62px;
      padding: 0 15px;
      display: flex;
      .toux {
        width: 52px;
        height: 52px;
        > img {
          width: 100%;
          height: 100%;
        }
      }
      .name {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 81px;
        margin-left: 10px;
      }
      .button {
        flex: 1;
        line-height: 62px;
        margin-left: 130px;
      }
    }
    > div:last-child {
      width: 100vw;
      margin-top: 15px;
      padding-left: 12px;
      line-height: 1.4;
      font-size: 14px;
      padding-bottom: 20px;
    }
  }
  .cnxh {
    width: 100vw;
    padding-bottom: 50px;
    background-color: #fff;

    > div:first-child {
      width: 100vw;
      height: 44px;
      padding-left: 12px;
      line-height: 44px;
      font-size: 14px;
      font-weight: bolder;
      border-bottom: solid 1px #cecece;
    }
  }
  .gnan {
    display: flex;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100vw;
    height: 50px;
    border-top: solid 1px #cecece;
    background-color: #fff;
    div {
      flex: 1;
      text-align: center;
      line-height: 50px;
      color: #999;
    }
    div:nth-child(1) {
      border-right: solid 1px #cecece;
    }
    div:nth-child(3) {
      color: #fff;
      background-color: #21b97a;
    }
  }
`
