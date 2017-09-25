let tipCalculator
tipCalculator = function(total, tipRate) { let tipAmount; tipAmount = tipRate * total; let tipTotal; tipTotal = tipRate * 0.01 * total; if (tipRate < 1) { $("#response").html("Your tip is $" + tipAmount); } else { $("#response").html("Your tip is $" + tipTotal); } };
tipCalculator(50.00, 20);
