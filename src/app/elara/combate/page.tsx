import Image from 'next/image';
// @ts-ignore
import {
    Life,
    Mana,
    Name,
    Wrapper,
    Character,
    Description,
} from "@/app/elara/combate/style";
import Elara from "../Elara.png";

const OnnenHandout = () => {
    return(
        <Wrapper>
            <Image src={Elara} alt="onnen" width={90} height={90} />
            <Character>
                <Name>Elara</Name>
                <Description>
                    <Life>31/31</Life>
                    <Mana>10/10</Mana>
                </Description>
            </Character>
        </Wrapper>
    )
};

export default OnnenHandout;