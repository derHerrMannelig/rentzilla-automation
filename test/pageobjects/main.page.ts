import Page from './page.js';

const servicesSection: string = 'section[data-testid="services"]';
const servicesTabs: string = 'div.RentzilaProposes_categories_list__cxa6m > div.RentzilaProposes_service__oHepD';
const servicesItems: string = 'section[data-testid="services"] > div.RentzilaProposes_proposes_list__X8dRW > div.RentzilaProposes_proposes_item__sY_h2';
const servicesItemsNames: string = 'section[data-testid="services"] > div.RentzilaProposes_proposes_list__X8dRW > div.RentzilaProposes_proposes_item__sY_h2 > div.RentzilaProposes_name__DTnwr';
const catalogUnits: string = 'div[data-testid="cardWrapper"]';
const navLogo: string = 'a > div[data-testid="logo"]';
const selectedItem: string = 'div.ResetFilters_selectedCategory___D1E6 > p';
const telegramClose: string = 'div[data-testid="crossButton"]';

class MainPage extends Page {
  public get servicesSection () {
    return $(servicesSection);
  }
  public get servicesTabs () {
    return $$(servicesTabs);
  }
  public get servicesItems () {
    return $$(servicesItems);
  }
  public get servicesItemsNames() {
    return $$(servicesItemsNames);
  }
  public get catalogUnits () {
    return $$(catalogUnits);
  }
  public get navLogo () {
    return $(navLogo);
  }
  public get selectedItem () {
    return $(selectedItem);
  }
  public get telegramClose () {
    return $(telegramClose)
  }

  public async serviceTag (item: string) {
    return $(`//div[@itemprop="services"]//div[contains(text(),'${item}')]`)
  }
  public async clickServicesTab(i: number) {
    await this.servicesTabs[i].click();
  }
  public async clickServicesItem(i: number) {
    await this.servicesItems[i].click();
  }
  public async clickFirstCatalogUnit () {
    await this.catalogUnits[0].click();
  }
  public async clickNavLogo () {
    await this.navLogo.click();
  }
  public async clickTelegramClose () {
    if (await this.telegramClose.isDisplayed()) {
      await this.telegramClose.click()
    }
  }

  public openBaseUrl () {
    return super.open('');
  }
}

export default new MainPage();
