'use client';
import styled from 'styled-components';
import { DARK_THEME } from '@/consts';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  height: 99vh;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: start;
`;

export const Input = styled.input`
  padding: 5px;
  background: none;
  border-radius: 8px;
  border: 2px solid ${({ theme }) => theme.colors.textColor};

  color: ${({ theme }) => theme.colors.textColor};
  width: 25vh;
  height: 25px;
  font-size: 0.9rem;
  font-weight: 500;
`;

export const Label = styled.label`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.textColor};
  margin-bottom: 4px;
  font-weight: 500;
`;

export const Login = styled.button`
  border-radius: 8px;
  border: 2px solid
    ${({ theme }) =>
    theme.name === DARK_THEME
      ? theme.colors.pink.sat500
      : theme.colors.green.sat400};

  background: none;
  padding: 10px 20px;
  color: ${({ theme }) => theme.colors.textColor};
`;

export const SignIn = styled.button`
  border-radius: 8px;
  border: none;

  padding: 10px 20px;
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) =>
    theme.name === DARK_THEME
      ? theme.colors.pink.sat500
      : theme.colors.green.sat60};
`;

export const ActionButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 15px;
`;

export const EyeButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.textColor};
  position: absolute;
  font-size: 1rem;
  margin-right: 10px;
  margin-top: 3px;
`;

export const PasswordWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
  position: relative;
`;
