import styled from 'styled-components';
import { DARK_THEME } from '@/consts';

export const Button = styled.button`
  position: absolute;
  top: 5rem;
  right: 1rem;

  background: none;
  border: none;

  font-size: 1.5rem;
  color: ${({ theme }) =>
    theme.name === DARK_THEME
      ? theme.colors.gray.sat200
      : theme.colors.gray.sat600};
  text-shadow: 0 0 20px ${(props) => props.color};
`;
