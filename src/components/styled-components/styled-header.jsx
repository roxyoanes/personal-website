import styled from "@emotion/styled";

const StyledHeader = styled.div`

    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: 1fr;
    font-family: 'Gothic A1', sans-serif;
  

  .title {
    font-size: 22px;
    letter-spacing: -1px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  .name{
    text-decoration: none;
    color: black;
    grid-column: 2/6;
  }
  .middle-section{
    grid-column: 6/8;
    text-align: center;
  }
  .status{
    font-size: 13px;
    font-weight: bold;
    margin-bottom: 0;

  }
  .dot{
    width: 8px;
    height: 8px;
    border-radius: 4px;
    background: #51A384;
    float: left;
    margin: 18px 0px 0 0;
  }
  .job-name{
    font-weight: 400;
    font-size: 11px;
    letter-spacing: 1.8px;
    color: #9A9A9A;
    margin-top: 4px;
  }
  .end-section{
    grid-column: 12;
    display: flex;
    align-items: center;
    justify-content: center;

  }
  .lang-option{
    font-size: 14px;
    margin: 6px;
    text-decoration: none;
    color: black;
    font-weight: 700;

    &:hover{
      color: #A58861;
    }
  }

  .nav-icon{
    position: fixed;
    right: 10px;
    top: 10px;
    width: 60px;
    height: 60px;
    cursor: pointer;
    z-index: 20;
    mix-blend-mode: difference;
    display: none;

  }
  .hamburger-menu{
    width: 22px;
    height: 2px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #ffffff00;
    transition: all .25s ease-in-out;

    &:before{
      transform: rotate(0deg) translate(0px,-4px);
    }
    &:after{
      transform: rotate(0deg) translate(0px,4px);
    }
    &:before, &:after{
      content: '';
      position: absolute;
      width: 22px;
      height: 2px;
      background: black;
    }
  }
`;


export default StyledHeader;
