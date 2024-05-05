'use client';

import Image from 'next/image';
import { useState } from 'react';

import usePlayerState from '@/app/hooks/usePlayerState';

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

const character = ({
  params: { characterId, state },
}: {
  params: { characterId: string; state: string };
}) => {
  const [battleState, setBattleState] = useState(state);
  const handleBattleToggle = () => {
    setBattleState(battleState === 'idle' ? 'combat' : 'idle');
    window.history.pushState(
      {},
      '',
      `/player/${characterId}/${battleState === 'idle' ? 'combat' : 'idle'}`
    );
  };

  const [pj, modifyPlayer] = usePlayerState(parseInt(characterId));
  const handleLife = (shouldReduce: boolean) =>
    modifyPlayer('currentLife', (prev) => prev + (shouldReduce ? -1 : +1));
  const handleMana = (shouldReduce: boolean) =>
    modifyPlayer('currentMana', (prev) => prev + (shouldReduce ? -1 : +1));
  const handleCA = (shouldReduce: boolean) =>
    modifyPlayer('armorClass', (prev) => prev + (shouldReduce ? -1 : +1));

  if (!pj) return <div>loading...</div>;
  return (
    <>
      <Wrapper>
        <Image src={pj.image} alt={pj.name} width={90} height={90} />
        <Character>
          <Name color={pj.color}>{pj.name}</Name>
          <Description>
            {battleState === 'idle' ? (
              <>
                <DescriptionText>{pj.profession}</DescriptionText>
                <DescriptionText>{pj.level}</DescriptionText>
              </>
            ) : (
              <>
                <Life>
                  {pj.currentLife}/{pj.life}
                </Life>
                <Mana>
                  {pj.currentMana}/{pj.mana}
                </Mana>
                <DescriptionText>CA: {pj.armorClass}</DescriptionText>
              </>
            )}
          </Description>
        </Character>
      </Wrapper>
      {battleState === 'combat' && (
        <>
          <ButtonWrapper>
            <ActionButtons>
              <Button color='life' onClick={() => handleLife(false)}>
                + Life
              </Button>
              <Button color='life' onClick={() => handleLife(true)}>
                - Life
              </Button>
            </ActionButtons>

            <ActionButtons>
              <Button color='mana' onClick={() => handleMana(false)}>
                + Mana
              </Button>
              <Button color='mana' onClick={() => handleMana(true)}>
                - Mana
              </Button>
            </ActionButtons>

            <ActionButtons>
              <Button color='mana' onClick={() => handleCA(false)}>
                + CA
              </Button>
              <Button color='mana' onClick={() => handleCA(true)}>
                - CA
              </Button>
            </ActionButtons>
          </ButtonWrapper>
        </>
      )}
      <Button
        style={{ margin: '1rem' }}
        color='toggle'
        onClick={handleBattleToggle}
      >
        Toggle
      </Button>
    </>
  );
};

export default character;
