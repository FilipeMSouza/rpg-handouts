'use client';

import Image from 'next/image';
import { useMemo, useState } from 'react';

import type { pjData } from '@/@types/pjData';
import useRealtimeState from '@/app/hooks/useRealtimeState';

import {
  ActionButtons,
  Button,
  ButtonWrapper,
  Character,
  Description,
  DescriptionText,
  Life,
  Mana,
  Name,
  Wrapper,
} from './style';

const character = ({ params: { characterId, state } }: { params:{ characterId: number, state: string }}) => {
  const [battleState, setBattleState] = useState(state);
  const handleBattleToggle = () => {
    setBattleState(battleState === 'idle' ? 'combat' : 'idle');
    window.history.pushState({}, '', `/player/${characterId}/${battleState === 'idle' ? 'combat' : 'idle'}`);
  };

  const [players, setPlayers] = useRealtimeState<pjData[]>();
  const pj = useMemo(() => {
    if (!players) return null;
    return players[characterId];
  }, [players, characterId]);

  const modifyPlayer = (target: pjData, operation: (init: pjData) => pjData) => {
    if (!players) return;
    const newPlayers = players.map((player) => {
      if (player.name === target.name) {
        return operation(player);
      }
      return player;
    });
    setPlayers(newPlayers);
  };

  const handleLife = (shouldReduce: boolean, target: pjData) => modifyPlayer(target, (player) => {
    if (shouldReduce) return { ...player, currentLife: player.currentLife - 1 };
    return { ...player, currentLife: player.currentLife + 1 };
  });

  const handleMana = (shouldReduce: boolean, target: pjData) => modifyPlayer(target, (player) => {
    if (shouldReduce) return { ...player, currentMana: player.currentMana - 1 };
    return { ...player, currentMana: player.currentMana + 1 };
  });

  const handleCA = (shouldReduce: boolean, target: pjData) => modifyPlayer(target, (player) => {
    if (shouldReduce) return { ...player, armorClass: player.armorClass - 1 };
    return { ...player, armorClass: player.armorClass + 1 };
  });

  if(!pj) return (<div>loading...</div>);
  return <>
    <Wrapper>
      <Image src={ pj.image } alt={ pj.name } width={90} height={90} />
      <Character>
        <Name color={ pj.color }>{ pj.name }</Name>
        <Description>
          { battleState === 'idle' ? (
            <>
              <DescriptionText>{ pj.profession }</DescriptionText>
              <DescriptionText>{ pj.level }</DescriptionText>
            </>
          ) : (
            <>
              <Life>{pj.currentLife}/{pj.life}</Life>
              <Mana>{pj.currentMana}/{pj.mana}</Mana>
              <DescriptionText>CA: { pj.armorClass }</DescriptionText>
            </>
          )}
        </Description>
      </Character>
    </Wrapper>
    { battleState === 'combat' && (
      <>
        <ButtonWrapper>
          <ActionButtons>
            <Button color='life' onClick={() => handleLife(false, pj)}>+ Life</Button>
            <Button color='life' onClick={() => handleLife(true, pj)}>- Life</Button>
          </ActionButtons>

          <ActionButtons>
            <Button color='mana' onClick={() => handleMana(false, pj)}>+ Mana</Button>
            <Button color='mana' onClick={() => handleMana(true, pj)}>- Mana</Button>
          </ActionButtons>

          <ActionButtons>
            <Button color='mana' onClick={() => handleCA(false, pj)}>+ CA</Button>
            <Button color='mana' onClick={() => handleCA(true, pj)}>- CA</Button>
          </ActionButtons>
        </ButtonWrapper>
      </>
    )}
    <Button style={{ margin: '1rem' }} color='toggle' onClick={handleBattleToggle}>Toggle</Button>
  </>;
};

export default character;
