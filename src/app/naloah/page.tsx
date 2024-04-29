import Image from 'next/image';
import {
    Name,
    Wrapper,
    Character,
    Description,
    DescriptionText,
} from "@/app/naloah/style";

import Naloah from './Naloah.png'

const OnnenHandout = () => {
    return(
        <Wrapper>
            <Image src={Naloah} alt="onnen" width={90} height={90} />
            <Character>
                <Name>Naloah</Name>
                <Description>
                    <DescriptionText>Clériga</DescriptionText>
                    <DescriptionText>Nv 2</DescriptionText>
                </Description>
            </Character>
        </Wrapper>
    )
};

export default OnnenHandout;