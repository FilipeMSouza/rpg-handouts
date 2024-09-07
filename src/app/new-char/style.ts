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

export const ColorInput = styled(Input)`
  padding: 0;
  width: 27vh;
  height: 37px;

  &::-webkit-color-swatch {
    border: none;
  }
`;
