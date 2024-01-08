export default function cleanSet(set, startString) {
  if (!startString || typeof startString !== 'string') return '';

  const result = [];

  for (const val of set.values()) {
    if (typeof val === 'string' && val.includes(startString, 0)) {
      result.push(val.slice(startString.length));
    }
  }

  return result.join('-');
}
