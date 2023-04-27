import styled from 'styled-components'
export const HeadBarWrapper = styled.div`
  .city_change {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
    display: flex;
    align-items: center;
    width: 100vw;
    height: 45px;
    background-color: ${(props) => props.bgc};
    font-size: 18px;

    div:first-child {
      width: 30px;
      padding-left: 15px;
    }
    div:last-child {
      width: 100%;
      padding-right: 30px;
      text-align: center;
    }
  }
  .component {
    /* background-color: pink; */
  }
`
