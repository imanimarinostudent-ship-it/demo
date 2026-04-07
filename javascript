function updateAllWeights() {
    // 1. Get the weight the user typed
    let earthWeight = document.getElementById('userWeight').value;

    // 2. Fix: If the box is empty, treat it as 0 so the code doesn't break
    if (earthWeight === "" || earthWeight < 0) {
        earthWeight = 0;
    }

    // 3. Loop through every planet in our data object
    for (let planet in planetData) {
        // Access the gravity multiplier from your object
        let multiplier = planetData[planet].gravity;
        
        // Calculate the result
        let result = (earthWeight * multiplier).toFixed(1);

        // 4. Update the specific span in the HTML
        let element = document.getElementById('weight-' + planet);
        
        if (element) {
            element.innerText = result;
        }
    }
}