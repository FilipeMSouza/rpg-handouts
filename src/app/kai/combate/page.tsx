import Image from 'next/image';
// @ts-ignore
import {
    Life,
    Mana,
    Name,
    Wrapper,
    Character,
    Description,
} from "@/app/kai/combate/style";
import Kai from "../Kai.png";

const OnnenHandout = () => {
    return(
        <Wrapper>
            <Image src={Kai} alt="onnen" width={90} height={90} />
            <Character>
                <Name>Kai</Name>
                <Description>
                    <Life>31/31</Life>
                    <Mana>10/10</Mana>
                </Description>
            </Character>
        </Wrapper>
    )
};

export default OnnenHandout;