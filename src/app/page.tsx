'use client';
import Image from 'next/image';

import { Character, Name, PlayerLink, Wrapper } from './style';
import usePlayersSummary from '@/hooks/supabase/usePlayersSummary';

const Home = () => {
  const players = usePlayersSummary();

  return (
    <Wrapper>
      {players.map(({ name, image, color, id }) => {
        return (
          <PlayerLink key={id} href={`/player/${id}/idle`}>
            <Image src={image} alt={name} width={90} height={90} />
            <Character>
              <Name color={color}>{name}</Name>
            </Character>
          </PlayerLink>
        );
      })}
    </Wrapper>
  );
};

export default Home;
