import { createContext } from 'react';

const DatabaseContext = createContext<[state: any[] | object | undefined, setState: (newState: any[] | object) => void]>([undefined, () => {}]);

export default DatabaseContext;
