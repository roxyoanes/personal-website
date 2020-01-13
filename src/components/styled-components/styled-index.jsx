import styled from "@emotion/styled";


const StyledIndex = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto;
  margin-top: 8%;
  font-family: 'Gothic A1', sans-serif;
   

  .quote-container{
    grid-column: 3/11;
    text-align: center;
  }
  .quote{
    font-size: 44pt;
    line-height: 72px;

    @media(max-width: 768px) and (min-width: 426px){
      font-size: 40pt;
      line-height: 66px;
    }
    @media(max-width: 425px){
      font-size: 26pt;
      line-height: 46px;
    }
  }
  .color{
    color: #A58861;
  }
  .author{
    display: flex;
    justify-content: flex-end;
    font-size: 24px;
  }
  .link{
    grid-row: 2/3;
    grid-column: 6/8;
    background: #191A1E;
    color: #fff;
    border-radius: 30px;
    position: relative;
    text-decoration: none;
    text-align: center;
    font-weight: 600;
    padding: 20px 0px;
    display: none;
  }
  .socials-container{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media(max-width: 425px){
      grid-row: 3/4;
      grid-column: 3/11;
      display: flex;
      flex-direction: row;
    }
    @media(min-width: 2000px){
      grid-column: 2/3;
      grid-row: 1/2;
      display: flex;
      align-items: flex-end;
    }
  }
  .socials-icon{
    margin: 8px 0;

    @media(max-width: 425px){
      margin: 8px;
    }
  }
  .social-link{
    color: black;

    &:hover{
      color: #A58861;
    }
  }

`;

export default StyledIndex;