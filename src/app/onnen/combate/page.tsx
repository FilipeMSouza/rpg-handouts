import Image from 'next/image';
// @ts-ignore
import {
    Life,
    Mana,
    Name,
    Wrapper,
    Character,
    Description,
} from "@/app/onnen/combate/style";
import Onnen from "../Onnen.png";

const OnnenHandout = () => {
    return(
        <Wrapper>
            <Image src={Onnen} alt="onnen" width={90} height={90} />
            <Character>
                <Name>Onnen</Name>
                <Description>
                    <Life>31/31</Life>
                    <Mana>10/10</Mana>
                </Description>
            </Character>
        </Wrapper>
    )
};

export default OnnenHandout;