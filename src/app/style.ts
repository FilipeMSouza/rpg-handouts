import styled from 'styled-components';
import { DARK_THEME } from '@/consts';

export const Wrapper = styled.div`
  gap: 1rem;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
  padding: 10px 0 0 10px;
`;

export const Form = styled.form`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const PlayerLink = styled.a`
  text-decoration: none;
`;

export const Character = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Name = styled.span<{ color: string }>`
  font-weight: 400;
  font-size: 2.2rem;
  color: ${({ theme }) =>
    theme.name === DARK_THEME
      ? theme.colors.textColor
      : theme.colors.gray.sat600};
  text-shadow: 0 0 20px ${(props) => props.color};
`;

interface ThemeButtonProps {
  color: 'dark' | 'light';
}

const color = {
  dark: '#242423',
  light: '#f5f5f5',
};

export const ThemeButton = styled.button<ThemeButtonProps>`
  position: absolute;
  top: 5rem;
  right: 1rem;

  background: none;
  border: none;

  font-size: 1.5rem;
  color: ${(props) => (props.color === 'dark' ? color.dark : color.light)};
  text-shadow: 0 0 20px ${(props) => props.color};
`;

export const Navbar = styled.ul`
  margin: 10px 0;
  padding: 0;
  overflow: hidden;
  background-color: aliceblue;
  list-style-type: none;
`;

export const Page = styled.li`
  float: left;
  border-right: 1px solid darkgray;
`;

export const LoginPage = styled(Page)`
  float: right;
  border-left: 1px solid darkgray;
`;

export const PageLink = styled.a`
  display: block;
  color: black;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;

  &:hover {
    background-color: darkgray;
  }
`;
