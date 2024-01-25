import mainPage from '../pageobjects/main.page.js'
import testData from '../fixtures/data.json' assert { type: 'json' };
import { faker } from '@faker-js/faker';

const randomSymbol = faker.string.symbol();

describe('Search input', () => {
  before(async () =>{
    await browser.setWindowSize(1920, 1080)
    await mainPage.openBaseUrl()
    await browser.pause(2000)
  })
  it('should verify search feature', async () => {
    await mainPage.clickSearchInput();
    await expect(await mainPage.searchHistory).toBeDisplayed();
    await expect(await mainPage.searchServicesCategories).toBeDisplayed();
    await browser.keys('\uE007');
    await expect(browser).toHaveUrl(`${process.env.ENV}products/`);
    await expect(await mainPage.searchInput).toHaveValue('');
    await expect(await mainPage.catalogUnits).toBeDisplayed();
    await mainPage.clickNavLogo();
    await mainPage.clickSearchInput();
    await mainPage.searchInput.setValue(`${testData.searchInput1}`);
    await browser.keys('\uE007');
    await expect(browser).toHaveUrl(`${process.env.ENV}products/`);
    await expect(await mainPage.searchMap).toBeDisplayed();
    await expect(await mainPage.searchResult).toBeDisplayed();
    await expect(await mainPage.searchResult).toHaveText(expect.stringContaining(`${testData.searchInput1}`));
    await mainPage.clickFirstCatalogUnit();
    await expect(browser).toHaveUrl(expect.stringContaining(`unit`));
    await mainPage.clickNavLogo();
    await mainPage.clickSearchInput();
    await expect(await mainPage.searchHistory).toBeDisplayed();
    await expect(await mainPage.searchServicesCategories).toBeDisplayed();
    await expect(await mainPage.searchHistoryFirst).toHaveText(`${testData.searchInput1}`);
    await mainPage.searchInput.setValue(`${testData.searchInput2}`);
    await browser.keys('\uE007');
    await expect(browser).toHaveUrl(`${process.env.ENV}products/`);
    await expect(await mainPage.searchMap).toBeDisplayed();
    await expect(await mainPage.searchResult).toBeDisplayed();
    await expect(await mainPage.searchResult).toHaveText(expect.stringContaining(`${testData.searchInput2}`));
    await mainPage.clickFirstCatalogUnit();
    await expect(browser).toHaveUrl(expect.stringContaining(`unit`));
    await mainPage.clickNavLogo();
    await mainPage.clickSearchInput();
    await expect(await mainPage.searchHistory).toBeDisplayed();
    await expect(await mainPage.searchServicesCategories).toBeDisplayed();
    await expect(await mainPage.searchHistoryFirst).toHaveText(`${testData.searchInput2}`);
    await mainPage.searchInput.setValue(`${testData.searchInput3}`);
    await mainPage.clickFirstSearchUnit();
    await expect(browser).toHaveUrl(expect.stringContaining(`unit`));
    await expect(await mainPage.unitTitle).toHaveText(expect.stringContaining(`${testData.searchInput3}`));
    await mainPage.clickNavLogo();
    // for some reason, steps where search units are checked need small pause to ensure stability
    await browser.pause(1000);
    await mainPage.clickSearchInput();
    await mainPage.searchInput.setValue(`${testData.searchInput4}`);
    await expect(await mainPage.searchUnits).not.toBeExisting();
    await browser.keys('\uE007');
    await expect(browser).toHaveUrl(`${process.env.ENV}products/`);
    await expect(await mainPage.searchResult).toHaveText(`Знайдено 0 оголошень на видимій території за запитом " "`);
    await mainPage.clickNavLogo();
    await browser.pause(1000);
    await mainPage.clickSearchInput();
    await mainPage.searchInput.setValue(`${testData.searchInput5}`);
    await expect(await mainPage.searchUnits).toBeExisting();
    await browser.keys('\uE007');
    await expect(browser).toHaveUrl(`${process.env.ENV}products/`);
    await expect(await mainPage.searchResult).toBeDisplayed();
    await expect(await mainPage.searchResult).toHaveText(expect.stringContaining(`${testData.searchInput5}`));
    await mainPage.clickFirstCatalogUnit();
    await expect(browser).toHaveUrl(expect.stringContaining(`unit`));
    await mainPage.clickNavLogo();
    await browser.pause(1000);
    await mainPage.clickSearchInput();
    await mainPage.searchInput.setValue(`${randomSymbol}`);
    if (await mainPage.searchUnits[0].isExisting()) {
      await expect(await mainPage.searchUnits).toBeDisplayed();
    } else {
      await expect(await mainPage.searchUnits).not.toBeDisplayed();
    }
    await browser.keys('\uE007');
    await expect(browser).toHaveUrl(`${process.env.ENV}products/`);
    if (!['<', '>', '^', ';', '{', '}','`'].includes(randomSymbol)) {
      await expect(await mainPage.searchInput).toHaveValue(`${randomSymbol}`);
      await expect(await mainPage.searchResult).toHaveText(expect.stringContaining(`${randomSymbol}`));
    } else {
      await expect(await mainPage.searchInput).toHaveValue('');
      await expect(await mainPage.catalogUnits).toBeDisplayed();
    }
    await mainPage.clickNavLogo();
    await browser.pause(1000);
    await mainPage.clickSearchInput();
    await mainPage.searchInput.setValue(`${testData.searchInput6}`);
    await expect(await mainPage.searchUnits).not.toBeExisting();
    await browser.keys('\uE007');
    await expect(browser).toHaveUrl(`${process.env.ENV}products/`);
    await expect(await mainPage.searchResult).toHaveText(`Знайдено 0 оголошень на видимій території за запитом "${testData.searchInput6}"`);
    await mainPage.clickNavLogo();
    await browser.pause(1000);
    await mainPage.clickSearchInput();
    await mainPage.searchInput.setValue(`${testData.searchInput7}`);
    await expect(await mainPage.searchUnits).toBeExisting();
    await expect(await mainPage.searchCertainService(`${testData.searchInput7}`)).toBeExisting();
    await (await mainPage.searchCertainService(`${testData.searchInput7}`)).click();
    await expect(browser).toHaveUrl(`${process.env.ENV}products/`);
    await expect(await mainPage.selectedItem).toHaveText(`${testData.searchInput7}`);
    await expect(await mainPage.searchResult).toBeDisplayed();
    await expect(await mainPage.searchResult).toHaveText(expect.stringContaining(`Знайдено`));
    await mainPage.clickNavLogo();
    await browser.pause(1000);
    await mainPage.clickSearchInput();
    await mainPage.searchInput.setValue(`${testData.searchInput8}`);
    await expect(await mainPage.searchUnits).toBeExisting();
    await expect(await mainPage.searchCertainCategory(`${testData.searchInput8.toLowerCase()}`)).toBeExisting();
    await (await mainPage.searchCertainCategory(`${testData.searchInput8.toLowerCase()}`)).click();
    await expect(browser).toHaveUrl(expect.stringContaining(`${process.env.ENV}products/`));
    await expect(await mainPage.selectedItem).toHaveText(expect.stringContaining(`${testData.searchInput8.toLowerCase()}`));
    await expect(await mainPage.searchResult).toBeDisplayed();
    await expect(await mainPage.searchResult).toHaveText(expect.stringContaining(`Знайдено`));
    await mainPage.clickNavLogo();
    await mainPage.clickSearchInput();
    await mainPage.searchInput.setValue(`${testData.searchInput3}`);
    await expect(await mainPage.searchHistory).toBeDisplayed();
    await expect(await mainPage.searchServicesCategories).toBeDisplayed();
    await expect(await mainPage.searchUnits).toBeDisplayed();
    await mainPage.clickSearchClear();
    await expect(await mainPage.searchInput).toHaveValue('');
    await expect(await mainPage.searchHistory).not.toBeDisplayed();
    await expect(await mainPage.searchServicesCategories).not.toBeDisplayed();
    // that step wasn't described fully in list
    // implemented first part of it as a bonus to ensure if history feature works properly
    await browser.refresh();
    await browser.pause(1000);
    await mainPage.clickSearchInput();
    await expect(await mainPage.searchHistoryFirst).toHaveText(`${testData.searchInput3}`);
  })
})
