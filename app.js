
document.getElementById("shipmentForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const model = document.getElementById("modelName").value;
  const invoiceValue = parseFloat(document.getElementById("invoiceValue").value);
  const customDuty = parseFloat(document.getElementById("customDuty").value);
  const freight = parseFloat(document.getElementById("freight").value);
  const insurance = parseFloat(document.getElementById("insurance").value);
  const chaCharges = parseFloat(document.getElementById("chaCharges").value);
  const quantity = parseInt(document.getElementById("quantity").value);

  const mva = 78; // fixed for now
  const totalCost = invoiceValue + customDuty + freight + insurance + chaCharges;
  const costPerUnit = totalCost / quantity;
  const finalSellPricePerUnit = costPerUnit + mva;

  const resultHTML = `
    <h3>Pricing Summary for Model: ${model}</h3>
    <p><strong>Total Cost (INR):</strong> ₹${totalCost.toFixed(2)}</p>
    <p><strong>Cost per Unit (INR):</strong> ₹${costPerUnit.toFixed(2)}</p>
    <p><strong>Final Selling Price per Unit (INR, excl. GST):</strong> ₹${finalSellPricePerUnit.toFixed(2)}</p>
  `;

  document.getElementById("resultBox").innerHTML = resultHTML;
});
