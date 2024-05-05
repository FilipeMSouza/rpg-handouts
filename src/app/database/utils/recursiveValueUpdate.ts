const recursiveValueUpdate = (path: string[], value: any, obj: any): object => {
  const targetKey = path.shift();
  if (path.length === 0) return value;
  if (Array.isArray(obj)) return obj.map((item, i) => (i === Number(targetKey) ? recursiveValueUpdate(path, value, item) : item));
  return Object.fromEntries(Object.entries(obj).map(([key, val]) => (key === targetKey ? [key, recursiveValueUpdate(path, value, val)] : [key, val])));
};

export default recursiveValueUpdate;
