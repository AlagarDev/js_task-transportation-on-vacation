/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let totalCoast = 0;
  const carCost = 40;
  let offCost = 0;

  if (days >= 3) {
    offCost = 20;
  }

  if (days >= 7) {
    offCost = 50;
  }

  totalCoast = carCost * days - offCost;

  return totalCoast;
}

module.exports = calculateRentalCost;
