import styled from 'styled-components';
import { DARK_THEME } from '@/consts';

export const NavbarBody = styled.nav`
  height: 50px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;

  background: ${({ theme }) =>
    theme.name === DARK_THEME
      ? theme.colors.gray.sat900
      : theme.colors.red.sat600};

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
      ? theme.colors.blue.sat100
      : theme.colors.blue.sat50};

    transition: color 0.2s;

    & + p {
      margin-left: 2rem;
    }

    &:hover {
      color: ${({ theme }) =>
    theme.name === DARK_THEME
      ? theme.colors.blue.sat700
      : theme.colors.red.sat200};
    }

    &.active {
      color: ${({ theme }) =>
    theme.name === DARK_THEME
      ? theme.colors.blue.sat200
      : theme.colors.gray.sat50};
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
      ? theme.colors.blue.sat500
      : theme.colors.gray.sat50};
    }
  }

  @media (min-width: 2560px) {
    max-width: 2520px;
  }
`;

export const ItemsWrapper = styled.div`

`;
