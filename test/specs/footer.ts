import mainPage from '../pageobjects/main.page.js'
import footerPage from '../pageobjects/footer.page.js'

describe('Footer elements', () => {
  before(async () =>{
    await browser.setWindowSize(1920, 1080)
    await mainPage.openBaseUrl()
    await browser.pause(2000)
  })
  it('should verify footer elements', async () => {
    (await footerPage.footer).scrollIntoView();
    await expect(await footerPage.footer).toBeDisplayed();
    await expect(await footerPage.footerLogo).not.toBeClickable();
    await expect(await footerPage.aboutUs).toBeDisplayed();
    await expect(await footerPage.privacy).toBeDisplayed();
    await expect(await footerPage.cookies).toBeDisplayed();
    await expect(await footerPage.agreement).toBeDisplayed();
    await expect(await footerPage.forCustomers).toBeDisplayed();
    await expect(await footerPage.advertisements).toBeDisplayed();
    await expect(await footerPage.tenders).toBeDisplayed();
    await expect(await footerPage.contactsBlock).toBeDisplayed();
    await expect(await footerPage.footerLogo).toBeDisplayed();
    await expect(await footerPage.copyright).toBeDisplayed();
    await footerPage.clickPrivacy();
    await expect(browser).toHaveUrl(expect.stringContaining(`/privacy-policy/`));
    await expect(await footerPage.privacyTitle).toBeDisplayed();
    (await footerPage.footer).scrollIntoView();
    await footerPage.clickCookies();
    await expect(browser).toHaveUrl(expect.stringContaining(`/cookie-policy/`));
    await expect(await footerPage.cookiesTitle).toBeDisplayed();
    (await footerPage.footer).scrollIntoView();
    await footerPage.clickAgreement();
    await expect(browser).toHaveUrl(expect.stringContaining(`/terms-conditions/`));
    await expect(await footerPage.agreementTitle).toBeDisplayed();
    (await footerPage.footer).scrollIntoView();
    await footerPage.clickAdvertisements();
    await expect(browser).toHaveUrl(expect.stringContaining(`/products/`));
    await expect(await footerPage.mapInput).toBeDisplayed();
    await expect(await footerPage.mapInput).toHaveAttribute('placeholder', 'Пошук оголошень або послуг');
    await mainPage.clickNavLogo();
    await expect(browser).toHaveUrl(`${process.env.ENV}`);
    await expect(await mainPage.mainTitle).toBeDisplayed();
    (await footerPage.footer).scrollIntoView();
    await footerPage.clickTenders();
    await expect(browser).toHaveUrl(expect.stringContaining(`/tenders-map/`));
    await expect(await footerPage.tenderInput).toBeDisplayed();
    await expect(await footerPage.tenderInput).toHaveAttribute('placeholder', 'Пошук тендера за ключовими словами');
    await mainPage.clickNavLogo();
    await expect(browser).toHaveUrl(`${process.env.ENV}`);
    await expect(await footerPage.contactsEmail).toHaveAttribute('href', 'mailto:info@rentzila.com.ua');
  })
})
