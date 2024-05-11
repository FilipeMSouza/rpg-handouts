import { FaMoon, FaSun } from 'react-icons/fa';
import { DARK_THEME } from '@/consts';
import type { ThemeData } from '@/@types/themeData';
import IconButton from '@/components/atoms/IconButton/IconButton';

const ThemeSelector = ({ selectedTheme, themeToggle }: { selectedTheme: ThemeData, themeToggle: () => void }) => {
  return (
    <IconButton
      onClick={themeToggle}
      icon={selectedTheme.name === DARK_THEME ? <FaMoon /> : <FaSun />}
    />
  );
};

export default ThemeSelector;
