export const formatNumber = (num) => {
  if (num === undefined || num === null) return "0"; 
  if (num >= 1_000_000) {
    const value = num / 1_000_000;
    return (value % 1 === 0 ? value.toFixed(0) : value.toFixed(1)) + 'M';
  } else if (num >= 1_000) {
    const value = num / 1_000;
    return (value % 1 === 0 ? value.toFixed(0) : value.toFixed(1)) + 'K';
  } else {
    return num.toString();
  }
};
