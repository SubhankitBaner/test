/**
 * Simple utility functions for testing
 */

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error('Division by zero is not allowed');
  }
  return a / b;
}

function greet(name) {
  return `Hello, ${name}!`;
}

// Export functions for testing
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    add,
    subtract,
    multiply,
    divide,
    greet
  };
}

// Main execution when run directly
if (require.main === module) {
  console.log('Testing utility functions:');
  console.log('add(2, 3) =', add(2, 3));
  console.log('subtract(5, 2) =', subtract(5, 2));
  console.log('multiply(4, 3) =', multiply(4, 3));
  console.log('divide(10, 2) =', divide(10, 2));
  console.log('greet("World") =', greet('World'));
}