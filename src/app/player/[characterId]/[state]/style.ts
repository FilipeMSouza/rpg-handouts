'use client';

import styled from 'styled-components';
import { DARK_THEME } from '@/consts';

export const Wrapper = styled.div`
  gap: 15px;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
  padding: 10px 0 0 10px;
`;
export const Character = styled.div`
  display: flex;
  flex-direction: column;
`;

interface characterProps {
  color: string;
}

export const Name = styled.span<characterProps>`
  font-weight: 600;
  font-size: 2.2rem;
  color: ${({ theme }) =>
    theme.name === DARK_THEME
      ? theme.colors.textColor
      : theme.colors.gray.sat700};
  text-shadow: 0 0 20px ${(props) => props.color};
`;
export const Description = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
`;
export const DescriptionText = styled.span`
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textColor};
`;

export const CombatDescription = styled.div`
  gap: 10px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  margin-top: 4px;
`;
export const Life = styled.span`
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.green.sat400};
  text-shadow: 0 0 8px
    ${({ theme }) =>
    theme.name === DARK_THEME
      ? theme.colors.green.sat400
      : theme.colors.green.sat600};
  transform: rotate(-20deg);
`;
export const Mana = styled.span`
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.blue.sat400};
  text-shadow: 0 0 8px
    ${({ theme }) =>
    theme.name === DARK_THEME
      ? theme.colors.blue.sat400
      : theme.colors.blue.sat600};
  transform: rotate(-20deg);
`;
export const ButtonWrapper = styled.div`
  gap: 15px;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
  padding: 10px 0 0 10px;
  margin-top: 55px;
`;
export const ActionButtons = styled.div`
  gap: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  border: none;
  background: transparent;
`;

interface ButtonProps {
  color: 'life' | 'mana' | 'toggle' | 'armor';
}

const color = {
  life: '#48BB78',
  mana: '#4299E1',
  toggle: '#7B341E',
  armor: '#2D3748',
};
export const Button = styled.button<ButtonProps>`
  color: #fff;
  background-color: ${(props) => color[props.color]};
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
`;

export const ArmorClass = styled.span`
  gap: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) =>
    theme.name === DARK_THEME
      ? theme.colors.gray.sat100
      : theme.colors.gray.sat600};
  text-shadow: 0 0 8px
    ${({ theme }) =>
    theme.name === DARK_THEME
      ? theme.colors.purple.sat50
      : theme.colors.gray.sat600};
`;
