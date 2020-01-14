import styled from "@emotion/styled";

const StyledFooter = styled.div`
  display: grid;
  grid-template-columns: 0.75fr 1fr 0.75fr;
  background: #282727;
  color: white;
  min-height: 100vh;

  @media(max-width: 768px) {
    grid-template-columns: 0.25fr 1fr 0.25fr;
  }

  .form-wrapper {
    grid-column-start: 2;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  .title {
    font-size: 16pt;
    font-weight: 200;
    letter-spacing: 3px;
    align-self: center;
  }

  input, textarea {
    /* 30px for padding, 2px for border */
    width: calc(100% - 30px - 2px);
    display: block;
    padding: 20px 15px;
    border: 1px solid #656565;
    border-radius: 0;
    background: #282727;
    margin: 8px 0;
    color: white;

    &:hover{
      border-color: #A58861;
      outline: 0;
      box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102,175,233,.6);
    }
  }

  textarea {
    height: 150px;
  }

  input::placeholder, textarea::placeholder{
    color: white;
    font-family: 'Gothic A1', sans-serif;
    font-size: 10pt;
  }

  .btn-wrapper {
    display: flex;
    justify-content: flex-end;

    .send-btn {
      color: white;
      background-color: transparent;
      border: 1px solid #656565;
      padding: 6pt 22pt;
      cursor: pointer;

      &:hover{
        color: #A58861;
        border-color: #A58861;
      }
    }
  }
`;
export default StyledFooter;