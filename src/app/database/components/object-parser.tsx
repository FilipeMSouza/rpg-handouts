import { useContext, useState } from 'react';

import ArrayContainer from './array-container';
import ObjectContainer from './object-container';
import ValueNode from './value-node';
import removeRecord from '../utils/removeRecord';
import includeRecord from '../utils/includeRecord';
import DatabaseContext from '../context';

const ObjectParser = ({ object, path = [] }: { object: object, path?: string[] }) => {
  const [localState, setLocalState] = useContext(DatabaseContext);
  if (typeof object !== 'object') return <ValueNode path={path} value={object} />;

  if (Array.isArray(object)) {
    return <ArrayContainer>{object.map((item, i) => (
      <ObjectParser object={item} path={[...path, i.toString()]} />
    ))}</ArrayContainer>;
  }

  const [isAddingKey, setIsAddingKey] = useState(false);

  return <ObjectContainer key={path.join('>')}>
    {Object.entries(object).map(([key, val]) => <ArrayContainer key={[...path, key].join('>')}>
      <button onClick={() => setLocalState(removeRecord([...path, key], localState!)!)}>🚮</button>
      <p>{key}</p>
      <ObjectParser object={val} path={[...path, key, 'value']} />
    </ArrayContainer>)}
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
