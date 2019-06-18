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
    await parkingPage.waitUnilToastMessageExist();

    // Act
    const content = await parkingPage.getToastMessageText()

    // Assert
    expect(content.trim()).toEqual(expectedMessage);
  })
})