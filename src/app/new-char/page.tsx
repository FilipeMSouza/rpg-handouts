'use client';

import { Button } from '@/app/player/[characterId]/[state]/style';
import React, { useState } from 'react';
import useRealtimeState from '@/hooks/useRealtimeState';
import type { pjData } from '@/@types/pjData';
import { ColorInput, Form, Input, Label, Wrapper } from '@/app/new-char/style';

const characterCreation = () => {
  const [players, setPlayers] = useRealtimeState<pjData[]>();
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(false);

  const handleCharacterCreation = (formData: FormData) => {
    setButtonDisabled(true);
    sendToServer(formData);
    setButtonDisabled(false);
  };

  const sendToServer = (formData: FormData) => {
    const reader = new FileReader();

    reader.readAsDataURL(formData.get('characterAvatar') as File);
    reader.onload = () => {
      const newCharacter: pjData = {
        name: formData.get('characterName')! as string,
        image: reader.result as string,
        profession: formData.get('characterProfession')! as string,
        color: formData.get('characterColor')! as string,
        life: parseInt(formData.get('characterLife')! as string),
        mana: parseInt(formData.get('characterMana')! as string),
        currentLife: parseInt(formData.get('characterLife')! as string),
        currentMana: parseInt(formData.get('characterMana')! as string),
        level: parseInt(formData.get('characterLevel')! as string),
        armorClass: parseInt(formData.get('characterAc')! as string),
      };

      if (players === undefined)
        return alert('Erro 500 algo de errado aconteceu...');
      setPlayers([...players, newCharacter]);
      alert(`${newCharacter.name} has been added to the server.`);
      setButtonDisabled(false);
    };
  };

  return (
    <>
      <Form action={handleCharacterCreation}>
        <Wrapper>
          <Label>Character Avatar:</Label>
          <Input
            required={true}
            name='characterAvatar'
            accept='.jpg, .png .gif'
            placeholder='Character Avatar'
            type='file'
          />
        </Wrapper>
        <Wrapper>
          <Label>Character Name:</Label>
          <Input
            required={true}
            name='characterName'
            placeholder='Name'
            type='text'
          />
        </Wrapper>
        <Wrapper>
          <Label>Character Level:</Label>
          <Input
            required={true}
            name='characterLevel'
            placeholder='Level'
            type='number'
          />
        </Wrapper>
        <Wrapper>
          <Label>Character Color:</Label>
          <ColorInput
            required={true}
            name='characterColor'
            placeholder='Color'
            type='color'
          />
        </Wrapper>
        <Wrapper>
          <Label>Profession Name:</Label>
          <Input
            required={true}
            name='characterProfession'
            placeholder='Profession'
            type='text'
          />
        </Wrapper>
        <Wrapper>
          <Label>Life:</Label>
          <Input
            defaultValue={0}
            name='characterLife'
            placeholder='Life'
            type='number'
          />
        </Wrapper>
        <Wrapper>
          <Label>Mana:</Label>
          <Input
            defaultValue={0}
            name='characterMana'
            placeholder='Mana'
            type='number'
          />
        </Wrapper>
        <Wrapper>
          <Label>Armor Class: </Label>
          <Input
            defaultValue={0}
            name='characterAc'
            placeholder='Armor Class'
            type='number'
          />
        </Wrapper>
        <Button color='toggle' type='submit' disabled={buttonDisabled}>
          Create character!
        </Button>
      </Form>
    </>
  );
};

export default characterCreation;
