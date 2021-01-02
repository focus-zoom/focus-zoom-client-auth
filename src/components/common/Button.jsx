import styled from 'styled-components';
import oc from "../../oc.json";

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  appearance: none;
  transition: all 250ms ease 0s;
  user-select: none;
  border-radius: 10px;
  border: none;
  height: 2.5rem;
  min-width: 2.5rem;
  font-size: 1.5rem;
  padding: 1.65rem 1rem;
  background: ${oc.blue[6]};
  color: #FFFFFF;
  cursor: pointer;
`;

export default Button;
