import styled from 'styled-components';
import { DARK_THEME } from '@/consts';

export const NavbarBody = styled.nav`
  height: 50px;
  width: 100%;
  padding: 0 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;

  background: ${({ theme }) =>
    theme.name === DARK_THEME
      ? theme.colors.gray.sat800
      : theme.colors.purple.sat900};

  margin-bottom: 20px;

  box-shadow: 0 0 15px
    ${({ theme }) =>
    theme.name === DARK_THEME
      ? theme.colors.gray.sat900
      : theme.colors.purple.sat900};

  .PageActions {
    position: absolute;
    left: 20px;
  }

  .LoginAction {
    position: absolute;
    right: 20px;
  }

  p {
    font-weight: 400;
    display: inline-block;
    position: relative;
    padding: 0 0.5rem;
    height: 3rem;
    line-height: 3rem;
    color: ${({ theme }) =>
    theme.name === DARK_THEME
      ? theme.colors.cyan.sat100
      : theme.colors.blue.sat50};

    transition: color 0.2s;

    & + p {
      margin-left: 2rem;
    }

    &:hover {
      color: ${({ theme }) =>
    theme.name === DARK_THEME
      ? theme.colors.purple.sat200
      : theme.colors.yellow.sat200};
    }

    &.active {
      color: ${({ theme }) =>
    theme.name === DARK_THEME
      ? theme.colors.cyan.sat100
      : theme.colors.teal.sat500};
      font-weight: bold;
    }

    &.active::after {
      content: '';
      height: 3px;
      border-radius: 3px 3px 0 0;
      width: 100%;
      position: absolute;
      bottom: 0;
      left: 0;
      background: ${({ theme }) =>
    theme.name === DARK_THEME
      ? theme.colors.cyan.sat500
      : theme.colors.teal.sat300};
    }
  }

  @media (min-width: 2560px) {
    max-width: 2520px;
  }
`;
