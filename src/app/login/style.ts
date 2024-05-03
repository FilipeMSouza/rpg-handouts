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
  width: 20vh;
  height: 1vh;
`;

export const Label = styled.label`
  font-size: 1rem;
  color: var(--text-white);
  margin-bottom: 4px;
  font-weight: 600;
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
