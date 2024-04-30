'use client';
import Image from 'next/image';

import type { pjData } from '@/@types/pjData';
import useRealtimeState from '@/app/hooks/useRealtimeState';

import { Character, Description, Life, Mana, Name, Wrapper } from './style'

const Characters = () =>{
  const [players, setPlayers] = useRealtimeState<pjData[]>();

  const modifyPlayer = (target: pjData, operation: (init: pjData) => pjData) => {
    if (!players) return;
    const newPlayers = players.map((player) => {
      if (player.name === target.name) {
        return operation(player);
      }
      return player;
    });
    setPlayers(newPlayers);
  }

  const handleLife = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>, target: pjData) => modifyPlayer(target, (player) => {
    if (e.altKey) return { ...player, currentLife: player.currentLife - 1};
    return { ...player, currentLife: player.currentLife + 1};
  });

  const handleMana = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>, target: pjData) => modifyPlayer(target, (player) => {
    if (e.altKey) return { ...player, currentMana: player.currentMana - 1};
    return { ...player, currentMana: player.currentMana + 1};
  });

  return (
    <Wrapper>
      {players?.map((pj) => {
        return <div key={pj.name}>
          	<Image src={pj.image} alt={pj.name} width={90} height={90} />
          	<Character>
            	<Name color={pj.color}>{pj.name}</Name>
                <Description>
                  <Life onClick={(e) => handleLife(e, pj)}>
                    {pj.life}/{pj.currentLife}
                  </Life>
                  <Mana onClick={(e) => handleMana(e, pj)}>
                    {pj.mana}/{pj.currentMana}
                  </Mana>
                </Description>
          	</Character>
        	</div>
      	}
      )}
    </Wrapper>
  )
}

export default Characters;
