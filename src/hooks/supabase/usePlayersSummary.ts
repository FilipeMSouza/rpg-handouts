import { SupabaseContext } from '@/lib/supabase';
import { useContext, useEffect, useState } from 'react';

interface PlayerSummary {
  id: string;
  name: string;
  image: string;
  color: string;
}

const usePlayersSummary = (): PlayerSummary[] => {
  const supabase = useContext(SupabaseContext);
  const [localState, setLocalState] = useState<PlayerSummary[]>([]);

  useEffect(() => {
    if (!supabase) return;

    supabase
      .from('Players')
      .select('id, name, avatar, color').then(({ data, error }) => {
        setLocalState(data?.map(({ id, name, avatar, color }) => ({ id, name, image: avatar, color })) ?? []);
        console.log('🚀 ~ .select ~ error:', error);
      });
  }, [supabase]);

  return localState;
};

export default usePlayersSummary;
