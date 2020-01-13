import styled from "@emotion/styled";


const StyledIndex = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto;
  margin-top: 40px;
  font-family: 'Gothic A1', sans-serif;

  .quote-container{
    grid-column: 3/11;
    text-align: center;
  }
  .quote{
    font-size: 54px;
    line-height: 72px;
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
  }
  .socials-icon{
    margin: 8px 0;
  }
  .social-link{
    color: black;

    &:hover{
      color: #A58861;
    }
  }

`;

export default StyledIndex;