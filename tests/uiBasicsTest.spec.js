
// Import test object from the playwright module;
const { test, expect } = require('@playwright/test');

// Writing your first test with name and a callback function
test('Check Google Title', callbackFunctionTest1);

// Test 1 callbackFunction;
async function callbackFunctionTest1({ browser }){
    
    // Open Browser context & page window/tab;
    const browserContext = await browser.newContext();
    const newPageWindow = await browserContext.newPage();
    
    // visit page url or website;
    await newPageWindow.goto("https://google.com");

    // Get the Google Website title
    const pageTitle = await newPageWindow.title();

    // Assertion to check if the title is 'Google' or not;
    await expect(newPageWindow).toHaveTitle("Google");

    console.log("All went well and executed step by step i.e synchronously");
}

