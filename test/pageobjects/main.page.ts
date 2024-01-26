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
const vehiclesItemsNames: string = 'section[data-testid="specialEquipment"] > div.RentzilaProposes_proposes_list__X8dRW > div.RentzilaProposes_proposes_item__sY_h2 > div.RentzilaProposes_name__DTnwr';
const mainTitle: string = 'h1.HeroSection_title__QIzpM';
const searchInput: string = 'div.Navbar_containerBottom__Kbaqk input[data-testid="searchInput"]';
const searchHistory: string = 'div[data-testid="rightsideUnits"]';
const searchHistoryFirst: string = 'div:first-of-type > div.SearchResultItem_item_name__SXnXJ:first-of-type';
const searchServicesCategories: string = 'div.LeftsideSearch_container__XgEkO'
const searchResult: string = 'h1.MapPagination_count__c_dzg';
const searchMap: string = 'div.MapPage_homeMap__06sWe';
const searchUnits: string = 'div[data-testid="cardContainer"]';
const searchClear: string = 'div.Navbar_containerBottom__Kbaqk div[data-testid="searchClear"]';
const unitTitle: string = 'h1.UnitName_name__oM_YV';
const catalogButton: string = 'div.Navbar_wrapperBottom__kiGE5 > div:first-of-type';
const catalogContainer: string = 'div.Catalog_container__0jVbE';
const catalog1lvl: string = 'div.Catalog_parent__k_4MP';
const catalog2lvl: string = 'div.Catalog_list__sVdCj:not(.Catalog_listSecond__awZH7) > div.CatalogItem_item__xvBwY';
const catalog3lvl: string = 'div.Catalog_listSecond__awZH7 > div.CatalogItem_item__xvBwY';

class MainPage extends Page {
  public get catalogButton () {
    return super.get(catalogButton);
  }
  public get catalogContainer () {
    return super.get(catalogContainer);
  }
  public get catalog1lvl () {
    return super.getAll(catalog1lvl);
  }
  public get catalog2lvl () {
    return super.getAll(catalog2lvl);
  }
  public get catalog3lvl () {
    return super.getAll(catalog3lvl);
  }
  public get unitTitle () {
    return super.get(unitTitle);
  }
  public get searchClear () {
    return super.get(searchClear);
  }
  public get searchInput () {
    return super.get(searchInput);
  }
  public get searchHistory () {
    return super.get(searchHistory);
  }
  public get searchHistoryFirst () {
    return super.get(searchHistoryFirst);
  }
  public get searchServicesCategories () {
    return super.get(searchServicesCategories);
  }
  public get searchResult () {
    return super.get(searchResult);
  }
  public get searchMap () {
    return super.get(searchMap);
  }
  public get searchUnits ()  {
    return super.getAll(searchUnits);
  }
  public get mainTitle () {
    return super.get(mainTitle);
  }
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
  public get vehiclesItemsNames() {
    return super.getAll(vehiclesItemsNames);
  }

  public async searchCertainService (text: string) {
    return $(`//div[@data-testid="services"]/div[contains(text(), "${text}")]`)
  }
  public async searchCertainCategory (text: string) {
    return $(`//div/div[contains(text(), "${text}")]`)
  }
  public async serviceTag (item: string) {
    return $(`//div[@itemprop="services"]//div[contains(text(),'${item}')]`)
  }
  public async clickCatalogButton () {
    await this.catalogButton.click();
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
  public async clickFirstSearchUnit () {
    await this.searchUnits[0].click();
  }
  public async clickNavLogo () {
    await this.navLogo.click();
  }
  public async clickSearchInput () {
    await this.searchInput.click();
  }
  public async clickSearchClear () {
    await this.searchClear.click();
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
