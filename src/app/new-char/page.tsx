'use client';

import { Form, Wrapper } from '@/app/style';
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
    <Wrapper>
      <Form action={handleCharacterCreation}>
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
        <Button color='toggle' type='submit' disabled={isCreateButtonDisabled}>
          Create character!
        </Button>
      </Form>
    </Wrapper>
  );
};

export default CharacterCreation;
