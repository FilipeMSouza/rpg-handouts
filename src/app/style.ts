import styled from 'styled-components';

export const Wrapper = styled.div`
  gap: 1rem;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
  padding: 10px 0 0 10px;
`

export const PlayerLink = styled.a`
  text-decoration: none;
`

export const Character = styled.div`
  display: flex;
  flex-direction: column;
`

export const Name = styled.span<{ color: string }>`
  font-weight: 400;
  font-size: 2.2rem;
  color: var(--text-color);
  text-shadow: 0 0 20px ${props => props.color};
`
