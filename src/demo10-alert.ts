import { chromium } from "playwright";

async function startTrail() {

    const browser = await chromium.launch({ headless: false, channel: "chrome" });
    const context = await browser.newContext();
    const page = await context.newPage();


    await page.goto("https://www.nasscom.in/nasscom-membership")

    await page.on("dialog",async dialog => {
        console.log(dialog.message())
        dialog.accept()
    })

    await page.locator("//a[@id='calculate-fee']").click()

    browser.close()

}

startTrail()