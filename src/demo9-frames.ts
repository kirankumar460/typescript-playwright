import { chromium } from "playwright";

async function startTrail() {

    const browser = await chromium.launch({ headless: false, channel: "chrome" });
    const context = await browser.newContext();
    const page = await context.newPage();


    await page.goto("https://x.com/orangehrm?lang=en")

    // click on twitter
    await page.waitForTimeout(3000)

    const [newPage,]= await Promise.all([
        context.waitForEvent('page'),
        page.frameLocator("//iframe").locator("//span[normalize-space()='Sign up with Google']").click()
    ])

    await newPage.waitForLoadState()

    console.log("Page url of the new page: " + await newPage.title())

    browser.close()

}

startTrail()