import styled from 'styled-components'
export const RegisteWrapper = styled.div`
  .city_change {
    position: static;
  }
  .adm-form {
    margin-top: 30px;
  }
  .eye {
    padding: 4px;
    cursor: pointer;
    svg {
      display: block;
      font-size: var(--adm-font-size-7);
    }
  }
  .enroll_floor {
    display: flex;
    width: 100vw;
    font-size: 14px;
    text-align: center;
    padding: 0 15px;
    div {
      display: flex;
      width: 50%;
    }
    div:nth-child(2) {
      display: flex;
      justify-content: flex-end;
      width: 50%;
    }
    span {
      color: blue;
      text-decoration: underline;
    }
  }
`
