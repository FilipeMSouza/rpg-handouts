import Image from 'next/image';
import {
    Name,
    Wrapper,
    Character,
    Description,
    DescriptionText,
} from "@/app/elara/style";

import Elara from './Elara.png'

const OnnenHandout = () => {
    return(
        <Wrapper>
            <Image src={Elara} alt="onnen" width={90} height={90} />
            <Character>
                <Name>Elara</Name>
                <Description>
                    <DescriptionText>Ladina</DescriptionText>
                    <DescriptionText>Nv 2</DescriptionText>
                </Description>
            </Character>
        </Wrapper>
    )
};

export default OnnenHandout;