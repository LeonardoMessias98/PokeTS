import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  .stat {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
    margin: 5px;

    font-family: Roboto, sans-serif;
  }

  .ant-progress-steps-outer {
    flex-direction: column-reverse;

    .ant-progress-text {
      display: none
    }

    .ant-progress-steps-item {
      width: 80px !important;
      height: 15px !important;
      margin: 2px;
    }
  }
`;
