'use client';
import Image from 'next/image';
import { pjData } from '@/@types/pjData';
import {
    Life,
    Mana,
    Name,
    Button,
    Wrapper,
    Character,
    Description,
    ActionButtons,
    ButtonWrapper,
    DescriptionText,
} from '@/app/player/[characterId]/[combat]/style'
import useRealtimeState from "@/app/hooks/useRealtimeState";
import {useMemo} from "react";



const character = ({params}: {params:{ characterId: number, combat: string }}) =>{
    const [players, setPlayers] = useRealtimeState<pjData[]>();

    const modifyPlayer = (target: pjData, operation: (init: pjData) => pjData) => {
        if (!players) return;
        const newPlayers = players.map((player) => {
            if (player.name === target.name) {
                return operation(player);
            }
            return player;
        });
        setPlayers(newPlayers);
    }

    const handleLife = (shouldReduce: boolean, target: pjData) => modifyPlayer(target, (player) => {
        if (shouldReduce) return { ...player, currentLife: player.currentLife - 1};
        return { ...player, currentLife: player.currentLife + 1};
    });

    const handleMana = (shouldReduce: boolean, target: pjData) => modifyPlayer(target, (player) => {
        if (shouldReduce) return { ...player, currentMana: player.currentMana - 1};
        return { ...player, currentMana: player.currentMana + 1};
    });

    const handleCA = (shouldReduce: boolean, target: pjData) => modifyPlayer(target, (player) => {
        if (shouldReduce) return { ...player, armorClass: player.armorClass - 1};
        return { ...player, armorClass: player.armorClass + 1};
    });

    const pj = useMemo(() => {
            if (!players) return null;
            return players[params.characterId]},
        [players, params.characterId]);
    if(!pj) return (<div>loading...</div>);
    return params.combat === 'idle' ? (
            <Wrapper>
                <Image src={ pj.image  } alt={ pj.name } width={90} height={90} />
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
            <>
                <Wrapper>
                    <Image src={ pj.image } alt="onnen" width={90} height={90} />
                    <Character>
                        <Name color={ pj.color }>{ pj.name }</Name>
                        <Description>
                            <Life>{pj.currentLife}/{pj.life}</Life>
                            <Mana>{pj.currentMana}/{pj.mana}</Mana>
                            <DescriptionText>CA: { pj.armorClass }</DescriptionText>
                        </Description>
                    </Character>
                </Wrapper>
                <ButtonWrapper>
                    <ActionButtons>
                        <Button type='life'  onClick={(e) => handleLife(false, pj)}>+ Life</Button>
                        <Button type='life'  onClick={(e) => handleLife(true, pj)}>- Life</Button>
                    </ActionButtons>

                    <ActionButtons>
                        <Button type='mana' onClick={(e) => handleMana(false, pj)}>+ Mana</Button>
                        <Button type='mana' onClick={(e) => handleMana(true, pj)}>- Mana</Button>
                    </ActionButtons>

                    <ActionButtons>
                        <Button type='mana' onClick={(e) => handleCA(false, pj)}>+ CA</Button>
                        <Button type='mana' onClick={(e) => handleCA(true, pj)}>- CA</Button>
                    </ActionButtons>
                </ButtonWrapper>
            </>
        );
}

export default character;