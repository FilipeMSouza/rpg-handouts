'use client';
import Image from 'next/image';

import type { pjData } from '@/@types/pjData';
import useRealtimeState from '@/app/hooks/useRealtimeState';

import { PlayerLink, Character, Name, Wrapper } from './style'

const Home = () => {
  const [players] = useRealtimeState<pjData[]>();

  return (
    <Wrapper>
      {players?.map((pj, i) => {
        return <PlayerLink key={pj.name} href={`/player/${i}/idle`}>
          	<Image src={pj.image} alt={pj.name} width={90} height={90} />
          	<Character><Name color={pj.color}>{pj.name}</Name></Character>
        	</PlayerLink>
      	}
      )}
    </Wrapper>
  )
};

export default Home;
