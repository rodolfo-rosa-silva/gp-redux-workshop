import { Button } from 'src/components/Button/styles';
import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 48%;
  padding: 20px;
`;

export const Title = styled.h2`
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: 700;
`;

export const Input = styled.input`
  border-radius: 4px;
  border: 1px solid #ccc;
  padding: 5px 0;
  width: 500px;
  height: 50px;
  text-align: center;
  margin-bottom: 20px;
`;

export const Select = styled.select`
  border-radius: 4px;
  border: 1px solid #ccc;
  padding: 5px;
  width: 500px;
  height: 50px;
  text-align: center;
`;

export const ButtonRequest = styled(Button)`
  width: 500px;
  text-transform: uppercase;
  margin-top: 20px;
`;
