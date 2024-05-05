'use client';

import { createContext, useEffect, useState } from 'react';
import FAB from '@/components/fab';
import useRealtimeState from '../hooks/useRealtimeState';
import ObjectParser from './components/object-parser';

export const DatabaseContext = createContext<[state: any[] | object | undefined, setState: (newState: any[] | object) => void]>([undefined, () => {}]);

const DatabaseEditor = () => {
  const [databaseJSON, setDatabase] = useRealtimeState<any[] | object>();
  const [localState, setLocalState] = useState<any[] | object | undefined>(databaseJSON);
  useEffect(() => {
    if (localState) return;
    setLocalState(databaseJSON);
  }, [databaseJSON]);

  if (!localState) return <>🚧 Loading 🚧</>;
  return <DatabaseContext.Provider value={[localState, setLocalState]}>
    <ObjectParser object={localState} />
    <FAB onClick={() => setDatabase(localState)}>💾</FAB>
  </DatabaseContext.Provider>;
};

export default DatabaseEditor;
