const deepCopy = (obj, cache = []) => {
  if (obj === null || typeof obj !== 'object') return obj;

  const hit = cache.filter(o => o.origin === obj)[0];
  if (hit) {
    return hit.copy;
  }

  const copy = Array.isArray(obj) ? [] : {};

  cache.push({ origin: obj, copy });

  Object.keys(obj).forEach(key => {
    copy[key] = deepCopy(obj[key], cache);
  });

  return copy;
};

module.exports = deepCopy;
