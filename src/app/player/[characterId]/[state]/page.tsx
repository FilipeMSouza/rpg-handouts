'use client';

import Image from 'next/image';
import { useState } from 'react';
import { FaShieldAlt } from 'react-icons/fa';

import {
  ActionButtons,
  ArmorClass,
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
import usePlayerDetails from '@/hooks/supabase/usePlayerDetails';

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

  const [pj, modifyPlayer] = usePlayerDetails(characterId);
  const handleLife = (shouldReduce: boolean) =>
    modifyPlayer(
      'life_current',
      (pj?.life_current ?? 0) + (shouldReduce ? -1 : +1)
    );
  const handleMana = (shouldReduce: boolean) =>
    modifyPlayer(
      'mana_current',
      (pj?.mana_current ?? 0) + (shouldReduce ? -1 : +1)
    );
  const handleCA = (shouldReduce: boolean) =>
    modifyPlayer(
      'armor_class',
      (pj?.armor_class ?? 0) + (shouldReduce ? -1 : +1)
    );

  if (!pj) return <div>loading...</div>;
  return (
    <>
      <Wrapper>
        <Image src={pj.avatar} alt={pj.name} width={90} height={90} />
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
                  {pj.life_current}/{pj.life_max}
                </Life>
                <Mana>
                  {pj.mana_current}/{pj.mana_max}
                </Mana>
                <ArmorClass>
                  <FaShieldAlt className='icon' /> {pj.armor_class}
                </ArmorClass>
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
              <Button color='armor' onClick={() => handleCA(false)}>
                + CA
              </Button>
              <Button color='armor' onClick={() => handleCA(true)}>
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
