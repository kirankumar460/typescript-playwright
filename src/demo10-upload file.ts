import { chromium } from "playwright";

async function startTrail() {

    const browser = await chromium.launch({ headless: false, channel: "chrome" });
    const context = await browser.newContext();
    const page = await context.newPage();


    await page.goto("https://www.ilovepdf.com/word_to_pdf")

    await page.waitForTimeout(4000)

    page.locator("//input[@type='file']").setInputFiles("C:/Users/Administrator/Downloads/TestDocument.docx")

    await page.waitForTimeout(4000)

    // const [fileDialog] = await Promise.all([
    //     page.waitForEvent('filechooser'),
    //     page.locator("//input[@type='file']").click()
    // ])

    // await fileDialog.setFiles("C:/Users/Administrator/Downloads/TestDocument.docx")

    // await page.waitForTimeout(4000)

    browser.close()

}

startTrail()