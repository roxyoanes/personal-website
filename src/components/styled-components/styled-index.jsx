import styled from "@emotion/styled"

const StyledIndex = styled.div`
  grid-column-start: 2;
  display: grid;
  grid-template-columns: 0.1fr 3fr 0.1fr;
  grid-template-rows: 3fr 1fr;
  min-height: 460px;
  width: 100%;

  @media (max-width: 425px) {
    grid-template-columns: 1fr;
  }

  .quote-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .quote {
    font-size: 44pt;
    line-height: 72px;
    max-width: 800px;
    text-align: center;

    @media (max-width: 1024px) and (min-width: 426px) {
      font-size: 40pt;
      line-height: 56px;
    }

    @media (max-width: 425px) {
      font-size: 26pt;
      line-height: 38px;
    }
  }

  .color {
    color: #a58861;
  }

  .link {
    background: #191a1e;
    color: #fff;
    border-radius: 30px;
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
      flex-direction: row;
    }
  }

  .socials-icon {
    margin: 8px 0;
    @media (max-width: 425px) {
      margin: 0 8px;
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
