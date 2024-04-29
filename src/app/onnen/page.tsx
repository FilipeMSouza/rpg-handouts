import Image from 'next/image';
import {
    Name,
    Wrapper,
    Character,
    Description,
    DescriptionText,
} from "@/app/onnen/style";

import Onnen from './Onnen.png'

const OnnenHandout = () => {
    return(
        <Wrapper>
            <Image src={Onnen} alt="onnen" width={90} height={90} />
            <Character>
                <Name>Onnen</Name>
                <Description>
                    <DescriptionText>Paladino</DescriptionText>
                    <DescriptionText>Nv 2</DescriptionText>
                </Description>
            </Character>
        </Wrapper>
    )
};

export default OnnenHandout;