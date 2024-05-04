'use client';

import styled from 'styled-components';
import useRealtimeState from '../hooks/useRealtimeState';
import { useEffect, useState } from 'react';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    border: 0.25rem solid black;
    margin: 1rem;
    border-radius: 1rem;
    overflow: clip;
    width: fit-content;
`;

const ArrayContainer = styled(Container)`
    flex-direction: row;
    gap: 1rem;
`;

const FAB = styled.button`
    position: fixed;
    bottom: 1rem;
    right: 1rem;
    padding: 1rem;
    border-radius: 50%;
    background-color: #000;
    color: #fff;
    border: none;
    cursor: pointer;
    font-size: 2rem;
    font-weight: bold;
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.5);
`;

const DatabaseEditor = () => {
  const objParser = (value: any[] | object | any, path: string[] = []): JSX.Element => {
    if (typeof value !== 'object') return finalNode(value, path);
    if (Array.isArray(value)) return <ArrayContainer>{value.map((item, i) => objParser(item, [...path, i.toString()]))}</ArrayContainer>;
    return <Container key={path.join('>')}>{Object.entries(value).map(([key, value]) => <ArrayContainer key={[...path, key].join('>')}>
      <p>{key}</p>
      {objParser(value, [...path, key, 'value'])}
    </ArrayContainer>)}</Container>;
  };

  const [databaseJSON, setDatabase] = useRealtimeState<any[] | object>();
  const [localState, setLocalState] = useState<any[] | object | undefined>(databaseJSON);
  useEffect(() => {
    if (localState) return;
    setLocalState(databaseJSON);
  }, [databaseJSON]);

  const [currentlyEditing, setCurrentlyEditing] = useState<string[]>([]);
  const finalNode = (value: any, path: string[]) => {
    const isEditing = path.join('>') === currentlyEditing.join('>');
    if (isEditing) return <input defaultValue={value} key={path.join('>')} onKeyUp={(e) => {
      if (e.key !== 'Enter') return;
      updateValue((e.target as HTMLInputElement).value);
      setCurrentlyEditing([]);
    }} autoFocus />;
    return <p key={path.join('>')} onClick={() => setCurrentlyEditing(path)}>{value}</p>;
  };

  const recursiveUpdateValue = (path: string[], value: any, obj: any): object => {
    const targetKey = path.shift();
    if (path.length === 0) return value;
    if (Array.isArray(obj)) return obj.map((item, i) => (i === Number(targetKey) ? recursiveUpdateValue(path, value, item) : item));
    return Object.fromEntries(Object.entries(obj).map(([key, val]) => (key === targetKey ? [key, recursiveUpdateValue(path, value, val)] : [key, val])));
  };

  const updateValue = (value: any) => setLocalState(recursiveUpdateValue(currentlyEditing, value, localState));

  if (!localState) return <>🚧 Loading 🚧</>;
  return <>
    {objParser(localState)}
    <FAB onClick={() => setDatabase(localState)}>💾</FAB>
  </>;
};

export default DatabaseEditor;
