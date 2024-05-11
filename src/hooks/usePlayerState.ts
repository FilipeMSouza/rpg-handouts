'use client';

import { useMemo } from 'react';

import type { pjData } from '@/@types/pjData';
import useRealtimeState from './useRealtimeState';

type SetPlayerStateValue = {
    [K in keyof pjData]: pjData[K];
}

type SetPlayerState = <K extends keyof pjData>(key: K, value: SetPlayerStateValue[K]| ((prev: SetPlayerStateValue[K]) => SetPlayerStateValue[K])) => void;

const usePlayerState = (id: number): [state: pjData | undefined, setState: SetPlayerState] => {
  const [serverState, setServerState] = useRealtimeState<pjData[]>();
  const playerState = useMemo(() => {
    if (!serverState) return undefined;
    return serverState[id];
  }, [serverState, id]);

  /**
   * @param key The character attribute to modify
   * @param value Can be a new value or a function that receives the previous value and returns a new value
   * @example // without external player data
   * setPlayerState('currentLife', 10);
   * setPlayerState('currentLife', (prev) => prev + 1);
   * @example // with external player data
   * const [pj, modifyPlayer] = usePlayerState(parseInt(characterId));
   * const handleLife = (shouldReduce: boolean) => modifyPlayer(
   *   'currentLife',
   *   pj!.currentLife + (shouldReduce ? - 1 : + 1)
   * );
   */
  const setPlayerState: SetPlayerState = <K extends keyof pjData>(key: K, value: SetPlayerStateValue[K] | ((prev: SetPlayerStateValue[K]) => SetPlayerStateValue[K])) => {
    if (!serverState) return;
    setServerState(serverState.map((player, i) => {
      if (i !== id) return player;
      if (typeof value === 'function') {
        return { ...player, [key]: value(player[key]) };
      }
      return { ...player, [key]: value };
    }));
  };

  return [playerState, setPlayerState];
};

export default usePlayerState;
