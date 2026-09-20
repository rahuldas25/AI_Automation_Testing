import {test,expect,chromium} from "@playwright/test";

/*
A page represent a single browser tab. 
It is created in a browser context. 
A single context can have multiple pages.
Every interaction happend through a page.
*/
test("Page Title",async({page})=>{
    const browser=await chromium.launch({headless:false});
    const context=await browser.newContext();
    const page1=await context.newPage();
    await page1.goto("https://www.google.com");
    await expect(page1).toHaveTitle(/Google/);
    await browser.close();
});