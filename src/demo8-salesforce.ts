import { chromium } from "playwright";

async function startTrail() {

    //browser instance
    const browser = await chromium.launch({headless:false, channel: "chrome"})

    //browsercontext
    const context = await browser.newContext()

    //newtab
    const page = await context.newPage()

    await page.goto("https://www.salesforce.com/in/form/signup/sales-ee/")

    await page.locator("//input[@name='UserFirstName']").fill("John")

    await page.locator("//input[@name='UserLastName']").fill("Kim")

    await page.locator("//input[@name='UserTitle']").fill("Analyst")

    await page.locator("//a[normalize-space()='Next']").click()
    
    await page.locator("//select[@name='CompanyEmployees']").selectOption({index: 1})
    //select[@name="CompanyEmployees"]
    //input[@name='CompanyName']
    await page.locator("//input[@name='CompanyName']").fill("KBC Company")

    await page.locator("//a[normalize-space()='Next']").click()

    // await page.locator("//input[@name='UserPhone']").fill("9988776689")

    await page.locator("//input[@name='UserEmail']").fill("KBCCompanytest@gmail.com")

    await page.locator("//div[@class='msaCheckbox checkboxInput section']//div[@class='checkbox-ui']").click()
    
    await page.locator("//button[text()='Submit']").click()
    
    const errorMessage = await page.locator("//input[@name='UserPhone']/following::span[@class='error-msg'][1]").innerText()

    console.log("Error Message: "+ errorMessage)

    //input[@name='UserEmail']
    
}

startTrail()

