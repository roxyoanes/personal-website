import styled from "@emotion/styled"

const StyledHeader = styled.div`
  grid-column-start: 2;
  display: grid;
  grid-template-columns: 0.3fr 1fr 0.3fr;
  margin-top: 12px;

  .title {
    font-size: 16pt;
    letter-spacing: -1px;
    margin: 0;
  }

  .name {
    text-decoration: none;
    color: black;
  }

  .middle-section {
    text-align: center;

    @media (max-width: 425px) {
      margin-top: 32px;
    }
  }

  .status {
    font-size: 9pt;
    font-weight: bold;
    display: inline-block;
    margin: 0;

    @media (min-width: 2000px) {
      font-size: 18pt;
    }
  }

  .dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #51a384;
    display: inline-block;
    margin-right: 4px;

    @media (min-width: 2000px) {
      width: 12px;
      height: 12px;
    }
  }

  .job-name {
    font-weight: 400;
    font-size: 8pt;
    letter-spacing: 3px;
    color: #9a9a9a;
    margin-top: 8px;

    @media (min-width: 768px) {
      margin-top: 14px;
    }

    @media (min-width: 2000px) {
      font-size: 16pt;
      margin-top: 26px;
    }
  }

  .end-section {
    display: flex;
    justify-content: flex-end;
    align-items: baseline;
  }

  .language {
    display: flex;
    flex-direction: row;
  }

  .lang-option {
    font-size: 10pt;
    text-decoration: none;
    color: black;
    font-weight: 700;
    border-color: transparent;
    background-color: transparent;
    margin: 0;
    cursor: pointer;

    &:hover {
      color: #a58861;
    }

    @media (min-width: 2000px) {
      font-size: 14pt;
    }
  }

  .nav-icon {
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

  .hamburger-menu {
    width: 22px;
    height: 2px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #ffffff00;
    transition: all 0.25s ease-in-out;

    &:before {
      transform: rotate(0deg) translate(0px, -4px);
    }
    &:after {
      transform: rotate(0deg) translate(0px, 4px);
    }

    &:before,
    &:after {
      content: "";
      position: absolute;
      width: 22px;
      height: 2px;
      background: black;
    }
  }
`
export default StyledHeader
