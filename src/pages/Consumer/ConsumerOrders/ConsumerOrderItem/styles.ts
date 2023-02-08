import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  border: 1px solid #ccc;
  padding: 0 10px;
  margin-top: 20px;
  height: 78px;

  .infos {
    display: flex;
    flex-direction: column;

    .merchant-name {
      color: #3f3e3e;
      font-weight: 700;
    }

    .order-status {
      color: #717171;
      margin-top: 10px;
      font-size: 14px;
    }
  }
`;
