export const remainingBirr = (income, categories) =>
  income - categories.reduce((s, c) => s + Number(c.planned || 0), 0);