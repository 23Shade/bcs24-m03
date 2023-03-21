console.log("Hello, Welcome to De La Salle University!\n");

function computeSupply(age, amount) {
  const maxAge = 100;
  const totalAmount = Math.round((maxAge - age) * 365 * amount);
  console.log(`You need to ${totalAmount} to last you until the ripe old age of ${maxAge}.`);
}

computeSupply(22, 2.5);
computeSupply(33, 3.6);
computeSupply(44, 4.2);