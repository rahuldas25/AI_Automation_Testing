import {test,expect, chromium} from '@playwright/test'


/*A Browser reprsents the browser process itself.
Eg: chrome, firefox, safari etc
*/


test("browser",async({page})=>{
    const browser=await chromium.launch({});
    //page=await browser.newPage();
    await page.goto("https://www.google.com");
    await expect(page).toHaveTitle(/Google/);
    //await browser.close();
    await expect(page).toHaveTitle(/Google/);

});