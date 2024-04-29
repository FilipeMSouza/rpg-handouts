import Image from 'next/image';
// @ts-ignore
import {
    Life,
    Mana,
    Name,
    Wrapper,
    Character,
    Description,
} from "@/app/naloah/combate/style";
import Naloah from "../Naloah.png";

const OnnenHandout = () => {
    return(
        <Wrapper>
            <Image src={Naloah} alt="onnen" width={90} height={90} />
            <Character>
                <Name>Naloah</Name>
                <Description>
                    <Life>31/31</Life>
                    <Mana>10/10</Mana>
                </Description>
            </Character>
        </Wrapper>
    )
};

export default OnnenHandout;