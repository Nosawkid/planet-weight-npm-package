const weightOnMars = (weight) => {
  weight = Number(weight);
  if (!weight) return "Not a valid number";
  const marsWeight = weight * 0.38;
  return `Your weight on mars is ${marsWeight.toFixed(2)} kg`;
};

module.exports = weightOnMars;
