const recursiveValueUpdate = (path: string[], value: any, obj: any): object => {
  if (obj === null) return value;
  const targetKey = path.shift();
  if (path.length === 0) {
    if (targetKey === 'new-item') {
      if (Array.isArray(obj)) return [...obj, value];
    }
    return value;
  }

  if (Array.isArray(obj)) return obj.map((item, i) => {
    if (i !== Number(targetKey)) return item;
    return recursiveValueUpdate(path, value, item);
  });

  return Object.fromEntries(Object.entries(obj).map(([key, val]) => {
    if (key !== targetKey) return [key, val];
    if (path[path.length - 1] === 'key') return [recursiveValueUpdate(path, value, key), val];
    return [key, recursiveValueUpdate(path, value, val)];
  }));
};

export default recursiveValueUpdate;
