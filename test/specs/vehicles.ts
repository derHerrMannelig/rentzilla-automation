import mainPage from '../pageobjects/main.page.js'
import testData from '../fixtures/data.json' assert { type: 'json' };
import assert from 'node:assert';

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
      for (let n: number = 0; n < await mainPage.vehiclesItems.length; n++) {
        await mainPage.clickTelegramClose();
        await mainPage.clickVehiclesTab(i);
        assert.strictEqual(await mainPage.vehiclesItemsNames[n].getText(), testData.vehicles1[(i * 7) + n]);
        await mainPage.clickVehiclesItem(n);
        await browser.pause(1000)
        await expect(browser).toHaveUrl(expect.stringContaining(`${process.env.ENV}products/`));
        assert.strictEqual(await mainPage.selectedItem.getText(), testData.vehicles2[(i * 7) + n]);
        if (await mainPage.searchResult.getText() !== 'Знайдено 0 оголошень на видимій території') {
          await expect(await mainPage.catalogUnits).toBeDisplayed();
          await mainPage.clickFirstCatalogUnit();
          await expect(browser).toHaveUrl(expect.stringContaining(`unit`));
        }
        await mainPage.clickNavLogo();
        await expect(browser).toHaveUrl(`${process.env.ENV}`);
        await browser.pause(1000)
      }
    }
  })
})
