'use client';

import { Form, Wrapper } from '@/app/style';
import { Button } from '@/app/player/[characterId]/[state]/style';
import React from 'react';
import useRealtimeState from '@/app/hooks/useRealtimeState';
import type { pjData } from '@/@types/pjData';

const characterCreation = () => {
  const [players, setPlayers] = useRealtimeState<pjData[]>();

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
    };
  };

  return (
    <Wrapper>
      <Form action={sendToServer}>
        <Wrapper>
          <label>Character Avatar:</label>
          <input
            required={true}
            name='characterAvatar'
            accept='.jpg, .png'
            placeholder='Character Avatar'
            type='file'
          />
        </Wrapper>
        <Wrapper>
          <label>Character Name:</label>
          <input
            required={true}
            name='characterName'
            placeholder='Name'
            type='text'
          />
        </Wrapper>
        <Wrapper>
          <label>Character Level:</label>
          <input
            required={true}
            name='characterLevel'
            placeholder='Level'
            type='number'
          />
        </Wrapper>
        <Wrapper>
          <label>Character Color:</label>
          <input
            required={true}
            name='characterColor'
            placeholder='Color'
            type='color'
          />
        </Wrapper>
        <Wrapper>
          <label>Profession Name:</label>
          <input
            required={true}
            name='characterProfession'
            placeholder='Profession'
            type='text'
          />
        </Wrapper>
        <Wrapper>
          <label>Life</label>
          <input
            defaultValue={0}
            name='characterLife'
            placeholder='Life'
            type='number'
          />
        </Wrapper>
        <Wrapper>
          <label>Mana</label>
          <input
            defaultValue={0}
            name='characterMana'
            placeholder='Mana'
            type='number'
          />
        </Wrapper>
        <Wrapper>
          <label>Armor Class</label>
          <input
            defaultValue={0}
            name='characterAc'
            placeholder='Armor Class'
            type='number'
          />
        </Wrapper>
        <Button color='toggle' type='submit'>
          Create character!
        </Button>
      </Form>
    </Wrapper>
  );
};

export default characterCreation;
