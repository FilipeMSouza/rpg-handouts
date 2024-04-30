'use client';
import Image from 'next/image';
import { useState } from "react";
import { players } from "@/mocks/data";
import { pjData } from '@/@types/pjData';
import {
    Character,
    Description,
    DescriptionText,
    Life,
    Mana,
    Name,
    Wrapper
} from '@/app/player/[characterId]/[combat]/style'



const character = ({params}: {params:{ characterId: number, combat: string }}) =>{
    const pj: pjData = players[params.characterId];
    return params.combat === 'idle' ? (
        <Wrapper>
            <Image src={ pj.image } alt="onnen" width={90} height={90} />
            <Character>
                <Name color={ pj.color }>{ pj.name }</Name>
                <Description>
                    <DescriptionText>{ pj.profession }</DescriptionText>
                    <DescriptionText>{ pj.level }</DescriptionText>
                </Description>
            </Character>
        </Wrapper>
    )   :
    (
        <Wrapper>
            <Image src={ pj.image } alt="onnen" width={90} height={90} />
            <Character>
                <Name color={ pj.color }>{ pj.name }</Name>
                <Description>
                    <Life>{pj.life}/{pj.currentLife}</Life>
                    <Mana>{pj.mana}/{pj.currentMana}</Mana>
                </Description>
            </Character>
        </Wrapper>
    );
}

export default character;