import { ParkingPage } from './parking.po'
import { EntryTdb } from './tdb/EntryTdb';

describe('Parking app', () => {

  let parkingPage: ParkingPage;
  const entryTdb: EntryTdb = new EntryTdb();

  beforeEach(async () => {
    parkingPage = new ParkingPage();

    await parkingPage.navigateTo();
    await parkingPage.taskOpenEntryModal();
  })

  it('should display modal entry', async () => {
    // Arrange
    await parkingPage.waitUntilModalEntryTitleIsPresent()

    // Act
    const content = await parkingPage.getModalEntryTitleText()

    // Assert
    expect(content.trim()).toEqual('Nuevo ingreso');
  })

  it('should request for licence plate', async () => {
    // Arrange
    const expectedMessage = "El campo cilindraje es requerido.";

    await parkingPage.waitUntilLicencePlateFieldIsPresent();
    await parkingPage.setTextLicencePlate(entryTdb.licencePlate);
    await parkingPage.setVehicleTypeOption(entryTdb.withVehiculeTypeMotorcycle().vehicleType);
    await parkingPage.clickBtnSaveButton();
    await parkingPage.waitUnilToastMessageIsPresent();

    // Act
    const content = await parkingPage.getToastMessageText()

    // Assert
    expect(content.trim()).toEqual(expectedMessage);
  })

  it('should should register', async () => {

    // Arrange
    const expectedMessage = "Ingreso registrado correctamente";

    await parkingPage.waitUntilLicencePlateFieldIsPresent();
    await parkingPage.setTextLicencePlate(entryTdb.licencePlate);
    await parkingPage.setVehicleTypeOption(entryTdb.withVehiculeTypeCar().vehicleType);
    await parkingPage.clickBtnSaveButton();
    await parkingPage.waitUnilToastMessageIsPresent();

    // Act
    const toastContent = await parkingPage.getToastMessageText()

    // Assert
    expect(toastContent.trim()).toEqual(expectedMessage);

  })

  /* it('sould dispatch entry', async () => {
    // Arrange

    const expectValue = "COP 1,000.00";
    await parkingPage.clickToastMessage();
    await parkingPage.waitUnilToastMessageIsNotPresent();
    await parkingPage.waitUntildispatchButtonIsPresent(entryTdb.licencePlate);
    await parkingPage.clickDispatchButton(entryTdb.licencePlate);
    await parkingPage.waitUntilConfirmDispatchButtonIsPresent();
    await parkingPage.clickConfirmDispatchButton();
    await parkingPage.waitUntilPaymentValueIsPresent();

    // Act
    const paymentValueContent = await parkingPage.getPaymentValueText();

    // Assert

    expect(paymentValueContent.trim()).toEqual(expectValue);
  }) */

})