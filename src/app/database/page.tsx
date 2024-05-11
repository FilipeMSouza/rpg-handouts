'use client';

import { useEffect, useState } from 'react';
import { redirect } from 'next/navigation';
import FAB from '@/components/fab';
import useRealtimeState from '@/hooks/useRealtimeState';
import ObjectParser from './components/object-parser';
import DatabaseContext from './context';

const DatabaseEditor = () => {
  if (process.env.SCOPE === 'prod') redirect('/forbidden');

  const [databaseJSON, setDatabase] = useRealtimeState<any[] | object>();
  const [localState, setLocalState] = useState<any[] | object | undefined>(
    databaseJSON
  );
  useEffect(() => {
    if (localState) return;
    setLocalState(databaseJSON);
  }, [databaseJSON]);

  if (localState === undefined) return <>🚧 Loading 🚧</>;
  return (
    <DatabaseContext.Provider value={[localState, setLocalState]}>
      <ObjectParser object={localState} />
      <FAB onClick={() => setDatabase(localState)}>💾</FAB>
    </DatabaseContext.Provider>
  );
};

export default DatabaseEditor;
