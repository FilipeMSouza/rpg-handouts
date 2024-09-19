import type { PlayerData } from '@/@types/playerData';
import { SupabaseContext } from '@/lib/supabase';
import { useContext, useEffect, useState } from 'react';

const usePlayerDetails = (id: string): [PlayerData | undefined, (key: keyof PlayerData, value: PlayerData[keyof PlayerData]) => void] => {
  const supabase = useContext(SupabaseContext);
  const [localState, setLocalState] = useState<PlayerData>();

  useEffect(() => {
    if (!supabase) return;

    supabase
      .from('Players')
      .select('*').eq('id', id).single().then(({ data, error }) => {
        setLocalState(data);
        console.log('🚀 ~ .select ~ error:', error);
      });

    supabase.channel('custom-update-channel')
      .on(
        'postgres_changes',
        { event: 'UPDATE', schema: 'public', table: 'Players', filter: `id=eq.${id}` },
        (payload) => {
          setLocalState(payload.new as PlayerData);
        }
      )
      .subscribe();
  }, [supabase]);

  const modifyPlayer = (key: keyof PlayerData, value: PlayerData[keyof PlayerData]) => {
    if (!supabase) return;
    setLocalState({ ...localState, [key]: value } as PlayerData);
    supabase
      .from('Players')
      .update({ [key]: value })
      .eq('id', id)
      .select()
      .single()
      .then(({ error, data }) => {
        setLocalState(data);
        console.log('🚀 ~ .update ~ error:', error);
      });
  };

  return [localState, modifyPlayer];
};

export default usePlayerDetails;
