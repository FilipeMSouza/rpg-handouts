import Image from 'next/image';
import {
    Life,
    Mana,
    Name,
    Wrapper,
    Character,
    Description,
} from "@/app/altair/combate/style";
import Altair from "../Altair.png";

const OnnenHandout = () => {
    return(
        <Wrapper>
            <Image src={Altair} alt="onnen" width={90} height={90} />
            <Character>
                <Name>Altair</Name>
                <Description>
                    <Life>22/22</Life>
                    <Mana>6/6</Mana>
                </Description>
            </Character>
        </Wrapper>
    )
};

export default OnnenHandout;