import { chromium } from "playwright"

async function browserOperation() {
    //browser instance
    const browser = await chromium.launch({headless:false, channel: "chrome"})

    //browsercontext
    const context = await browser.newContext()

    //newtab
    const page = await context.newPage()

    await page.goto("https://x.com/")

    await page.locator("xpath=//span[text()='Create account']").click()

    //will resume at 2:10 PM IST

    await page.waitForTimeout(5000)
    browser.close()
}

browserOperation()