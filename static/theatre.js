const GENERAL_ADMISSION_TICKET_PRICE = 20;
const DISCOUNTED_TICKET_PRICE = 10;
const MATINEE_DISCOUNT = 3;

function buyTicket() {
  const age = prompt("How old are you?");
  let cost = getBaseTicketCost(age);

  const isMatinee = prompt("Are you attending the matinee show?");
  let inputResponse = isMatinee.toLowerCase();
  cost = applyMatineeDiscount(cost, inputResponse)

  alert("Cost of ticket: $" + cost);
}

function getBaseTicketCost(age) {
  if ((age <= 12) || (age >= 65)) {
    return DISCOUNTED_TICKET_PRICE;
  }
  return GENERAL_ADMISSION_TICKET_PRICE
}

function applyMatineeDiscount(cost, isMatinee) {
  if ((isMatinee === 'yes') || (isMatinee === 'y')) {
    return cost - MATINEE_DISCOUNT;
  }
  return cost;
}