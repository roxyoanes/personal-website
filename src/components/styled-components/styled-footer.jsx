import styled from "@emotion/styled";

const StyledFooter = styled.div`

    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: 1fr;
    font-family: 'Gothic A1', sans-serif;

    .contact{
      grid-column: 3/11;

      @media(min-width: 1025px){
        grid-column: 4/10;
      }
    }
    .title{
      font-size: 16pt;
      text-align: center;
    }
    
    .form{
      padding: 20px 15px;
      border: 1px solid #656565;
      border-radius: 0;
      background: transparent;
      margin: 8px;

      &:hover{
        border-color: #A58861;
        outline: 0;
        box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102,175,233,.6);
      }
    }
    input::placeholder, textarea::placeholder{
      color: black;
      font-family: 'Gothic A1', sans-serif;
      font-size: 10pt;
    }
    .send-wrapper{
      margin-bottom: 20px;
      display: grid;
      grid-template-rows: 1fr 1fr 3fr;
      grid-column: auto;
    }
    .btn-wrapper{
      display: flex;
      justify-content: flex-end;
    }
    .send-btn{
      color: black;
      background-color: transparent;
      border: 1px solid #656565;
      padding: 6pt 22pt;
      cursor: pointer;

      &:hover{
        color: #A58861;
        border-color: #A58861;
      }
    }
`;

export default StyledFooter;
