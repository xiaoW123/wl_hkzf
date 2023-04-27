import styled from 'styled-components'
export const MinePageWrapper = styled.div`
  .bg_img {
    width: 100vw;
    height: 191px;
    background: url(${require('@/assets/img/bg.png')}) no-repeat 0 0 / contain;
  }
  .head_sculpture {
    position: relative;
    box-sizing: border-box;
    top: -50px;
    left: 50%;
    transform: translateX(-50%);
    width: 320px;
    height: 165px;
    box-shadow: 0px 0px 10px 3px #ddd;
    background-color: #fff;

    .toux {
      position: absolute;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 70px;
      height: 70px;
      padding: 5px;
      background-color: #f5f5f5;
      box-shadow: 0px 2px 2px #bdbdbd;
      border-radius: 50%;
      > img {
        width: 100%;
        height: 100%;
      }
    }
    .name {
      transform: translateY(50px);
      width: 100%;
      height: 20px;
      text-align: center;
    }
    .button {
      width: 100%;
      height: 30px;
      text-align: center;
      margin-top: 70px;
      > button {
        > span {
          font-size: 14px;
        }
      }
    }
  }
  .mine_info {
    margin-top: -45px;
    width: 100vw;
    height: 190px;
    background-color: blue;
  }
  .jrwm {
    width: 345px;
    height: 85px;
    margin: 20px auto;
    background: url(${require('@/assets/img/join.png')}) no-repeat 0 0 / contain;
  }
`
