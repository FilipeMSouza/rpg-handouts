import Image from 'next/image';
import {
    Name,
    Wrapper,
    Character,
    Description,
    DescriptionText,
} from "@/app/kai/style";

import Kai from './Kai.png'

const OnnenHandout = () => {
    return(
        <Wrapper>
            <Image src={Kai} alt="onnen" width={90} height={90} />
            <Character>
                <Name>Kai</Name>
                <Description>
                    <DescriptionText>Mistico</DescriptionText>
                    <DescriptionText>Nv 2</DescriptionText>
                </Description>
            </Character>
        </Wrapper>
    )
};

export default OnnenHandout;