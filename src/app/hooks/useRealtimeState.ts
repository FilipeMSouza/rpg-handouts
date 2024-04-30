'use client';
import { useState, useEffect } from 'react';

const useRealtimeState = <T>(): [state: T | undefined, setState: (newState: T) => void, () => void] => {
  const [ws, setWs] = useState<WebSocket | null>(null);
  const [localState, setLocalState] = useState<T>();

  useEffect(() => {
    if (!ws) {
      const newWs = new WebSocket(process.env.REALTIME_ENDPOINT!);
      setWs(newWs);
    } else {
      ws.onmessage = (event) => {
        setLocalState(JSON.parse(event.data));
      }
    }

    return () => ws?.close();
  }, [ws]);

  const setRealtimeState = (newState: any) => {
    if (!ws || ws.readyState !== WebSocket.OPEN) {
      throw new Error('WebSocket connection is not open');
    }

    ws.send(JSON.stringify({ action: 'update', payload: newState }));
  };

  const saveAndCloseBackend = () => {
    if (!ws || ws.readyState !== WebSocket.OPEN) {
      throw new Error('WebSocket connection is not open');
    }

    ws.send(JSON.stringify({ action: 'stop' }));
    ws.close();
  };

  return [localState, setRealtimeState, saveAndCloseBackend];
};

export default useRealtimeState;
