'use client';
import { useState } from 'react';
import {
  ActionButtons,
  EyeButton,
  Form,
  Input,
  Label,
  Login,
  PasswordWrapper,
  SignIn,
  Wrapper,
} from '@/app/login/style';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const LoginPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const password = isVisible ? 'text' : 'password';
  return (
    <Form>
      <Wrapper>
        <Label>User Name</Label>
        <Input type='text' />
      </Wrapper>
      <Wrapper>
        <Label>Password</Label>
        <PasswordWrapper>
          <Input type={password} />
          <EyeButton
            onClick={(e) => {
              e.preventDefault();
              setIsVisible(!isVisible);
            }}
          >
            {isVisible ? <FaEye /> : <FaEyeSlash />}
          </EyeButton>
        </PasswordWrapper>
      </Wrapper>
      <ActionButtons>
        <SignIn>Sign In</SignIn>
        <Login type='submit'>Log In</Login>
      </ActionButtons>
    </Form>
  );
};

export default LoginPage;
