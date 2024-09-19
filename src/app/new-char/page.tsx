'use client';

import { Button } from '@/app/player/[characterId]/[state]/style';
import React, { useContext, useState } from 'react';
import { SupabaseContext } from '@/lib/supabase';
import uploadImage from '@/lib/uploadImage';
import parseImageFile from '@/lib/parseImageFile';

const CharacterCreation = () => {
  const supabase = useContext(SupabaseContext);
  const [isCreateButtonDisabled, setIsCreateButtonDisabled] = useState(false);

  const handleCharacterCreation = async (formData: FormData) => {
    setIsCreateButtonDisabled(true);
    await sendToServer(formData);
    setIsCreateButtonDisabled(false);
  };

  const sendToServer = async (formData: FormData) => {
    if (!supabase) throw new Error('No Supabase client!');

    const { error } = await supabase
      .from('Players')
      .insert({
        name: formData.get('characterName') as string,
        avatar: await uploadImage(
          await parseImageFile(formData.get('characterAvatar') as File)
        ),
        color: formData.get('characterColor') as string,
        profession: formData.get('characterProfession') as string,
        life_max: parseInt(formData.get('characterLife') as string),
        mana_max: parseInt(formData.get('characterMana') as string),
        life_current: parseInt(formData.get('characterLife') as string),
        mana_current: parseInt(formData.get('characterMana') as string),
        level: parseInt(formData.get('characterLevel') as string),
        armor_class: parseInt(formData.get('characterAc') as string),
      })
      .select();

    if (error) throw new Error(error.message);
    alert('Character created!');
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
        <Button color='toggle' type='submit' disabled={isCreateButtonDisabled}>
          Create character!
        </Button>
      </Form>
    </>
  );
};

export default CharacterCreation;
