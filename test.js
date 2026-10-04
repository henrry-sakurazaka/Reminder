const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      './firebase-DQ2yNNgH.js',
      './vite-plugin-node-polyfills-CYF0W5wK.js',
      './tslib-BGVaTf34.js',
      './idb-BXWtuYvb.js',
    ])
) => {
  console.log('Input indices:', i);
  const result = i.map((index) => {
    if (index >= d.length || index < 0) {
      console.warn(`⚠️ Invalid index "${index}" out of bounds.`);
      return null; // もしくは適切なデフォルト値
    }
    return d[index];
  });
  console.log('Resolved dependencies:', result);
  return result;
};
