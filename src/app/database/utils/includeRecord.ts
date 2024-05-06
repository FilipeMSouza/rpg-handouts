const includeRecord = (path: string[], key: string, value: any, obj: object): object => {
  if (path.length === 0) return { ...obj, [key]: value };
  const targetKey = path.shift();
  if (Array.isArray(obj)) return obj.map((item, i) => (i === Number(targetKey) ? includeRecord(path, key, value, item) : item));
  return Object.fromEntries(Object.entries(obj).map(([key, val]) => (key === targetKey ? [key, includeRecord(path, key, value, val)] : [key, val])));
};

export default includeRecord;
