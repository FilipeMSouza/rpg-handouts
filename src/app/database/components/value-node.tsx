import { useContext, useState } from 'react';
import recursiveValueUpdate from '../utils/recursiveValueUpdate';
import DatabaseContext from '../context';

const ValueNode = ({ value, path }: { value: any, path: string[] }) => {
  const [localState, setLocalState] = useContext(DatabaseContext);
  const [isEditing, setIsEditing] = useState(false);

  const updateValue = (value: any, path: string[]) => setLocalState(recursiveValueUpdate(path, value, localState));

  const handleSubmit = (e: any) => {
    if (e.key !== 'Enter') return;
    updateValue((e.target as HTMLInputElement).value, path);
    setIsEditing(false);
  };

  const handleOnClick = () => setIsEditing(true);

  if (isEditing) return <input defaultValue={value} onKeyUp={handleSubmit} autoFocus />;
  return <p onClick={handleOnClick}>{value}</p>;
};

export default ValueNode;
