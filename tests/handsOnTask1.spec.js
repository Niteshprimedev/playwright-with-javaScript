// Task - To Automate the user registration process and login process. Then Get the First Product Title and if you want to challenge yourself then get all the products titles

// Trying with GFG;
// 1) Logout the user ->
// 2) Login the user ->
// 3) Hover Over the Practice Nav Link ->
// 4) Navigate to Problem of the Day Page ->
// 5) Get the POTD Title, Difficulty Level, and Status ->

// Solution by 9 PM IST Today;

const { test } = require('@playwright/test');

// Automate getting the GFG POTD Status
test('Automate GFG POTD Status', cbAutomateGFGPOTDStatus);

async function cbAutomateGFGPOTDStatus({ page }){
    // visit the gfg home url or website;
    await page.goto('https://www.geeksforgeeks.org/'); // Visit the GFG Home Page URL;

    // Logout the user;
    // Select the profile icon using the class selector and click on it;
    // await page.locator('.profileImg').click();

    // Select the logout button using the class selector and click on it;
    // await page.getByRole('link', { name: 'Logout' }).click();

    // Login the user;
    // Select the login button using the button selector and click on it;
    await page.getByRole('button', { name: 'Sign In' }).first().click();

    // Select the email input field using the class selector and fill the email;
    await page.locator('.mb15.next_input').fill('yourmai@mail.com');

    // Select the password input field using the class selector and fill the password;
    await page.locator('.next_input').nth(1).fill('yourpwd');

    // Select the sigin button using the button selector and click on it;
    await page.getByRole('button', { name: 'Sign In' }).first().click();

    // User logged in Successfully;
    console.log('User Logged In Successfully');

    // Select the Remind me Later button using the button selector and click on it;
    await page.getByRole('button', { name: 'Remind Me Later ' }).click();

    // Hover over the Practice Navigation link using the class selector;
    await page.locator('.headerMainListItem').nth(3).hover();

    // Select the POTD navigation link and click on it;
    await page.locator('.megaDropDown.class-0 li a.inner_child').nth(1).click();

    // Load the POTD Page completely first;
    await page.waitForLoadState('load');

    // Get the title;
    const potdTitle = await page.locator('.problemOfTheDay_problemContainerTxt__pPZ3Z').first().textContent();

    // // Get the Difficulty Level;
    const potdLevel = await page.locator('.problemOfTheDay_problemDifficulty__RbgUa').first().textContent();

    // // Get the status;
    const potdStatus = await page.locator('#potd_solve_prob').textContent();

    console.log(`POTD Details: Title: ${potdTitle}, Difficulty Level: ${potdLevel}, and Status: ${potdStatus}`);

    console.log('GFG Test Case 01 is successful');
}