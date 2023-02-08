import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 65px;
  box-shadow: rgb(0 0 0 / 24%) 0px 2px 6px;
  background-color: rgb(255, 255, 255);
  z-index: 3;
  align-items: center;
  justify-content: space-between;

  h1 {
    color: '#3e3e3e';
    font-weight: 700;
    margin-left: 10px;
  }
`;
