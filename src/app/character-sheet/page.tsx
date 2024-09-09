'use client';
import SkillCointainer from '@/components/molecules/SkillContainer';
import { character as char } from '@/mocks/char';

const CharacetrSheet = () => {
  const skills = char.data.pericias
  return (
    <>
      <SkillCointainer data={skills} />
    </>
    
  );
};

export default CharacetrSheet;
