'use client';

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
export const Name = styled.span`
    font-weight: 400;
    font-size: 2.2rem;
    color: var(--text-color);
    text-shadow: 0 0 20px var(--elara);
`
export const Description = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
`
export const DescriptionText = styled.span`
    font-size: 1rem;
    font-weight: 400;
    color: var(--text-color);    
`