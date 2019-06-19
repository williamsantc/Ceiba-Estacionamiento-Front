import { browser, element, by, ExpectedConditions, ProtractorExpectedConditions, ElementFinder, $ } from 'protractor';

export class ParkingPage {
  until: ProtractorExpectedConditions;

  constructor() {
    this.until = ExpectedConditions;
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

  getBtnDispatchButton(licencePlate: string): ElementFinder {
    return $('#btnDispatch' + licencePlate);
  }

  getConfirmDispatchButton(): ElementFinder {
    return $('#btnConfirmDispatch');
  }

  getPaymentValue(): ElementFinder {
    return $('#paymentValue');
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

  async getPaymentValueText(): Promise<string> {
    return await this.getPaymentValue().getText();
  }

  // Set DOM values

  async setTextLicencePlate(text: string): Promise<void> {
    return await this.getLicencePLateField().sendKeys(text);
  }

  async setVehicleTypeOption(optIndex: number): Promise<void> {

    // Tick to wait until options apear
    await browser.sleep(500);
    // End tick
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

  async clickDispatchButton(licencePlate: string): Promise<void> {
    await this.getBtnDispatchButton(licencePlate).click();
  }

  async clickToastMessage(): Promise<void> {
    await this.getToastMessage().click();
  }

  async clickConfirmDispatchButton(): Promise<void> {
    await this.getConfirmDispatchButton().click();
  }

  // waitUntil PRESENT Methods

  async waitUntilEntryButtonIsPresent(): Promise<any> {
    return await this.waitUntilIsPresent(this.getEntryButton());
  }

  async waitUntilModalEntryTitleIsPresent(): Promise<any> {
    return await this.waitUntilIsPresent(this.getModalEntryTitle());
  }

  async waitUntilLicencePlateFieldIsPresent(): Promise<void> {
    return await this.waitUntilIsPresent(this.getLicencePLateField());
  }

  async waitUnilToastMessageIsPresent(): Promise<void> {
    return await this.waitUntilIsPresent(this.getToastMessage());
  }

  async waitUntildispatchButtonIsPresent(licencePlate: string): Promise<void> {
    return await this.waitUntilIsPresent(this.getBtnDispatchButton(licencePlate));
  }

  async waitUntilConfirmDispatchButtonIsPresent(): Promise<any> {
    return await this.waitUntilIsPresent(this.getConfirmDispatchButton());
  }

  async waitUntilPaymentValueIsPresent(): Promise<void> {
    return await this.waitUntilIsPresent(this.getPaymentValue());
  }

  async waitUntilIsPresent(element: ElementFinder): Promise<void> {
    const id = await element.getId()
    return await browser.wait(
      this.until.presenceOf(element),
      5000,
      `Element ${id} taking too long to appear in the DOM`
    );

  }

  // waitUntil NOT PRESENT Methods

  async waitUnilToastMessageIsNotPresent(): Promise<void> {
    return await this.waitUntilIsNotPresent(this.getToastMessage());
  }

  async waitUntilIsNotPresent(element: ElementFinder): Promise<void> {
    const id = await element.getId()
    return await browser.wait(
      this.until.stalenessOf(element),
      5000,
      `Element ${id} taking too long to disappear in the DOM`
    );

  }
}