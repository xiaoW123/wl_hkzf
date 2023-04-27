import styled from 'styled-components'
export const SearchWrapper = styled.div`
  /* 头部搜索 */
  .header_search {
    position: absolute;
    top: ${(props) => props.searchTop};
    left: ${(props) => props.searchLeft};
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    width: ${(props) => props.searchWidth};
    height: 35px;
    background-color: #fff;
    padding: 5px 5px 5px 8px;
    border-radius: 5px;

    z-index: 9999;
    .dd_list {
      box-sizing: border-box;
      display: flex;
      align-items: center;
      width: 45px;
      height: 16px;
      overflow: hidden;
      > p {
        width: 35px;
        height: 16px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-size: 14px;
      }
    }
    .search {
      flex: 1;
      margin-left: 10px;
      display: flex;
      align-items: center;
      padding-left: 10px;
      border-left: 1px solid #e5e5e5;
      height: 16px;
      > p {
        font-size: 13px;
        color: #9c9fa1;
      }
    }
  }
  /* 头部地图 */
  .header_dt {
    position: absolute;
    width: 25px;
    height: 25px;
    right: 15px;
    top: ${(props) => props.dtTop};
    line-height: 20px;
    text-align: center;
    color: ${(props) => props.dtColor};
    border-radius: 50%;
    border: 2px solid ${(props) => props.dtColor};
    z-index: 9999;
  }
`
