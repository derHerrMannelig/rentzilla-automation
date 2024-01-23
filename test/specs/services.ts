import mainPage from '../pageobjects/main.page.js'

describe('"Services" section', () => {
  before(async () =>{
    await browser.setWindowSize(1366, 768)
    await mainPage.openBaseUrl()
  })
  it('should check out "Services" section on the main page', async () => {
    for (let i: number = 0; i < await mainPage.servicesTabs.length; i++) {
      (await mainPage.servicesSection).scrollIntoView()
      await expect(await mainPage.servicesSection).toBeDisplayed()
      await expect(await mainPage.servicesTabs[i]).toBeDisplayed()
      await expect(await mainPage.servicesItems).toBeDisplayed()
      await mainPage.clickServicesTab(i);
      for (let n: number = 0; n < await mainPage.servicesItems.length; n++) {
        // let item: string = await mainPage.servicesItemsNames[n].getText();
        await mainPage.clickServicesItem(n);
        await browser.pause(2000)
        await expect(browser).toHaveUrl(`https://stage.rentzila.com.ua/products/`);
        await mainPage.clickFirstCatalogUnit();
        await mainPage.clickNavLogo();
        await browser.pause(2000)
      }
    }
  })
})
