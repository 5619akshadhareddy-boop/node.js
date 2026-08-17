function divideNumbers(a, b) {
    try {
    
        const num1 = Number(a);
        const num2 = Number(b);

        
        if (Number.isNaN(num1) || Number.isNaN(num2)) {
            throw new Error("Invalid input: Both arguments must be numbers.");
        }

        if (num2 === 0) {
            throw new Error("Division error: Cannot divide by zero.");
        }

        
        const result = num1 / num2;
        return result;

    } catch (error) {
        console.error(`[Error Caught]: ${error.message}`);
        return null;
    } finally {
        console.log("Division operation attempted.");
    }
}

// Example usage:
console.log(divideNumbers(10, 2));   // Success: 5
console.log(divideNumbers(10, 0));   // Catches division by zero
console.log(divideNumbers("x", 5));  // Catches invalid number input