import mainPage from '../pageobjects/main.page.js'

describe('"Services" section', () => {
  before(async () =>{
    await browser.setWindowSize(1920, 1080)
    await mainPage.openBaseUrl()
    await browser.pause(2000)
  })
  it('should check out "Services" section on the main page', async () => {
    for (let i: number = 0; i < await mainPage.servicesTabs.length; i++) {
      (await mainPage.servicesSection).scrollIntoView()
      await expect(await mainPage.servicesSection).toBeDisplayed()
      await expect(await mainPage.servicesTabs[i]).toBeDisplayed()
      await expect(await mainPage.servicesItems).toBeDisplayed()
      for (let n: number = 0; n < await mainPage.servicesItems.length; n++) {
        let item: string = await mainPage.servicesItemsNames[n].getText();
        await mainPage.clickTelegramClose();
        await mainPage.clickServicesTab(i);
        await mainPage.clickServicesItem(n);
        await browser.pause(1000)
        await expect(browser).toHaveUrl(`${process.env.ENV}products/`);
        await expect(await mainPage.selectedItem).toHaveText(item);
        if (await mainPage.searchResult.getText() !== 'Знайдено 0 оголошень на видимій території') {
          await expect(await mainPage.catalogUnits).toBeDisplayed();
          await mainPage.clickFirstCatalogUnit();
          await expect(browser).toHaveUrl(expect.stringContaining(`unit`));
          await expect(await mainPage.serviceTag(item)).toBeExisting();
        }
        await mainPage.clickNavLogo();
        await expect(browser).toHaveUrl(`${process.env.ENV}`);
        await browser.pause(1000)
      }
    }
  })
})
