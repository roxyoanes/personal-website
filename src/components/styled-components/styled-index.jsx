import styled from "@emotion/styled"

const StyledIndex = styled.div`
  grid-column-start: 2;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  margin: 8% 0;
  align-items: baseline;
  justify-content: center;
  min-height: 460px;
  width: 100%;

  @media (max-width: 1024px) {
    align-items: center;
  }

  .quote-container {
    grid-column: 3/11;
    text-align: center;
    max-width: 800px;

    @media (min-width: 1025px) {
      grid-column: 4/10;
    }
  }
  .quote {
    font-size: 44pt;
    line-height: 72px;

    @media (max-width: 1024px) and (min-width: 426px) {
      font-size: 40pt;
      line-height: 56px;
    }
    @media (max-width: 425px) {
      font-size: 26pt;
      line-height: 38px;
      margin: 2% 0;
    }
  }
  .color {
    color: #a58861;
  }
  .author {
    display: flex;
    justify-content: flex-end;
    font-size: 24px;
  }
  .link {
    grid-row: 2/3;
    grid-column: 6/8;
    background: #191a1e;
    color: #fff;
    border-radius: 30px;
    position: relative;
    text-decoration: none;
    text-align: center;
    font-weight: 600;
    padding: 20px 0px;
    display: none;
  }
  .socials-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (max-width: 425px) {
      grid-row: 2/3;
      grid-column: 3/11;
      display: flex;
      flex-direction: row;
      margin-top: 12px;
    }
    @media (min-width: 2000px) {
      grid-column: 2/3;
      grid-row: 1/2;
      display: flex;
      align-items: flex-end;
    }
  }
  .socials-icon {
    margin: 8px 0;

    @media (max-width: 425px) {
      margin: 8px;
    }
  }
  .social-link {
    color: black;

    &:hover {
      color: #a58861;
    }
  }
`

export default StyledIndex
