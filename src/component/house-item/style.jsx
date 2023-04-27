import styled from 'styled-components'
export const HouseItemWrapper = styled.div`
  padding: 0 15px;
  width: 100vw;
  .item_box {
    box-sizing: border-box;
    display: flex;
    width: 100%;
    height: 110px;
    padding: 15px 0 15px 0;
    border-bottom: 1px solid #e4e6f0;

    .item_img {
      width: 106px;
      height: 80px;

      > img {
        width: 100%;
        height: 100%;
      }
    }
    .item_title {
      flex: 1;
      margin-left: 10px;
      line-height: 21px;
      .title_h5 {
        width: 220px;
        font-size: 15px;
        font-weight: 700;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      > p {
        font-size: 12px;
        color: #afb2b3;
      }
      .title_red_h5 {
        font-size: 15px;
        color: #fa5741;
      }
    }
  }
`
