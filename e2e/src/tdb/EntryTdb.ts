
export class EntryTdb {
  licencePlate: string;
  vehicleType: number;
  engineDisplacement: string;

  constructor() {
    this.licencePlate = "WER234";
    this.vehicleType = 0;
    this.engineDisplacement = "";
  }

  public withLicencePlate(licencePlate: string): EntryTdb {
    this.licencePlate = licencePlate;
    return this;
  }

  public withVehiculeTypeCar(): EntryTdb {
    this.vehicleType = 1;
    return this;
  }

  public withVehiculeTypeMotorcycle(): EntryTdb {
    this.vehicleType = 2;
    return this;
  }

  public withEngineDisplacement(engineDisplacement: string): EntryTdb {
    this.engineDisplacement = engineDisplacement;
    return this;
  }

}