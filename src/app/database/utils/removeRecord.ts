const removeRecord = (path: string[], obj: object): object | null => {
  if (path.length === 0) return null;
  const targetKey = path.shift();
  if (targetKey === 'value' && path.length === 0) return null;
  if (Array.isArray(obj)) return obj.map((item, i) => (i === Number(targetKey) ? removeRecord(path, item) : item)).filter((item) => item !== null);
  return Object.fromEntries(Object.entries(obj).map(([key, val]) => (key === targetKey ? [key, removeRecord(path, val)] : [key, val])).filter(([, val]) => val !== null));
};

export default removeRecord;
