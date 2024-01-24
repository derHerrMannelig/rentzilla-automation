import Page from './page.js';

const servicesSection: string = 'section[data-testid="services"]';
const servicesTabs: string = 'div.RentzilaProposes_categories_list__cxa6m > div.RentzilaProposes_service__oHepD';
const servicesItems: string = 'section[data-testid="services"] > div.RentzilaProposes_proposes_list__X8dRW > div.RentzilaProposes_proposes_item__sY_h2';
const servicesItemsNames: string = 'section[data-testid="services"] > div.RentzilaProposes_proposes_list__X8dRW > div.RentzilaProposes_proposes_item__sY_h2 > div.RentzilaProposes_name__DTnwr';
const catalogUnits: string = 'div[data-testid="cardWrapper"]';
const navLogo: string = 'a > div[data-testid="logo"]';
const selectedItem: string = 'div.ResetFilters_selectedCategory___D1E6 > p';
const telegramClose: string = 'div[data-testid="crossButton"]';
const vehiclesSection: string = 'section[data-testid="specialEquipment"]';
const vehiclesTabs: string = 'div.RentzilaProposes_categories_list__cxa6m > h3.RentzilaProposes_service__oHepD';
const vehiclesItems: string = 'section[data-testid="specialEquipment"] > div.RentzilaProposes_proposes_list__X8dRW > div.RentzilaProposes_proposes_item__sY_h2';

class MainPage extends Page {
  public get servicesSection () {
    return super.get(servicesSection);
  }
  public get servicesTabs () {
    return super.getAll(servicesTabs);
  }
  public get servicesItems () {
    return super.getAll(servicesItems);
  }
  public get servicesItemsNames() {
    return super.getAll(servicesItemsNames);
  }
  public get catalogUnits () {
    return super.getAll(catalogUnits);
  }
  public get navLogo () {
    return super.get(navLogo);
  }
  public get selectedItem () {
    return super.get(selectedItem);
  }
  public get telegramClose () {
    return super.get(telegramClose)
  }
  public get vehiclesSection () {
    return super.get(vehiclesSection);
  }
  public get vehiclesTabs () {
    return super.getAll(vehiclesTabs);
  }
  public get vehiclesItems () {
    return super.getAll(vehiclesItems);
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
  public async clickVehiclesTab(i: number) {
    await this.vehiclesTabs[i].click();
  }
  public async clickVehiclesItem(i: number) {
    await this.vehiclesItems[i].click();
  }

  public openBaseUrl () {
    return super.open('');
  }
}

export default new MainPage();
