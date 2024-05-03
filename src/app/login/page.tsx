'use client';
import { useState } from 'react';
import {
  ActionButtons,
  Form,
  Input,
  Label,
  Login,
  SignIn,
  Wrapper,
} from '@/app/login/style';

const LoginPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const turnVisible = () => setIsVisible(!isVisible);
  const password = isVisible ? 'text' : 'password';
  return (
    <Form>
      <Wrapper>
        <Label>User login</Label>
        <Input type='text' />
      </Wrapper>
      <Wrapper>
        <Label>Password</Label>
        <Input type={password} />
      </Wrapper>
      <ActionButtons>
        <SignIn>Sign In</SignIn>
        <Login>Log In</Login>
      </ActionButtons>
    </Form>
  );
};

export default LoginPage;
