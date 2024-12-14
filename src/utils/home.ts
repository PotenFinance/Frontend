export const formatCost = (value: number) =>
  value < 0 ? `-${Math.abs(value).toLocaleString()}` : value.toLocaleString();
