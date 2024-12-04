// JavaScript Code (script.js)

// Array to hold package data
const packages = [];

// Function to validate input fields
function validateInputs(recipientName, packageId, deliveryAddress, weight) {
  const errorMessage = document.getElementById("errorMessage");
  errorMessage.textContent = ""; // Clear previous errors

  if (!/^[A-Za-z\s]+$/.test(recipientName)) {
    errorMessage.textContent = "Error: Recipient Name must contain only alphabetic characters.";
    return false;
  }
  if (!/^\d+$/.test(packageId)) {
    errorMessage.textContent = "Error: Package ID must be a numeric value.";
    return false;
  }
  if (!deliveryAddress.trim() || /\d/.test(deliveryAddress)) {
    errorMessage.textContent = "Error: Delivery Address must not be empty and cannot contain numbers.";
    return false;
  }
  if (isNaN(weight) || weight <= 0) {
    errorMessage.textContent = "Error: Weight must be a positive number.";
    return false;
  }

  return true;
}

// Function to generate a tracking code
function generateTrackingCode(packageId, weight) {
  return (packageId << 4 | weight).toString(2);
}

// Function to sort packages by weight
function sortPackages() {
  packages.sort((a, b) => a.weight - b.weight);
}

// Function to render packages in the table
function renderPackages() {
  const tableBody = document.querySelector("#packagesTable tbody");
  tableBody.innerHTML = ""; // Clear previous rows

  packages.forEach((pkg) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${pkg.recipientName}</td>
      <td>${pkg.packageId}</td>
      <td>${pkg.deliveryAddress}</td>
      <td>${pkg.weight}</td>
      <td>${pkg.trackingCode}</td>
    `;
    tableBody.appendChild(row);
  });
}

// Form submission handler
document.getElementById("packageForm").addEventListener("submit", (event) => {
  event.preventDefault();

  const recipientName = document.getElementById("recipientName").value;
  const packageId = document.getElementById("packageId").value;
  const deliveryAddress = document.getElementById("deliveryAddress").value;
  const weight = parseFloat(document.getElementById("weight").value);

  if (validateInputs(recipientName, packageId, deliveryAddress, weight)) {
    const trackingCode = generateTrackingCode(Number(packageId), Math.floor(weight));
    packages.push({ recipientName, packageId, deliveryAddress, weight, trackingCode });
    sortPackages();
    renderPackages();
    document.getElementById("packageForm").reset();
    document.getElementById("errorMessage").textContent = "Package added successfully!";
  }
});
