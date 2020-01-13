import styled from "@emotion/styled";

const StyledHeader = styled.div`

    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: 1fr;
    font-family: 'Gothic A1', sans-serif;
     

  .title {
    font-size: 16pt;
    letter-spacing: -1px;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    @media(max-width: 425px){
      grid-column: 2/3;
    }
    @media(min-width: 2000px){
      grid-column: 2/3;
    }
  }
  .name{
    text-decoration: none;
    color: black;
    grid-column: 2/6;
  }
  .middle-section{
    grid-column: 6/8;
    text-align: center;

    @media(max-width: 1024px) and (min-width: 426px){
      grid-column: 5/9;
    }
    @media(max-width: 425px){
      grid-column: 2/12;
      grid-row: 2/3;
    }
  }
  .status{
    font-size: 9pt;
    font-weight: bold;
    margin-bottom: 0;
    display: inline-block;

    @media(min-width: 2000px){
      font-size: 18pt;
    }

  }
  .dot{
    width: 8px;
    height: 8px;
    border-radius: 4px;
    background: #51A384;
    display: inline-block;
    margin-right: 4px;

    @media(min-width: 2000px){
      width: 12px;
      height: 12px;
    }
  }
  .job-name{
    font-weight: 400;
    font-size: 8pt;
    letter-spacing: 2px;
    color: #9A9A9A;
    margin-top: 10px;

    @media(min-width: 768px){
      margin-top: 14px;
    }
    @media(min-width: 2000px){
      font-size: 16pt;
      margin-top: 26px;
    }
  }
  .end-section{
    grid-column: 12;
    display: flex;
    align-items: center;
    justify-content: center;
    
    @media(max-width: 425px){
      grid-column: 11/12;
    }
    @media(min-width: 2000px){
      grid-column: 11/12;
    }
   
  }
  .lang-option{
    font-size: 10pt;
    margin: 6px;
    text-decoration: none;
    color: black;
    font-weight: 700;

    &:hover{
      color: #A58861;
    }
    @media(min-width: 2000px){
      font-size: 14pt;
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
