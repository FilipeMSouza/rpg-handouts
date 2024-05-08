import { Button } from '@/components/atoms/IconButton/styles';
import React from 'react';

interface ThemeButtonProps {
  icon: React.ReactNode;
  onClick: () => void;
}

const IconButton = ({ icon, onClick }: ThemeButtonProps) => {
  return <Button onClick={onClick}>{icon}</Button>;
};

export default IconButton;
