import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Character creation',
  description: 'Character creation page',
};

export default function CharacterCreation({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
