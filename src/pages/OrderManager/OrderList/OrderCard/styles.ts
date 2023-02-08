import styled from 'styled-components';

export const Container = styled.div<{ isSelected: boolean }>`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #dcdcdc;
  border-left: 4px solid ${props => (props.isSelected ? '#ea1d2c' : '#fff')};
  cursor: pointer;
  padding: 12px 8px 16px;

  &:hover {
    background-color: #f7f7f7;
  }

  .merchant-name {
    color: #3e3e3e;
    font-weight: 700;
  }

  .row {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-weight: 700;
    margin: 8px 0;

    .order-id {
      color: #ea1d2c;
    }

    .client-name {
      margin-left: 5px;
      color: #3e3e3e;
    }
  }

  .order-status {
    font-weight: 500;
    color: #3e3e3e;

    &.attention {
      color: #ea1d2c;
    }
  }
`;
