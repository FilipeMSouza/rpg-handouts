'use client';
import styled from 'styled-components';

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
  border: 1px solid var(--text-color);

  color: var(--text-color);
  width: 25vh;
  height: 25px;
  font-size: 0.9rem;
  font-weight: 500;
`;

export const Label = styled.label`
  font-size: 1rem;
  color: var(--text-white);
  margin-bottom: 4px;
  font-weight: 500;
`;

export const Login = styled.button`
  border-radius: 8px;
  border: 1px solid var(--currentMana);

  background: none;
  padding: 10px 20px;
  color: var(--text-white);
`;

export const SignIn = styled.button`
  border-radius: 8px;
  border: 1px solid var(--totalMana);

  padding: 10px 20px;
  color: var(--text-white);
  background: var(--currentMana);
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
  color: var(--text-white);
  position: absolute;
  font-size: 0.9rem;
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
