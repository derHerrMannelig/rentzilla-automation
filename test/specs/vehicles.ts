import mainPage from '../pageobjects/main.page.js'

describe('"Vehicles" section', () => {
  before(async () =>{
    await browser.setWindowSize(1920, 1080)
    await mainPage.openBaseUrl()
    await browser.pause(2000)
  })
  it('should check out "Vehicles" section on the main page', async () => {
    for (let i: number = 0; i < await mainPage.vehiclesTabs.length; i++) {
      (await mainPage.vehiclesSection).scrollIntoView()
      await expect(await mainPage.vehiclesSection).toBeDisplayed()
      await expect(await mainPage.vehiclesTabs[i]).toBeDisplayed()
      await expect(await mainPage.vehiclesItems).toBeDisplayed()
      await mainPage.clickVehiclesTab(i);
      for (let n: number = 0; n < await mainPage.vehiclesItems.length; n++) {
        await mainPage.clickTelegramClose();
        await mainPage.clickVehiclesItem(n);
        await browser.pause(1000)
        await expect(browser).toHaveUrl(expect.stringContaining(`${process.env.ENV}products/`));
        await expect(await mainPage.catalogUnits).toBeDisplayed();
        await mainPage.clickFirstCatalogUnit();
        await expect(browser).toHaveUrl(expect.stringContaining(`unit`));
        await mainPage.clickNavLogo();
        await expect(browser).toHaveUrl(`${process.env.ENV}`);
        await browser.pause(1000)
      }
    }
  })
})
