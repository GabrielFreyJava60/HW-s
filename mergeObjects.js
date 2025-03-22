export const mergeObjects = (a, b, p) => {
  let res = { ...a, ...b };
  for (const k in a) if (k in b) res[k] = p ? a[k] : b[k];
  return res;
};
