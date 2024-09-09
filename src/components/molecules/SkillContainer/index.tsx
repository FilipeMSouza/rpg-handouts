'use client';
import { Skill } from "@/@types/characterSheet";

import { Content, Header} from "./styles";

interface SkillCointainerProps {
  data: Skill[];
}

const SkillCointainer = ({data}:SkillCointainerProps) => {
  return (
    <>
      <Content>
        <Header>
          <p>Nome</p>
          <p>Nível</p>
          <p>Mod</p>
          <p>Treinamento</p>
          <p>Resultado</p>
          <p>Penalidade</p>
        </Header>
        
      </Content>
    </>
  );
};

export default SkillCointainer;
