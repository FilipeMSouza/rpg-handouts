import { useContext, useState } from 'react';

import ArrayContainer from './array-container';
import ObjectContainer from './object-container';
import ValueNode from './value-node';
import removeRecord from '../utils/removeRecord';
import includeRecord from '../utils/includeRecord';
import DatabaseContext from '../context';
import recursiveValueUpdate from '../utils/recursiveValueUpdate';
import RecordContainer from './record-container';
import OptionsContainer from './options-container';

const ObjectParser = ({ object, path = [] }: { object: any, path?: string[] }) => {
  const [localState, setLocalState] = useContext(DatabaseContext);
  if (typeof object !== 'object') return <ValueNode key={path.join('>')} path={path} value={object} />;
  if (!object) {
    return <OptionsContainer>
      <button onClick={() => setLocalState(recursiveValueUpdate(path, [], localState!))}>+ Array</button>
      <button onClick={() => setLocalState(recursiveValueUpdate(path, {}, localState!))}>+ Object</button>
    </OptionsContainer>;
  }

  if (Array.isArray(object)) {
    return <ArrayContainer>
      <button onClick={() => setLocalState(removeRecord(path, localState!)!)}>🚮</button>
      {object.map((item, i) => {
        const newPath = [...path, i.toString()];
        return <ObjectParser key={newPath.join('>')} object={item} path={newPath} />;
      })}
    </ArrayContainer>;
  }

  const [isAddingKey, setIsAddingKey] = useState(false);

  return <ObjectContainer key={path.join('>')}>
    <button onClick={() => setLocalState(removeRecord(path, localState!)!)}>🚮</button>
    {Object.entries(object).map(([key, val]) => {
      const newPath = [...path, key];
      return <RecordContainer key={newPath.join('>')}>
        <button onClick={() => setLocalState(removeRecord(newPath, localState!)!)}>🚮</button>
        <ObjectParser object={key} path={[...newPath, 'key']} />
        <ObjectParser object={val} path={[...newPath, 'value']} />
      </RecordContainer>;
    })}
    {isAddingKey ? (
      <form action={(e) => {
        const [key, value] = Array.from(e.values());
        setLocalState(includeRecord(path, `${key}`, value, localState!));
        setIsAddingKey(false);
      }}>
        <input name='key' placeholder="Key" />
        <input name='value' placeholder="Value" />
        <button type='submit'>✅</button>
        <button onClick={() => setIsAddingKey(false)}>❌</button>
      </form>
    ) : (
      <button onClick={() => setIsAddingKey(true)}>+</button>
    )}
  </ObjectContainer>;
};

export default ObjectParser;
