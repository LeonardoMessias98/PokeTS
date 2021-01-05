import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;

  .stat {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 5px;
    width: 60px;

    h2 {
      text-align: center;
      font-family: Roboto, sans-serif;
      font-size: 10px;
      font-weight: 600;
      height: 30px;
      display: flex;
      align-items: center;
    }
  }

  .ant-progress {
    width: 100%;
  }

  .ant-progress-steps-outer {
    flex-direction: column-reverse;

    .ant-progress-text {
      display: none;
    }

    .ant-progress-steps-item {
      width: 50px !important;
      height: 15px !important;
      margin: 2px;
    }
  }
`;
