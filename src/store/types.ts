import { Range } from 'react-date-range'

export interface IGlobalStore {
  sum?: Record<number, number>
  amount: number
  selectionRange: Range
}
