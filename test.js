/**
 * Simple test runner for the utility functions
 */

const { add, subtract, multiply, divide, greet } = require('./index.js');

// Simple assertion function
function assert(condition, message) {
  if (condition) {
    console.log(`✅ PASS: ${message}`);
    return true;
  } else {
    console.error(`❌ FAIL: ${message}`);
    return false;
  }
}

// Test suite
function runTests() {
  console.log('Running tests...\n');
  
  let passed = 0;
  let failed = 0;

  // Test add function
  console.log('Testing add function:');
  if (assert(add(2, 3) === 5, 'add(2, 3) should equal 5')) passed++; else failed++;
  if (assert(add(-1, 1) === 0, 'add(-1, 1) should equal 0')) passed++; else failed++;
  if (assert(add(0, 0) === 0, 'add(0, 0) should equal 0')) passed++; else failed++;
  
  // Test subtract function
  console.log('\nTesting subtract function:');
  if (assert(subtract(5, 3) === 2, 'subtract(5, 3) should equal 2')) passed++; else failed++;
  if (assert(subtract(0, 5) === -5, 'subtract(0, 5) should equal -5')) passed++; else failed++;
  if (assert(subtract(10, 10) === 0, 'subtract(10, 10) should equal 0')) passed++; else failed++;
  
  // Test multiply function
  console.log('\nTesting multiply function:');
  if (assert(multiply(3, 4) === 12, 'multiply(3, 4) should equal 12')) passed++; else failed++;
  if (assert(multiply(-2, 3) === -6, 'multiply(-2, 3) should equal -6')) passed++; else failed++;
  if (assert(multiply(0, 5) === 0, 'multiply(0, 5) should equal 0')) passed++; else failed++;
  
  // Test divide function
  console.log('\nTesting divide function:');
  if (assert(divide(10, 2) === 5, 'divide(10, 2) should equal 5')) passed++; else failed++;
  if (assert(divide(9, 3) === 3, 'divide(9, 3) should equal 3')) passed++; else failed++;
  if (assert(divide(-6, 2) === -3, 'divide(-6, 2) should equal -3')) passed++; else failed++;
  
  // Test divide by zero error
  console.log('\nTesting divide by zero error:');
  try {
    divide(5, 0);
    if (assert(false, 'divide(5, 0) should throw an error')) passed++; else failed++;
  } catch (error) {
    if (assert(error.message === 'Division by zero is not allowed', 'divide(5, 0) should throw correct error message')) passed++; else failed++;
  }
  
  // Test greet function
  console.log('\nTesting greet function:');
  if (assert(greet('World') === 'Hello, World!', 'greet("World") should return "Hello, World!"')) passed++; else failed++;
  if (assert(greet('Alice') === 'Hello, Alice!', 'greet("Alice") should return "Hello, Alice!"')) passed++; else failed++;
  if (assert(greet('') === 'Hello, !', 'greet("") should return "Hello, !"')) passed++; else failed++;
  
  // Test summary
  console.log('\n' + '='.repeat(50));
  console.log(`Test Results: ${passed} passed, ${failed} failed`);
  
  if (failed === 0) {
    console.log('🎉 All tests passed!');
    process.exit(0);
  } else {
    console.log('❌ Some tests failed!');
    process.exit(1);
  }
}

// Run tests
runTests();