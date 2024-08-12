export default function cleanSet(set, startString) {
  const newSet = [];
  for (const value of set) {
    if (value.startsWith(startString)) {
      newSet.push(value.slice(startString.length));
    }
  }
  return newSet.join('-');
}
