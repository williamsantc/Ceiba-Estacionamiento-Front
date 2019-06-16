export class Mask {
  decimal: string;
  thousands: string;
  prefix: string;
  precision: number;
  suffix: string;

  constructor(prefix: string, thousands: string, decimal: string, precision: number, suffix: string) {
    this.decimal = decimal;
    this.thousands = thousands;
    this.prefix = prefix;
    this.precision = precision;
    this.suffix = suffix;
  }
}