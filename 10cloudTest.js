const {By,Key,Builder, until} = require("selenium-webdriver");
    require("chromedriver");
    assert = require('assert');
    webdriver = require('selenium-webdriver');

async function vacancySearch(){
    driver = new Builder().forBrowser("chrome").build(),
    await driver.manage().window().maximize();
  //1.Open 10C home page
    await driver.get("https://www.10clouds.com");
  //2.Open Careers tab
    await driver.findElement(By.xpath("*//a[@class='Link__NavLink-sc-1ryxvh0-1 dcucUM link'][@href='/careers/']")).click();
  //3.Type 'Automation' in Search jobs input
    await driver.wait(until.elementLocated(By.xpath('*//p[@class="hero-copy"]')), 8000);
    await driver.executeScript("arguments[0].scrollIntoView()",driver.findElement(By.xpath("*//p[@class='job-offers__header-description']")));
    await driver.findElement(By.xpath('*//input[@type="text"]')).sendKeys("QA Automation Engineer", Key.RETURN);
  //4.Check available vacancies
    await driver.findElements(By.xpath("//*[contains(text(),'QA Automation')]")).then(elements => console.log("Available positions for QA Automation Engineer: ", elements.length));
    await driver.quit();
};
vacancySearch()
