import { chromium } from "playwright";

async function startTrail() {

    const browser = await chromium.launch({ headless: false, channel: "chrome" });
    const context = await browser.newContext();
    const page = await context.newPage();


    await page.goto("https://opensource-demo.orangehrmlive.com/")

    // click on twitter
    await page.waitForTimeout(5000)

    const [twitterPage,]= await Promise.all([
        context.waitForEvent('page'),
        page.locator("//a[contains(@href,'twitter')]").click()
    ])

    await page.waitForTimeout(3000)

    console.log("Page url of the new page: " + twitterPage.url())

    browser.close()

}

startTrail()