// Base API URL for currency conversion
Rurl = "https://api.currencyapi.com/v3/latest?apikey=cur_live_oGBhyBwz8RQWtBvcSNhVnMvwQXLhBu8RPkZ5kZCq&base_currency="

// DOM element where the exchange rate will be displayed
const link = document.querySelector(".exchange-rate");

// Get all dropdown select elements
const dropdown = document.querySelectorAll(".dropdown select");
// Get the convert button
const btn = document.querySelector("form button");
// Get the "from" currency select element
const fromCurr = document.querySelector(".from select")
// Get the "to" currency select element
const toCurr = document.querySelector(".to select")

// Populate dropdown menus with currency options
for (let select of dropdown) {
  // Loop through all currencies in countryList object
  for (currCode in countryList) {
    // Create new option element for each currency
    let newOption = document.createElement("option");
    newOption.innerHTML = currCode;
    newOption.value =  currCode;
    
    // Set default selections
    if (select.name === "from" && currCode === "USD") {
      newOption.selected = "selected";  // Default "from" currency is USD
    } else if (select.name === "to" && currCode === "BDT") {
      newOption.selected = "selected";  // Default "to" currency is BDT
    }
    select.append(newOption);
  }
  
  // Add event listener for currency selection changes
  select.addEventListener("change", (evt) => {
    updateFlage(evt.target)  // Update flag image when currency changes
  })
}

// Function to update flag image based on selected currency
const updateFlage = (element) => {
  let currCode = element.value;
  let countryCode = countryList[currCode];  // Get country code from currency code
  let newSec = `https://flagsapi.com/${countryCode}/flat/64.png`;  // Flag image URL
  let emg = element.parentElement.querySelector("img")
  emg.src = newSec  // Update the image source
};

// Handle convert button click
btn.addEventListener("click", async(evt) => {
     evt.preventDefault()  // Prevent form submission
     
     // Get amount input value
     let amount = document.querySelector(".amount input")
     let amiVal = amount.value;
     
     // Validate amount (default to 1 if empty or less than 1)
     if (amiVal ==="" || amiVal < 1) {
       amiVal = 1;
       amount.value = "1"; 
      }
      
      // Build API URL with selected "from" currency
      const url = `https://api.currencyapi.com/v3/latest?apikey=cur_live_oGBhyBwz8RQWtBvcSNhVnMvwQXLhBu8RPkZ5kZCq&base_currency=${fromCurr.value}`
      
      // Fetch exchange rate data
      let response = await fetch(url);
      let rJson = await response.json();
      
      // Get conversion rate for target currency
      let rate = rJson.data[toCurr.value]?.value;
      
      // Calculate final amount
      let finalAmount = amiVal * rate;
      console.log(finalAmount)  // Debug output
      
      // Display converted amount
      link.innerHTML =` = ${finalAmount} ${toCurr.value}`;
})

 

ss