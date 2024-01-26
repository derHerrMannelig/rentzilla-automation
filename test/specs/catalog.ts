import mainPage from '../pageobjects/main.page.js'
import testData from '../fixtures/data.json' assert { type: 'json' };

describe('Catalog feature', () => {
  before(async () =>{
    await browser.setWindowSize(1920, 1080)
    await mainPage.openBaseUrl()
    await browser.pause(2000)
    await expect(await mainPage.navLogo).toBeDisplayed();
  })
  it('should verify catalog feature', async () => {
    // i know, it can be done with "for" loop inside "for" loop, but there are different assertions in different sections according to case list
    // also, not sure about getting dynamic length of catalog items arrays for loops due to website structure
    let index: number;
    let filter: string;
    for (let i: number = 0; i < 4; i++) {
      await expect(await mainPage.catalogButton).toBeDisplayed();
      await mainPage.clickCatalogButton();
      await expect(await mainPage.catalogContainer).toBeDisplayed();
      await expect(await mainPage.catalog1lvl).toBeDisplayed();
      await mainPage.catalog1lvl[0].moveTo();
      await expect(await mainPage.catalog2lvl).toBeDisplayed();
      filter = await mainPage.catalog2lvl[i].getText();
      await mainPage.catalog2lvl[i].click();
      await browser.pause(1000)
      await expect(browser).toHaveUrl(`${process.env.ENV}products/${testData.catalog2lvl[i]}/`);
      await expect(await mainPage.selectedItem).toHaveText(filter);
      await mainPage.clickNavLogo();
      await browser.pause(1000)
    }
    for (let i: number = 0; i < 11; i++) {
      await mainPage.clickCatalogButton();
      await mainPage.catalog1lvl[0].moveTo();
      await mainPage.catalog2lvl[0].moveTo();
      await expect(await mainPage.catalog3lvl[i]).toHaveText(testData.budivelna1[i]);
      await mainPage.catalog3lvl[i].click();
      await browser.pause(1000)
      await expect(browser).toHaveUrl(`${process.env.ENV}products/${testData.budivelna2[i]}/`);
      await mainPage.clickNavLogo();
      await browser.pause(1000)
    }
    for (let i: number = 0; i < 6; i++) {
      await mainPage.clickCatalogButton();
      await expect(await mainPage.catalogContainer).toBeDisplayed();
      await expect(await mainPage.catalog1lvl).toBeDisplayed();
      await mainPage.catalog1lvl[0].moveTo();
      await expect(await mainPage.catalog2lvl).toBeDisplayed();
      await mainPage.catalog2lvl[1].moveTo();
      await expect(await mainPage.catalog3lvl[i]).toHaveText(testData.komunalna1[i]);
      await mainPage.catalog3lvl[i].click();
      await browser.pause(1000)
      await expect(browser).toHaveUrl(`${process.env.ENV}products/${testData.komunalna2[i]}/`);
      await mainPage.clickNavLogo();
      await browser.pause(1000)
    }
    for (let i: number = 0; i < 17; i++) {
      await mainPage.clickCatalogButton();
      await expect(await mainPage.catalogContainer).toBeDisplayed();
      await expect(await mainPage.catalog1lvl).toBeDisplayed();
      await mainPage.catalog1lvl[0].moveTo();
      await expect(await mainPage.catalog2lvl).toBeDisplayed();
      await mainPage.catalog2lvl[2].moveTo();
      await expect(await mainPage.catalog3lvl[i]).toHaveText(testData.selo1[i]);
      await mainPage.catalog3lvl[i].click();
      await browser.pause(1000)
      await expect(browser).toHaveUrl(`${process.env.ENV}products/${testData.selo2[i]}/`);
      await mainPage.clickNavLogo();
      await browser.pause(1000)
    }
    for (let i: number = 0; i < 2; i++) {
      await mainPage.clickCatalogButton();
      await expect(await mainPage.catalogContainer).toBeDisplayed();
      await expect(await mainPage.catalog1lvl).toBeDisplayed();
      await mainPage.catalog1lvl[0].moveTo();
      await expect(await mainPage.catalog2lvl).toBeDisplayed();
      await mainPage.catalog2lvl[3].moveTo();
      await expect(await mainPage.catalog3lvl[i]).toHaveText(testData.sklad1[i]);
      await mainPage.catalog3lvl[i].click();
      await browser.pause(1000)
      await expect(browser).toHaveUrl(`${process.env.ENV}products/${testData.sklad2[i]}/`);
      await mainPage.clickNavLogo();
      await browser.pause(1000)
    }
    await mainPage.clickCatalogButton();
    await expect(await mainPage.catalogContainer).toBeDisplayed();
    await mainPage.catalog1lvl[1].moveTo();
    await expect(await mainPage.catalog2lvl).toBeDisplayed();
    for (let i: number = 0; i < 3; i++) {
      await mainPage.catalog2lvl[i].moveTo();
      await expect(await mainPage.catalog3lvl).toBeDisplayed();
    }
    index = Math.floor(Math.random() * (await mainPage.catalog3lvl).length);
    filter = await mainPage.catalog3lvl[index].getText();
    await mainPage.catalog3lvl[index].click();
    await browser.pause(1000)
    await expect(browser).toHaveUrl(`${process.env.ENV}products/`);
    await expect(await mainPage.selectedItem).toHaveText(filter);
    await mainPage.clickNavLogo();
    await browser.pause(1000)
    await mainPage.clickCatalogButton();
    await expect(await mainPage.catalogContainer).toBeDisplayed();
    await mainPage.catalog1lvl[1].moveTo();
    await expect(await mainPage.catalog2lvl).toBeDisplayed();
    await mainPage.catalog2lvl[0].moveTo();
    await expect(await mainPage.catalog3lvl).toBeDisplayed();
    filter = await mainPage.catalog3lvl[3].getText();
    await mainPage.catalog3lvl[3].click();
    await browser.pause(1000)
    await expect(browser).toHaveUrl(`${process.env.ENV}products/`);
    await expect(await mainPage.selectedItem).toHaveText(filter);
    await mainPage.clickNavLogo();
    await browser.pause(1000)
    await mainPage.clickCatalogButton();
    await expect(await mainPage.catalogContainer).toBeDisplayed();
    await mainPage.catalog1lvl[1].moveTo();
    await expect(await mainPage.catalog2lvl).toBeDisplayed();
    await mainPage.catalog2lvl[2].moveTo();
    await expect(await mainPage.catalog3lvl).toBeDisplayed();
    filter = await mainPage.catalog3lvl[2].getText();
    await mainPage.catalog3lvl[2].click();
    await browser.pause(1000)
    await expect(browser).toHaveUrl(`${process.env.ENV}products/`);
    await expect(await mainPage.selectedItem).toHaveText(filter);
    await mainPage.clickNavLogo();
    await browser.pause(1000)
    await mainPage.clickCatalogButton();
    await expect(await mainPage.catalogContainer).toBeDisplayed();
    await mainPage.catalog1lvl[1].moveTo();
    await expect(await mainPage.catalog2lvl).toBeDisplayed();
    await mainPage.catalog2lvl[1].moveTo();
    await expect(await mainPage.catalog3lvl).toBeDisplayed();
    filter = await mainPage.catalog3lvl[4].getText();
    await mainPage.catalog3lvl[4].click();
    await browser.pause(1000)
    await expect(browser).toHaveUrl(`${process.env.ENV}products/`);
    await expect(await mainPage.selectedItem).toHaveText(filter);
  })
})
