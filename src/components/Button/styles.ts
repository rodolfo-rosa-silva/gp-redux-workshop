import styled from 'styled-components';

export const Button = styled.button`
  opacity: ${props => (props?.disabled === true ? 0.5 : 1)};
  background-color: ${props => props.color};
  color: #fff;
  text-decoration: none;
  border: none;
  padding: 0 20px;
  border-radius: 4px;
  margin: 3px 0;
  height: 50px;
  font-weight: 500;
  transition: 0.1s;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  font-size: 16px;
`;
