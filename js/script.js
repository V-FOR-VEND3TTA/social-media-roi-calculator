function calculateROI() {
  const revenue = parseFloat(document.getElementById('revenue').value);
  const cost = parseFloat(document.getElementById('cost').value);

  if (isNaN(revenue) || isNaN(cost)) {
    alert('Please enter valid numeric values for Revenue and Cost.');
    return;
  }

  const roi = ((revenue - cost) / cost) * 100;
  const resultDiv = document.getElementById('result');
  resultDiv.textContent = `Social Media ROI: ${roi.toFixed(2)}%`;
}
