import { Mask } from '../models/Mask';

export const moneyMask = function (value: string, config: Mask): string {

  let precision = config.precision || 2
  let decimal = config.decimal || ','
  let thousands = config.thousands || '.'
  let prefix = config.prefix || ''
  let suffix = config.suffix || ''

  let val = (parseInt(value) / 1).toFixed(precision).replace('.', decimal)
  return (
    prefix +
    val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, thousands) +
    suffix
  )
}