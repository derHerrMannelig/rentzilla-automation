import Page from './page.js';

const footer: string = 'div.Footer_footer__Dhw_9';
const footerLogo: string = 'div.Footer_footer__Dhw_9 div[data-testid="logo"]';
const aboutUs: string = 'div[data-testid="content"]';
const privacy: string = 'div[data-testid="politika-konfidenciinosti"]';
const cookies: string = 'div[data-testid="pravila-vikoristannya-failiv-cookie"]';
const agreement: string = 'div[data-testid="umovi-dostupu-ta-koristuvannya"]';
const forCustomers: string = 'div.RentzilaForBuyers_title__k3tHn';
const advertisements: string = 'div[data-testid="ogoloshennya"]';
const tenders: string = 'div[data-testid="tenderi"] > a';
const contactsBlock: string = 'div.RentzilaContacts_container__aLXtD';
const contactsEmail: string = 'a.RentzilaContacts_email__jlzWc'
const copyright: string = 'div[data-testid="copyright"]';
const privacyTitle: string = 'main h1.PrivacyPolicy_title__FEiRV';
const cookiesTitle: string = 'main h1.Cookies_title__BVLFo';
const agreementTitle: string = 'main h1.TermsConditions_title__haW1D';
const mapInput: string = 'input[data-testid="searchInput"]';
const tenderInput: string = 'div.ItemSearch_search__Nu9XY > input';

class FooterPage extends Page {
  public get footer () {
    return super.get(footer);
  }
  public get footerLogo () {
    return super.get(footerLogo);
  }
  public get aboutUs () {
    return super.get(aboutUs);
  }
  public get privacy () {
    return super.get(privacy);
  }
  public get cookies () {
    return super.get(cookies);
  }
  public get agreement () {
    return super.get(agreement);
  }
  public get forCustomers () {
    return super.get(forCustomers);
  }
  public get advertisements () {
    return super.get(advertisements);
  }
  public get tenders () {
    return super.get(tenders);
  }
  public get contactsBlock () {
    return super.get(contactsBlock);
  }
  public get copyright () {
    return super.get(copyright);
  }
  public get contactsEmail () {
    return super.get(contactsEmail);
  }
  public get privacyTitle () {
    return super.get(privacyTitle);
  }
  public get cookiesTitle () {
    return super.get(cookiesTitle);
  }
  public get agreementTitle () {
    return super.get(agreementTitle);
  }
  public get mapInput () {
    return super.get(mapInput);
  }
  public get tenderInput () {
    return super.get(tenderInput);
  }

  public async clickPrivacy () {
    await this.privacy.click();
  }
  public async clickCookies () {
    await this.cookies.click();
  }
  public async clickAgreement () {
    await this.agreement.click();
  }
  public async clickAdvertisements () {
    await this.advertisements.click();
  }
  public async clickTenders () {
    await this.tenders.click();
  }
}

export default new FooterPage();
