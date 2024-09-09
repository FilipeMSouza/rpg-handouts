import styled from 'styled-components';
import { DARK_THEME } from '@/consts';


export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 0.5rem;
  margin-top: 1rem;

  border: 1px solid #101010;
  max-width: 600px;
  padding: 1rem;
`;