
// Import test object from the playwright module;
const { test, expect } = require('@playwright/test');

// TC_01 Check Google Webpage Title
// Writing your first test with name and a callback function
test('sec-3 Check Google Title', callbackFunctionTest1);

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

// TC_02 Print Leetcode Username
// Writing second test case;
test('sec-4 Print Leetcode Username', printLeetcodeUsername);

//
async function printLeetcodeUsername({ page }) {
    // visit page url or website;
    await page.goto("https://leetcode.com/u/niteshprimedev/");

    console.log('Playwright second test case');

    // Select the Playwright Heading;
    // const pageEl = await page.locator();
    const pageElText = await page.textContent(`[class="text-label-1 dark:text-dark-label-1 break-all text-base font-semibold"]`);
    console.log(pageElText);
    console.log("Hellow World");
}

// TC_03 Fill the Rahul Shetty Login Form
test('sec-4 Fill Login Form', cbFillLoginForm);

async function cbFillLoginForm({ page }){
    // Visit page url or website
    await page.goto("https://sso.teachable.com/secure/146684/identity/sign_up/otp");

    // Get the page or website title
    const pageTitle = await page.title();

    await console.log('Page Title', pageTitle);

    // Select the form input with id selector;
    await page.locator('input#name').fill('Rahul Shetty');

    await page.locator('input#email').fill('rahulshetty@gmail.com');

    await console.log("Test Fill Form is successfully executed");

    const isPageClosed = await page.isClosed();

    await console.log("isPageClosed?", isPageClosed);
}

// TC_04 Login Form Validations
test('Sec-4 Form Validation', loginFormValidation);

async function loginFormValidation({ page }){
    const userEmail = page.locator('input#email');
    const userPasword = page.locator('input#password');
    const loginBtn = page.locator('data-testid=login-button');

    // visit the page url or website;
    await page.goto("https://sso.teachable.com/secure/9521/identity/login/password?force=true");

    // Validate the page load with the title;
    const isPageTitleVerified = await expect(page).toHaveTitle(/Rahul Shetty Academy/);
    console.log('Page title verified: ', isPageTitleVerified);

    // Select the form input fields;
    // fill the input with the id = email 
    await userEmail.fill('rahulshetty@gmail.com');

    // fill the input with the id = password 
    await userPasword.fill('rahulpassword');

    // show the password by clicking on the eye icon with the id = icon-e
    await page.locator('svg#icon-e').click();
    
    // uncheck the remember me checkbox with the id = remember_me
    await page.locator('input#remember_me').uncheck();

    await setTimeout(() => {
        console.log("Should see the test execution");
    }, 5000);

    await loginBtn.click();

    // await page.locator('data-transition=entered').waitFor();
    // const errorTxtMsg = await page.locator('data-transition=entered').textContent();
    // const errorTxtMsg = await page.locator(`[class="bodyMainBold p-h-3-xs p-v-3-xs m-r-4-xs m-b-7-xs dsp-flex-xs flex-align-items-center-xs toast success"]`).innerText();
    // const errorTxtMsg = await page.locator(`[style="transform:translate3d(0%, 0, 0)"]`).innerText();

    // await console.log('Error Message: ', errorTxtMsg);

    // Assertiont to check it;
    await expect(page.locator(`[style="transform=translate3d(0, 0, 0)"]`)).toContainText('Incorrect');

    // Clear the inputs with id = email;
    await userEmail.fill('');
    
    // Fill the inputs with the id = email
    await userEmail.fill('playwright@dev.com');

    // Login the with the id = login;
    await loginBtn.click();

    // Could not login the E-commerce website; so starting a new test case
}

// TC_05 Working with Multiple Web Elements
test('Sec-4 Working with Multiple Elements', cbMultipleWebElements);

async function cbMultipleWebElements({ page }){

    // Visit the amazong web page url;
    await page.goto('https://www.amazon.in/ref=nav_logo');

    // Select the Electronics link element and click on it using getByRole() locator API method
    await page.getByRole('link', { name: 'Electronics' }).click();

    // Select the Gaming Laptops link element and click on it using id locator;
    await page.locator('#sobe_d_b_ms_7_1').click();

    // Select All the Laptops titles and print them using class locator;
    for(let nthIdx = 0; nthIdx < 12; nthIdx++){
        const laptopHeadingTxt = await page.locator('.a-section.a-spacing-small.puis-padding-left-small.puis-padding-right-small h2.a-size-base-plus.a-spacing-none.a-color-base.a-text-normal').nth(nthIdx).textContent();

        console.log(`This is ${nthIdx + 1}th Element: ${laptopHeadingTxt}`);
    }
    
    console.log('Got the laptop Titles successfully');
}   

// TC_06 Working with List of Elements;
test('sec-4 Working with Elements List', cbWorkingWithElementList);

async function cbWorkingWithElementList({ page }){
    // Visit the Amazon Home page or url
    await page.goto('https://www.amazon.in/ref=nav_logo');

    // Visit the Electronics Page with the link text = Electronics
    await page.getByRole('link', { name: 'Electronics' }).click();
    
    // Visit the Gaming Laptops Page with the id = sobe_d_b_ms_7_1
    await page.locator('#sobe_d_b_ms_7_1').click();
    
    // Select All the Laptops titles and print them using class locator;
    const allLaptopTitlesEls = await page.locator('.a-section.a-spacing-small.puis-padding-left-small.puis-padding-right-small h2.a-size-base-plus.a-spacing-none.a-color-base.a-text-normal');

    console.log(await allLaptopTitlesEls.nth(8).textContent());
    const laptopTitlesList = await allLaptopTitlesEls.allTextContents();

    console.log(laptopTitlesList);
    console.log('Test case 06 is successful');
}   

// TC_07 Working with Playwright's Wait Mechanisms;
test.only('sec-4 Playwright Wait Mechanism', cbPlaywrightWaitMechanism);

async function cbPlaywrightWaitMechanism({ page }){
    // Visit the Amazon Home page or url
    await page.goto('https://www.amazon.in/ref=nav_logo');

    // Visit the Electronics Page with the link text = Electronics
    await page.getByRole('link', { name: 'Electronics' }).click();
    
    // Visit the Gaming Laptops Page with the id = sobe_d_b_ms_7_1
    await page.locator('#sobe_d_b_ms_7_1').click();

    const allLaptopTitlesEls = await page.locator('.a-section.a-spacing-small.puis-padding-left-small.puis-padding-right-small h2.a-size-base-plus.a-spacing-none.a-color-base.a-text-normal');

    // Wait Meachnism Methods;
    // await page.waitForLoadState('networkidle'); // we're not hitting the network state;
    await page.waitForLoadState('load');

    // Or Wait For method but it works for only one element;
    // await allLaptopTitlesEls.waitFor();
    const laptopTitlesListArr = await allLaptopTitlesEls.allTextContents();

    console.log(laptopTitlesListArr);
    console.log('Test Case 07 is successful');
}