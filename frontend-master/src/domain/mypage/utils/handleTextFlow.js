export const handleTextFlow = (text, maxRange) => {
  if (text.length > maxRange) {
    return `${text.slice(0, range)}...`;
  }
  return text;
};
