import {test,expect,chromium} from '@playwright/test';

/*
A Browser Context is an isolated incognito-like session within a Browser.
A single Browser instance can have multiple Browser Contexts.
Every Context has its own cache, cookies, Local Storage, Session storage, permissions.

*/
test("Browser Context",async({})=>{
    const browser=await chromium.launch({headless:false});
    const context1=await browser.newContext();
    const context2=await browser.newContext();

    const page1=await context1.newPage();
    const page2=await context2.newPage();

    await page1.goto("https://www.google.com");
    await page2.goto("https://www.youtube.com");

    await expect(page1).toHaveTitle(/Google/);
    await expect(page2).toHaveTitle(/YouTube/);

    await context1.close();
    await context2.close();
    await browser.close();
    // await page.goto("https://www.google.com");
    // await expect(page).toHaveTitle(/Google/);
});