import { browser, element, by, ExpectedConditions, ProtractorExpectedConditions, ElementFinder, $ } from 'protractor';

export class ParkingPage {
  until: ProtractorExpectedConditions;
  vehicleTypes: any;

  constructor() {
    this.until = ExpectedConditions;
    this.vehicleTypes = {
      CAR: 0,
      MOTORCYCLE: 1
    }
  }

  // Tasks

  async taskOpenEntryModal(): Promise<void> {
    await this.waitUntilEntryButtonIsPresent();
    await this.clickEntryButton();
  }

  // Navigate

  navigateTo(url = 'entry'): Promise<void> {
    return browser.get(`${browser.baseUrl}${url}`) as Promise<void>;
  }

  // Get DOM elements

  getModalEntryTitle(): ElementFinder {
    return $('#modal-basic-title');
  }

  getEntryButton(): ElementFinder {
    return $('#btnEntry');
  }

  getLicencePLateField(): ElementFinder {
    return $('#licencePlate');
  }

  getVehicleTypeField(): ElementFinder {
    return $('#vehicleType');
  }

  getBtnSaveButton(): ElementFinder {
    return $('#btnSave');
  }

  getToastMessage(): ElementFinder {
    return element(by.className("toast-message"));
  }

  // Get content of DOM elements

  async getModalEntryTitleText(): Promise<string> {
    return await this.getModalEntryTitle().getText();
  }

  async getToastMessageText(): Promise<string> {
    return await this.getToastMessage().getText();
  }

  // Set DOM values

  async setTextLicencePlate(text: string): Promise<void> {
    return await this.getLicencePLateField().sendKeys(text);
  }

  async setVehicleTypeOption(optIndex: number): Promise<void> {

    // Tick to wait until options apear
    await browser.sleep(500);
    const options: ElementFinder[] = await this.getVehicleTypeField().all(by.tagName('option'));
    options[optIndex].click();
  }

  // Click Elements

  async clickVehicleTypeField(): Promise<void> {
    await this.getVehicleTypeField().click();
  }

  async clickEntryButton(): Promise<void> {
    await this.getEntryButton().click();
  }

  async clickBtnSaveButton(): Promise<void> {
    await this.getBtnSaveButton().click();
  }

  // waitUntil Methods

  async waitUntilEntryButtonIsPresent(): Promise<any> {
    return await this.waitUntil(this.getEntryButton());
  }

  async waitUntilModalEntryTitleIsPresent(): Promise<any> {
    return await this.waitUntil(this.getModalEntryTitle());
  }

  async waitUntilLicencePlateFieldIsPresent(): Promise<void> {
    return await this.waitUntil(this.getLicencePLateField());
  }

  async waitUnilToastMessageExist(): Promise<void> {
    return await this.waitUntil(this.getToastMessage());
  }

  async waitUntil(element: ElementFinder): Promise<void> {
    const id = await element.getId()
    return await browser.wait(
      this.until.presenceOf(element),
      5000,
      `Element ${id} taking too long to appear in the DOM`
    );
  }
}