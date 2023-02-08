import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: #f2f2f2;
  padding: 20px;

  .content {
    display: flex;
    flex-direction: column;
    flex: 1;

    h2 {
      font-weight: 700;
      font-size: 20px;
      color: #3e3e3e;
    }

    h3 {
      font-weight: 500;
      color: #3e3e3e;
      margin-top: 10px;
    }
  }

  .footer {
    border-top: 1px solid #ccc;
    width: 100%;
    padding-top: 10px;
    display: flex;
    justify-content: flex-end;
  }
`;
