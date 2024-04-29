import Image from 'next/image';
import {
    Name,
    Wrapper,
    Character,
    Description,
    DescriptionText,
} from "@/app/altair/style";

import Altair from './Altair.png'

const OnnenHandout = () => {
    return(
        <Wrapper>
            <Image src={Altair} alt="onnen" width={90} height={90} />
            <Character>
                <Name>Altair</Name>
                <Description>
                    <DescriptionText>Caçador</DescriptionText>
                    <DescriptionText>Nv 2</DescriptionText>
                </Description>
            </Character>
        </Wrapper>
    )
};

export default OnnenHandout;