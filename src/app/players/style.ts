import styled from 'styled-components';

export const Wrapper = styled.div`
  gap: 15px;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
  padding: 10px 0 0 10px;
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

export const Description = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
`

export const Life = styled.span`
  font-size: 1rem;
  font-weight: 400;
  color: var(--currentLife);
  text-shadow: 0 0 8px var(--text-color);
  transform: rotate(-20deg)
`

export const Mana = styled.span`
  font-size: 1rem;
  font-weight: 400;
  color: var(--currentMana);
  text-shadow: 0 0 8px var(--text-color);
  transform: rotate(-20deg)
`
