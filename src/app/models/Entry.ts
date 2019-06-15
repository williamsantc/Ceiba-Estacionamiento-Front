export class Entry {
    licencePlate : string;
    vehicleType: string;
    engineDisplacement : string;
    entryTime: string;

    constructor(licencePlate : string, vehicleType: string, engineDisplacement : string) {
        this.licencePlate = licencePlate;
        this.vehicleType = vehicleType;
        this.engineDisplacement = engineDisplacement;
    }
}